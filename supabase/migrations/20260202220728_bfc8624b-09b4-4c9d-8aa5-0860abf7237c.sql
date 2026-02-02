-- Create research_posts table for admin management
CREATE TABLE public.research_posts (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'RESEARCH REPORT',
    preamble TEXT NOT NULL,
    executive_summary TEXT,
    cover_image_url TEXT,
    download_file_url TEXT,
    slug TEXT UNIQUE NOT NULL,
    industries_link TEXT,
    services_link TEXT,
    published BOOLEAN DEFAULT true,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.research_posts ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (no auth required)
CREATE POLICY "Anyone can view published research posts" 
ON public.research_posts 
FOR SELECT 
USING (published = true);

-- Create policy for public insert (admin without auth as requested)
CREATE POLICY "Anyone can insert research posts" 
ON public.research_posts 
FOR INSERT 
WITH CHECK (true);

-- Create policy for public update
CREATE POLICY "Anyone can update research posts" 
ON public.research_posts 
FOR UPDATE 
USING (true);

-- Create policy for public delete
CREATE POLICY "Anyone can delete research posts" 
ON public.research_posts 
FOR DELETE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_research_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_research_posts_updated_at
BEFORE UPDATE ON public.research_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_research_posts_updated_at();

-- Create storage bucket for research files
INSERT INTO storage.buckets (id, name, public) VALUES ('research-files', 'research-files', true);

-- Create policies for storage bucket
CREATE POLICY "Anyone can view research files" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'research-files');

CREATE POLICY "Anyone can upload research files" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'research-files');

CREATE POLICY "Anyone can update research files" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'research-files');

CREATE POLICY "Anyone can delete research files" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'research-files');