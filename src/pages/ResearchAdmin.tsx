import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Edit2, Plus, Save, X, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ResearchPost {
  id: string;
  title: string;
  category: string;
  preamble: string;
  executive_summary: string | null;
  cover_image_url: string | null;
  download_file_url: string | null;
  slug: string;
  industries_link: string | null;
  services_link: string | null;
  published: boolean;
  display_order: number;
  created_at: string;
}

interface DispatchHighlight {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image_url: string | null;
  link: string;
  cta_label: string;
  published: boolean;
  display_order: number | null;
  created_at: string;
}

const ResearchAdmin = () => {
  const [posts, setPosts] = useState<ResearchPost[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [dispatchItems, setDispatchItems] = useState<DispatchHighlight[]>([]);
  const [isCreatingDispatch, setIsCreatingDispatch] = useState(false);
  const [editingDispatchId, setEditingDispatchId] = useState<string | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    category: 'RESEARCH REPORT',
    preamble: '',
    executive_summary: '',
    cover_image_url: '',
    download_file_url: '',
    slug: '',
    industries_link: '/industries',
    services_link: '/services',
    published: true,
    display_order: 0,
  });

  const [dispatchFormData, setDispatchFormData] = useState({
    eyebrow: 'RESEARCH PLAYBOOK',
    title: '',
    description: '',
    image_url: '',
    link: '/research',
    cta_label: 'Read the report',
    published: true,
    display_order: 0,
  });

  useEffect(() => {
    fetchPosts();
    fetchDispatches();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('research_posts')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      toast({
        title: 'Error fetching posts',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      setPosts(data || []);
    }
    setLoading(false);
  };

  const fetchDispatches = async () => {
    const { data, error } = await supabase
      .from('dispatch_highlights')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      toast({
        title: 'Error fetching dispatch highlights',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      setDispatchItems(data || []);
    }
  };

  const uploadAsset = async (file: File) => {
    setUploading(true);
    const fileName = `${Date.now()}-${file.name}`;
    const { error } = await supabase.storage
      .from('research-files')
      .upload(fileName, file);

    if (error) {
      toast({
        title: 'Upload failed',
        description: error.message,
        variant: 'destructive',
      });
      setUploading(false);
      return null;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('research-files')
      .getPublicUrl(fileName);

    toast({
      title: 'File uploaded',
      description: 'File uploaded successfully.',
    });
    setUploading(false);
    return publicUrl;
  };

  const handleFileUpload = async (file: File, type: 'image' | 'pdf') => {
    const publicUrl = await uploadAsset(file);
    if (!publicUrl) return;

    if (type === 'image') {
      setFormData(prev => ({ ...prev, cover_image_url: publicUrl }));
    } else {
      setFormData(prev => ({ ...prev, download_file_url: publicUrl }));
    }
  };

  const handleDispatchImageUpload = async (file: File) => {
    const publicUrl = await uploadAsset(file);
    if (!publicUrl) return;
    setDispatchFormData(prev => ({ ...prev, image_url: publicUrl }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.preamble || !formData.slug) {
      toast({
        title: 'Missing required fields',
        description: 'Please fill in title, preamble, and slug.',
        variant: 'destructive',
      });
      return;
    }

    if (editingId) {
      const { error } = await supabase
        .from('research_posts')
        .update(formData)
        .eq('id', editingId);

      if (error) {
        toast({
          title: 'Update failed',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Post updated',
          description: 'Research post updated successfully.',
        });
        setEditingId(null);
        resetForm();
        fetchPosts();
      }
    } else {
      const { error } = await supabase
        .from('research_posts')
        .insert([formData]);

      if (error) {
        toast({
          title: 'Creation failed',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Post created',
          description: 'Research post created successfully.',
        });
        setIsCreating(false);
        resetForm();
        fetchPosts();
      }
    }
  };

  const handleDispatchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!dispatchFormData.title || !dispatchFormData.description || !dispatchFormData.link) {
      toast({
        title: 'Missing required fields',
        description: 'Please provide a title, description, and link.',
        variant: 'destructive',
      });
      return;
    }

    const payload = {
      ...dispatchFormData,
      image_url: dispatchFormData.image_url || null,
    };

    if (editingDispatchId) {
      const { error } = await supabase
        .from('dispatch_highlights')
        .update(payload)
        .eq('id', editingDispatchId);

      if (error) {
        toast({
          title: 'Update failed',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Highlight updated',
          description: 'Dispatch card updated successfully.',
        });
        setEditingDispatchId(null);
        resetDispatchForm();
        setIsCreatingDispatch(false);
        fetchDispatches();
      }
    } else {
      const { error } = await supabase
        .from('dispatch_highlights')
        .insert([payload]);

      if (error) {
        toast({
          title: 'Creation failed',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Highlight created',
          description: 'Dispatch card created successfully.',
        });
        resetDispatchForm();
        setIsCreatingDispatch(false);
        fetchDispatches();
      }
    }
  };

  const handleEdit = (post: ResearchPost) => {
    setFormData({
      title: post.title,
      category: post.category,
      preamble: post.preamble,
      executive_summary: post.executive_summary || '',
      cover_image_url: post.cover_image_url || '',
      download_file_url: post.download_file_url || '',
      slug: post.slug,
      industries_link: post.industries_link || '/industries',
      services_link: post.services_link || '/services',
      published: post.published,
      display_order: post.display_order,
    });
    setEditingId(post.id);
    setIsCreating(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    const { error } = await supabase
      .from('research_posts')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: 'Delete failed',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Post deleted',
        description: 'Research post deleted successfully.',
      });
      fetchPosts();
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: 'RESEARCH REPORT',
      preamble: '',
      executive_summary: '',
      cover_image_url: '',
      download_file_url: '',
      slug: '',
      industries_link: '/industries',
      services_link: '/services',
      published: true,
      display_order: 0,
    });
  };

  const cancelEdit = () => {
    setIsCreating(false);
    setEditingId(null);
    resetForm();
  };

  const handleDispatchEdit = (highlight: DispatchHighlight) => {
    setDispatchFormData({
      eyebrow: highlight.eyebrow,
      title: highlight.title,
      description: highlight.description,
      image_url: highlight.image_url || '',
      link: highlight.link,
      cta_label: highlight.cta_label,
      published: highlight.published,
      display_order: highlight.display_order ?? 0,
    });
    setEditingDispatchId(highlight.id);
    setIsCreatingDispatch(true);
  };

  const handleDispatchDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this highlight?')) return;

    const { error } = await supabase
      .from('dispatch_highlights')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: 'Delete failed',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Highlight deleted',
        description: 'Dispatch card deleted successfully.',
      });
      fetchDispatches();
    }
  };

  const resetDispatchForm = () => {
    setDispatchFormData({
      eyebrow: 'RESEARCH PLAYBOOK',
      title: '',
      description: '',
      image_url: '',
      link: '/research',
      cta_label: 'Read the report',
      published: true,
      display_order: 0,
    });
  };

  const cancelDispatchEdit = () => {
    setIsCreatingDispatch(false);
    setEditingDispatchId(null);
    resetDispatchForm();
  };

  return (
    <div className="flex flex-col min-h-screen noise-overlay">
      <Header />
      <main className="flex-1 py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-display text-4xl font-bold text-white mb-2">
            {/* Dispatch Highlights Management */}
            <div className="mt-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-white mb-2">
                    Dispatch Highlights
                  </h2>
                  <p className="text-muted-foreground font-body max-w-2xl">
                    Control the "What's new with us" rail on the homepage. Publish, edit, or retire cards without touching code.
                  </p>
                </div>
                {!isCreatingDispatch && (
                  <Button 
                    onClick={() => setIsCreatingDispatch(true)}
                    className="bg-cta text-cta-foreground hover:bg-cta/90"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Highlight
                  </Button>
                )}
              </div>

              {isCreatingDispatch && (
                <Card className="mb-8 bg-card/80 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">
                      {editingDispatchId ? 'Edit Dispatch Highlight' : 'Create Dispatch Highlight'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleDispatchSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="dispatch_eyebrow" className="text-white">Category Label</Label>
                          <Input
                            id="dispatch_eyebrow"
                            value={dispatchFormData.eyebrow}
                            onChange={(e) => setDispatchFormData(prev => ({ ...prev, eyebrow: e.target.value }))}
                            placeholder="RESEARCH PLAYBOOK"
                            className="bg-secondary/50 border-white/10"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dispatch_display_order" className="text-white">Display Order</Label>
                          <Input
                            id="dispatch_display_order"
                            type="number"
                            value={dispatchFormData.display_order}
                            onChange={(e) => setDispatchFormData(prev => ({ ...prev, display_order: parseInt(e.target.value) || 0 }))}
                            className="bg-secondary/50 border-white/10"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dispatch_title" className="text-white">Title *</Label>
                        <Input
                          id="dispatch_title"
                          value={dispatchFormData.title}
                          onChange={(e) => setDispatchFormData(prev => ({ ...prev, title: e.target.value }))}
                          placeholder="Enter highlight title"
                          className="bg-secondary/50 border-white/10"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dispatch_description" className="text-white">Description *</Label>
                        <Textarea
                          id="dispatch_description"
                          value={dispatchFormData.description}
                          onChange={(e) => setDispatchFormData(prev => ({ ...prev, description: e.target.value }))}
                          placeholder="Brief summary shown on the card"
                          rows={4}
                          className="bg-secondary/50 border-white/10"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="dispatch_link" className="text-white">Link *</Label>
                          <Input
                            id="dispatch_link"
                            value={dispatchFormData.link}
                            onChange={(e) => setDispatchFormData(prev => ({ ...prev, link: e.target.value }))}
                            placeholder="/research/reimagined-banking"
                            className="bg-secondary/50 border-white/10"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dispatch_cta" className="text-white">CTA Label</Label>
                          <Input
                            id="dispatch_cta"
                            value={dispatchFormData.cta_label}
                            onChange={(e) => setDispatchFormData(prev => ({ ...prev, cta_label: e.target.value }))}
                            placeholder="Read the report"
                            className="bg-secondary/50 border-white/10"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-white">Card Image *</Label>
                        <div className="flex gap-2">
                          <Input
                            value={dispatchFormData.image_url}
                            onChange={(e) => setDispatchFormData(prev => ({ ...prev, image_url: e.target.value }))}
                            placeholder="Image URL or upload"
                            className="bg-secondary/50 border-white/10 flex-1"
                          />
                          <div className="relative">
                            <input
                              type="file"
                              accept="image/*"
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                              onChange={(e) => e.target.files?.[0] && handleDispatchImageUpload(e.target.files[0])}
                            />
                            <Button type="button" variant="outline" className="border-white/10 pointer-events-none" disabled={uploading}>
                              <Upload className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        {dispatchFormData.image_url && (
                          <img src={dispatchFormData.image_url} alt="Preview" className="w-32 h-32 object-cover rounded mt-2" />
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="dispatch_published"
                          checked={dispatchFormData.published}
                          onChange={(e) => setDispatchFormData(prev => ({ ...prev, published: e.target.checked }))}
                          className="w-4 h-4"
                        />
                        <Label htmlFor="dispatch_published" className="text-white">Published</Label>
                      </div>

                      <div className="flex gap-4">
                        <Button type="submit" className="bg-cta text-cta-foreground hover:bg-cta/90" disabled={uploading}>
                          <Save className="w-4 h-4 mr-2" />
                          {editingDispatchId ? 'Update Highlight' : 'Create Highlight'}
                        </Button>
                        <Button type="button" variant="outline" onClick={cancelDispatchEdit} className="border-white/10">
                          <X className="w-4 h-4 mr-2" />
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}

              <div className="space-y-4">
                <h3 className="font-display text-2xl font-bold text-white">
                  Existing Highlights ({dispatchItems.length})
                </h3>
                {dispatchItems.length === 0 ? (
                  <p className="text-muted-foreground">No highlights yet. Create one to populate the homepage rail.</p>
                ) : (
                  dispatchItems.map((highlight) => (
                    <Card key={highlight.id} className="bg-card/80 border-white/10">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-6">
                          {highlight.image_url && (
                            <img
                              src={highlight.image_url}
                              alt={highlight.title}
                              className="w-28 h-28 object-cover rounded"
                            />
                          )}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs uppercase tracking-wide text-cta">
                                {highlight.eyebrow}
                              </span>
                              {!highlight.published && (
                                <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded">
                                  Draft
                                </span>
                              )}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">{highlight.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                              {highlight.description}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              CTA: {highlight.cta_label} • Order: {highlight.display_order ?? 0}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => handleDispatchEdit(highlight)}
                              className="border-white/10"
                            >
                              <Edit2 className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => handleDispatchDelete(highlight.id)}
                              className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </div>

                Research Admin
              </h1>
              <p className="text-muted-foreground font-body">
                Manage research posts, upload files, and update content.
              </p>
            </div>
            {!isCreating && (
              <Button 
                onClick={() => setIsCreating(true)}
                className="bg-cta text-cta-foreground hover:bg-cta/90"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New Post
              </Button>
            )}
          </div>

          {/* Create/Edit Form */}
          {isCreating && (
            <Card className="mb-8 bg-card/80 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">
                  {editingId ? 'Edit Research Post' : 'Create New Research Post'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title" className="text-white">Title *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="Enter post title"
                        className="bg-secondary/50 border-white/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="slug" className="text-white">Slug (URL) *</Label>
                      <Input
                        id="slug"
                        value={formData.slug}
                        onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') }))}
                        placeholder="post-url-slug"
                        className="bg-secondary/50 border-white/10"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="category" className="text-white">Category</Label>
                      <Input
                        id="category"
                        value={formData.category}
                        onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                        placeholder="RESEARCH REPORT"
                        className="bg-secondary/50 border-white/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="display_order" className="text-white">Display Order</Label>
                      <Input
                        id="display_order"
                        type="number"
                        value={formData.display_order}
                        onChange={(e) => setFormData(prev => ({ ...prev, display_order: parseInt(e.target.value) || 0 }))}
                        className="bg-secondary/50 border-white/10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preamble" className="text-white">Preamble (Hover Text) *</Label>
                    <Textarea
                      id="preamble"
                      value={formData.preamble}
                      onChange={(e) => setFormData(prev => ({ ...prev, preamble: e.target.value }))}
                      placeholder="Brief summary shown on hover..."
                      rows={3}
                      className="bg-secondary/50 border-white/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="executive_summary" className="text-white">Executive Summary</Label>
                    <Textarea
                      id="executive_summary"
                      value={formData.executive_summary}
                      onChange={(e) => setFormData(prev => ({ ...prev, executive_summary: e.target.value }))}
                      placeholder="Full executive summary for the detail page..."
                      rows={6}
                      className="bg-secondary/50 border-white/10"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-white">Cover Image</Label>
                      <div className="flex gap-2">
                        <Input
                          value={formData.cover_image_url}
                          onChange={(e) => setFormData(prev => ({ ...prev, cover_image_url: e.target.value }))}
                          placeholder="Image URL or upload"
                          className="bg-secondary/50 border-white/10 flex-1"
                        />
                        <div className="relative">
                          <input
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0], 'image')}
                          />
                          <Button type="button" variant="outline" className="border-white/10 pointer-events-none" disabled={uploading}>
                            <Upload className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      {formData.cover_image_url && (
                        <img src={formData.cover_image_url} alt="Preview" className="w-32 h-32 object-cover rounded mt-2" />
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">Download File (PDF)</Label>
                      <div className="flex gap-2">
                        <Input
                          value={formData.download_file_url}
                          onChange={(e) => setFormData(prev => ({ ...prev, download_file_url: e.target.value }))}
                          placeholder="PDF URL or upload"
                          className="bg-secondary/50 border-white/10 flex-1"
                        />
                        <div className="relative">
                          <input
                            type="file"
                            accept=".pdf"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0], 'pdf')}
                          />
                          <Button type="button" variant="outline" className="border-white/10 pointer-events-none" disabled={uploading}>
                            <Upload className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="industries_link" className="text-white">Industries Link</Label>
                      <Input
                        id="industries_link"
                        value={formData.industries_link}
                        onChange={(e) => setFormData(prev => ({ ...prev, industries_link: e.target.value }))}
                        placeholder="/industries"
                        className="bg-secondary/50 border-white/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="services_link" className="text-white">Services Link</Label>
                      <Input
                        id="services_link"
                        value={formData.services_link}
                        onChange={(e) => setFormData(prev => ({ ...prev, services_link: e.target.value }))}
                        placeholder="/services"
                        className="bg-secondary/50 border-white/10"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="published"
                      checked={formData.published}
                      onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
                      className="w-4 h-4"
                    />
                    <Label htmlFor="published" className="text-white">Published</Label>
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="bg-cta text-cta-foreground hover:bg-cta/90" disabled={uploading}>
                      <Save className="w-4 h-4 mr-2" />
                      {editingId ? 'Update Post' : 'Create Post'}
                    </Button>
                    <Button type="button" variant="outline" onClick={cancelEdit} className="border-white/10">
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Posts List */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-white mb-4">
              Existing Posts ({posts.length})
            </h2>
            
            {loading ? (
              <p className="text-muted-foreground">Loading posts...</p>
            ) : posts.length === 0 ? (
              <p className="text-muted-foreground">No research posts yet. Create your first one!</p>
            ) : (
              posts.map((post) => (
                <Card key={post.id} className="bg-card/80 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      {post.cover_image_url && (
                        <img 
                          src={post.cover_image_url} 
                          alt={post.title}
                          className="w-24 h-24 object-cover rounded"
                        />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs uppercase tracking-wide text-cta">
                            {post.category}
                          </span>
                          {!post.published && (
                            <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded">
                              Draft
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">{post.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                          {post.preamble}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Slug: /research/{post.slug} • Order: {post.display_order}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleEdit(post)}
                          className="border-white/10"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleDelete(post.id)}
                          className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchAdmin;