import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import reimaginedBankingCover from '@/assets/research/reimagined-banking-cover.png';
import researchBg from '@/assets/research-bg.jpg';
import { supabase } from '@/integrations/supabase/client';

interface ResearchCard {
  id: string;
  category: string;
  title: string;
  preamble: string;
  image: string;
  link: string;
}

// Default static research items (fallback)
const defaultResearchItems: ResearchCard[] = [
  {
    id: 'reimagined-banking',
    category: 'RESEARCH REPORT',
    title: 'Reimagined Banking: The Agentic AI Inflection Point',
    preamble: 'Banks are crossing a structural boundary: from AI as an assistant to AI as an autonomous actor that plans, decides, and executes workflows within risk and policy constraints.',
    image: reimaginedBankingCover,
    link: '/research/reimagined-banking',
  },
];

const Research = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [researchItems, setResearchItems] = useState<ResearchCard[]>(defaultResearchItems);

  useEffect(() => {
    const fetchResearchPosts = async () => {
      const { data, error } = await supabase
        .from('research_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (data && data.length > 0) {
        const posts = data.map((post: any) => ({
          id: post.slug,
          category: post.category,
          title: post.title,
          preamble: post.preamble,
          image: post.cover_image_url || reimaginedBankingCover,
          link: `/research/${post.slug}`,
        }));
        setResearchItems(posts);
      }
    };

    fetchResearchPosts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen noise-overlay">
      <Header />
      <main className="flex-1">
        {/* Hero Section - matching Industries style */}
        <section className="pt-32 pb-20 relative overflow-hidden bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-cta" />
                <p className="text-xs uppercase tracking-widest text-cta font-body">
                  Insights
                </p>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white">
                Research
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed">
                Applied research from real deployments, systems, and field work. 
                Our insights emerge from building and deploying AI systems 
                in live enterprise environments across Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Research Cards Grid with Background Image */}
        <section className="py-20 relative min-h-[70vh]">
          {/* Background Image with Dark Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${researchBg})` }}
          />
          <div className="absolute inset-0 bg-background/85" />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className="group relative block overflow-hidden rounded-xl bg-card/80 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Category Label */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-xs uppercase tracking-widest text-cta font-body font-medium bg-background/80 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    {/* Image - object-contain to show full image */}
                    <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center p-6 pt-16">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                        {item.title}
                      </h3>
                      
                      {/* Preamble - Shows on hover */}
                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-out ${
                          hoveredCard === item.id 
                            ? 'max-h-32 opacity-100' 
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-white/80 font-body text-sm leading-relaxed mb-4">
                          {item.preamble}
                        </p>
                      </div>
                      
                      {/* Read More Link */}
                      <div className="flex items-center gap-2 text-cta font-body text-sm font-medium group-hover:gap-3 transition-all duration-300">
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
