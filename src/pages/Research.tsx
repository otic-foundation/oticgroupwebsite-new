import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import reimaginedBankingCover from '@/assets/research/reimagined-banking-cover.png';

interface ResearchCard {
  id: string;
  category: string;
  title: string;
  preamble: string;
  image: string;
  link: string;
}

const researchItems: ResearchCard[] = [
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

  return (
    <div className="flex flex-col min-h-screen noise-overlay">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-widest text-accent font-body mb-4">
                Insights
              </p>
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

        {/* Research Cards Grid */}
        <section className="py-16 bg-[hsl(var(--deep-sea-blue))]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className="group relative block overflow-hidden rounded-lg bg-secondary/30 border border-white/10 transition-all duration-500 hover:border-accent/40"
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Category Label */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-xs uppercase tracking-widest text-accent font-body font-medium">
                      {item.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    
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
                      <div className="flex items-center gap-2 text-accent font-body text-sm font-medium group-hover:gap-3 transition-all duration-300">
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

        {/* CTA */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
              Partner With Us on Research
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 max-w-2xl mx-auto">
              Collaborate with Otic Group on groundbreaking AI research tailored for African markets.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-body font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
