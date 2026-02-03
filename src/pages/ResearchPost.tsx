import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Download } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

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
}

const ResearchPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<ResearchPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      // Redirect to specialized page for reimagined-banking
      if (slug === 'reimagined-banking') {
        window.location.href = '/research/reimagined-banking';
        return;
      }

      const { data, error } = await supabase
        .from('research_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error || !data) {
        setNotFound(true);
      } else {
        setPost(data);
      }
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen noise-overlay">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="flex flex-col min-h-screen noise-overlay">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center py-32">
          <h1 className="font-display text-4xl font-bold text-white mb-4">
            Research Post Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The research article you're looking for doesn't exist.
          </p>
          <Link 
            to="/research"
            className="btn-glow px-6 py-3 rounded-lg text-cta-foreground flex items-center gap-2"
          >
            Back to Research
            <ArrowRight className="w-4 h-4" />
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen noise-overlay">
      <Header />
      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-cta" />
                <p className="text-xs uppercase tracking-widest text-cta font-body">
                  {post.category}
                </p>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                {post.preamble}
              </p>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        {post.cover_image_url && (
          <section className="py-12 bg-background">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl mx-auto">
                <img 
                  src={post.cover_image_url} 
                  alt={post.title}
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </section>
        )}

        {/* Executive Summary */}
        {post.executive_summary && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-8">
                  Executive Summary
                </h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  {post.executive_summary.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground font-body leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Links & CTA */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              {post.industries_link && (
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground text-sm">Industries:</span>
                  <Link 
                    to={post.industries_link}
                    className="text-white font-medium hover:text-cta transition-colors"
                  >
                    Banking & Financial Services
                  </Link>
                </div>
              )}
              {post.services_link && (
                <>
                  <span className="text-muted-foreground hidden md:inline">|</span>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground text-sm">Services:</span>
                    <Link 
                      to={post.services_link}
                      className="text-white font-medium hover:text-cta transition-colors"
                    >
                      Agentic AI Enterprise Transformation
                    </Link>
                  </div>
                </>
              )}
            </div>

            {post.download_file_url && (
              <a
                href={post.download_file_url}
                download
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cta text-cta font-body font-medium text-sm uppercase tracking-wider hover:bg-cta hover:text-cta-foreground transition-all duration-300 rounded-full"
              >
                <Download className="w-4 h-4" />
                Access The Full Report
              </a>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchPost;
