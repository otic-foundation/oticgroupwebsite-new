import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

type DispatchCard = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  link: string;
  cta: string;
};

const defaultHighlights: DispatchCard[] = [
  {
    id: 'reimagined-banking',
    eyebrow: 'Research Playbook',
    title: 'Reimagined Banking',
    description: 'Agentic AI architecture, governance, and revenue plays for Tier 1 banks across Africa.',
    image: '/reimaginedbanking.jpg',
    link: '/research/reimagined-banking',
    cta: 'Read the report',
  },
  {
    id: 'reimagined-series',
    eyebrow: 'Reimagined Series',
    title: 'Ecobank Uganda Field Notes',
    description: 'A glass-box tour of how frontline teams deploy agentic workflows without breaking controls.',
    image: '/oticbusiness.jpg',
    link: '/research#reimagined-series',
    cta: 'See the series',
  },
];

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const whatsNewRailRef = useRef<HTMLDivElement>(null);
  const [dispatches, setDispatches] = useState<DispatchCard[]>(defaultHighlights);

  const scrollWhatsNewRail = (direction: 'left' | 'right') => {
    if (!whatsNewRailRef.current) return;
    const card = whatsNewRailRef.current.querySelector<HTMLElement>('[data-update-card]');
    const step = card ? card.offsetWidth + 24 : 560;
    const offset = direction === 'left' ? -step : step;
    whatsNewRailRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  useEffect(() => {
    let isMounted = true;
    const fetchDispatches = async () => {
      try {
        const { data, error } = await supabase
          .from('dispatch_highlights')
          .select('id, eyebrow, title, description, image_url, link, cta_label, display_order')
          .eq('published', true)
          .order('display_order', { ascending: true });

        if (error) throw error;

        if (data && data.length && isMounted) {
          const formatted: DispatchCard[] = data.map((item, index) => ({
            id: item.id,
            eyebrow: item.eyebrow,
            title: item.title,
            description: item.description,
            image: item.image_url || defaultHighlights[index % defaultHighlights.length]?.image || '/reimaginedbanking.jpg',
            link: item.link,
            cta: item.cta_label || 'Read more',
          }));
          setDispatches(formatted);
        }
      } catch (error) {
        console.error('Failed to load dispatch highlights', error);
      }
    };

    fetchDispatches();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {/* Full-screen video hero from header to "What's new" */}
      <section className="video-hero-section relative pt-24">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-hero-overlay" />
        <div className="video-hero-content">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="glass-card p-4 rounded-lg border-l-2 border-accent-luminous/50 mb-8 inline-block animate-fade-up">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-body leading-relaxed">
                Empowering Africa's future{' '}
                <span className="text-gradient font-medium">With Artificial Intelligence</span>
              </p>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[0.95] tracking-tight animate-fade-up-delay-1 text-white">
              <span>The Future </span>
              <span className="text-cta italic">Reimagined</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Research Dispatches section */}
      <section className="dispatches-section page-section py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12">
            <div className="max-w-3xl space-y-4">
              <p className="dispatch-eyebrow text-xs uppercase tracking-[0.35em] font-semibold">
                Research Dispatches
              </p>
              <h2 className="dispatch-heading font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                Research Dispatches <span className="text-cta italic">with us</span>
              </h2>
              <p className="dispatch-support text-base sm:text-lg font-body leading-relaxed">
                Premium field notes, deployment playbooks, and live experiments across frontier sectors.
                Built for quick scans, saved reads, and boardroom briefs.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollWhatsNewRail('left')}
                className="dispatches-nav-btn"
                aria-label="Scroll dispatches left"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => scrollWhatsNewRail('right')}
                className="dispatches-nav-btn"
                aria-label="Scroll dispatches right"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              ref={whatsNewRailRef}
              className="dispatches-rail flex gap-8 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory -mx-4 px-4 lg:mx-0 lg:px-0"
            >
              {dispatches.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className="dispatch-card group snap-start"
                  data-update-card
                >
                  <div className="flex h-full flex-col md:flex-row">
                    <div className="dispatch-card-media relative w-full h-[180px] md:h-full md:w-[42%] flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                    <div className="dispatch-card-body flex flex-col justify-between gap-6 w-full md:w-[58%] flex-1 p-8">
                      <div className="space-y-3">
                        <p className="dispatch-tag">
                          {item.eyebrow}
                        </p>
                        <h3 className="dispatch-title font-display text-2xl lg:text-[32px] font-semibold leading-tight">
                          {item.title}
                        </h3>
                        <p className="dispatch-copy text-sm sm:text-base font-body leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="dispatch-cta inline-flex items-center gap-2 font-medium">
                        <span>{item.cta}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex justify-end mt-10">
            <Link
              to="/research"
              className="dispatch-view-all inline-flex items-center gap-2 text-sm font-semibold transition-all"
            >
              <span>Browse the full research library</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
