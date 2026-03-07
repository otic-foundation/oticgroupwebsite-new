import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import reimaginedSeriesCover from '@/assets/research/reimagined-cover.png';

interface ResearchCard {
  id: string;
  category: string;
  title: string;
  preamble: string;
  image: string;
  link: string;
}

// Default static research items (fallback)
const staticResearchItems: ResearchCard[] = [
  {
    id: 'reimagined-banking',
    category: 'RESEARCH REPORT',
    title: 'Reimagined Banking',
    preamble:
      'From experimentation to revenue-grade deployment: how agentic AI lets growth decouple from headcount across Tier 1 banks.',
    image: '/reimaginedbanking.jpg',
    link: '/research/reimagined-banking',
  },
  {
    id: 'reimagined-series',
    category: 'FIELD SERIES',
    title: 'Reimagined Series',
    preamble:
      'Ecobank Uganda field briefs that document production-grade orchestration, escalation ladders, and policy guardrails.',
    image: reimaginedSeriesCover,
    link: '/research#reimagined-series',
  },
];

const Research = () => {
  const researchItems = staticResearchItems;

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

        {/* Research Cards Rail */}
        <section className="research-cards-section py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="research-card-rail flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory -mx-4 px-4 lg:mx-0 lg:px-0">
              {researchItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className="research-card group flex flex-col md:flex-row overflow-hidden min-w-[320px] sm:min-w-[520px] lg:min-w-[640px] h-[360px] snap-start"
                >
                  <div className="research-card-media relative w-full md:w-[45%] h-[180px] md:h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="research-card-body flex w-full md:w-[55%] items-center p-8">
                    <div className="space-y-4">
                      <p className="research-card-tag">
                        {item.category}
                      </p>
                      <h3 className="research-card-title font-display text-2xl md:text-[32px] font-semibold leading-tight">
                        {item.title}
                      </h3>
                      <p className="research-card-copy text-sm md:text-base font-body leading-relaxed">
                        {item.preamble}
                      </p>
                      <div className="research-card-cta inline-flex items-center gap-2 font-semibold">
                        <span>Read the paper</span>
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
