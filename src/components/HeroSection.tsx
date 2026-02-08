import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import speakerImage from '@/assets/hero-speaker.jpeg';

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.15}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* DESKTOP VIEW - Headline above, full-width image, quote below */}
      <div className="hidden lg:block relative">
        {/* Headline Section */}
        <div className="relative z-10 pt-32 pb-10 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Small label */}
            <div className="glass-card p-4 rounded-lg border-l-2 border-accent-luminous/50 mb-8 inline-block animate-fade-up">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-body leading-relaxed">
                Empowering Africa's future{' '}
                <span className="text-gradient font-medium">With Artificial Intelligence</span>
              </p>
            </div>

            {/* Headline - single line */}
            <h1 className="font-display text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[0.95] tracking-tight animate-fade-up-delay-1">
              <span className="text-white">The Future </span>
              <span className="text-cta italic">Reimagined</span>
            </h1>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up-delay-2">
              <Link 
                to="/services" 
                className="btn-glow px-8 py-4 rounded-lg text-cta-foreground uppercase font-medium flex items-center gap-2 group"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="glass-card-hover px-8 py-4 rounded-lg text-foreground uppercase font-medium border border-accent-luminous/20 hover:border-accent-luminous/40"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Full-width hero image */}
        <div className="relative w-full overflow-hidden" style={{ height: '70vh' }}>
          <div ref={parallaxRef} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <img
              src={speakerImage}
              alt="Visionary leader speaking about the future of African enterprise"
              className="w-full h-full object-cover"
            />
            {/* Subtle gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
          </div>
        </div>

        {/* Quote section below the image */}
        <div className="relative z-10 py-16 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <div className="section-panel p-8 rounded-xl border-l-2 border-cta/50 animate-fade-up">
                <p className="text-lg lg:text-xl text-muted-foreground font-body leading-relaxed italic">
                  "We are architecting the intelligence layer for African enterprise. 
                  By merging rigorous systems thinking with adaptive AI, Otic Group 
                  is not just predicting what comes next—we are building the framework for it."
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-luminous/30 to-accent/20 flex items-center justify-center border border-accent-luminous/20">
                    <span className="text-accent-luminous font-display font-bold text-lg">N</span>
                  </div>
                  <div>
                    <p className="text-sm text-foreground font-body font-medium">
                      Nesta Paul Katende
                    </p>
                    <p className="text-xs text-muted-foreground font-body uppercase tracking-wide">
                      Group CEO & Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE/TABLET VIEW - Stacked layout */}
      <div className="lg:hidden min-h-screen relative grid-bg">
        {/* Animated orb decorations */}
        <div className="orb orb-luminous w-[300px] h-[300px] -top-32 -right-32 animate-glow-pulse" />
        <div className="orb orb-blue w-48 h-48 top-1/3 -left-24 animate-float" style={{ animationDelay: '1s' }} />
        <div className="orb orb-accent w-40 h-40 bottom-20 right-1/4 animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
        
        {/* Main content */}
        <div className="container mx-auto px-6 pt-28 pb-16 relative z-10">
          {/* Small label */}
          <div className="glass-card p-4 rounded-lg border-l-2 border-accent-luminous/50 mb-8 inline-block animate-fade-up">
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-body leading-relaxed">
              Empowering Africa's future<br />
              <span className="text-gradient font-medium">With Artificial Intelligence</span>
            </p>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight animate-fade-up-delay-1 mb-10">
            <span className="block text-white">The Future</span>
            <span className="block text-cta italic">Reimagined</span>
          </h1>

          {/* Speaker image */}
          <div className="animate-fade-up-delay-2 mb-10">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 glass-card rounded-2xl -z-10 border border-accent-luminous/10" />
              <div className="absolute -inset-8 border border-accent-luminous/5 rounded-3xl -z-20" />
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={speakerImage}
                  alt="Visionary leader speaking about the future of African enterprise"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-accent-luminous/5 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Description block */}
          <div className="animate-fade-up-delay-3 mb-10">
            <div className="section-panel p-6 rounded-xl border-l-2 border-cta/50">
              <p className="text-base text-muted-foreground font-body leading-relaxed italic">
                "We are architecting the intelligence layer for African enterprise. 
                By merging rigorous systems thinking with adaptive AI, Otic Group 
                is not just predicting what comes next—we are building the framework for it."
              </p>
              <div className="mt-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-luminous/30 to-accent/20 flex items-center justify-center border border-accent-luminous/20">
                  <span className="text-accent-luminous font-display font-bold text-lg">N</span>
                </div>
                <div>
                  <p className="text-sm text-foreground font-body font-medium">
                    Nesta Paul Katende
                  </p>
                  <p className="text-xs text-muted-foreground font-body uppercase tracking-wide">
                    Group CEO & Founder
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center animate-fade-up-delay-4">
            <Link 
              to="/services" 
              className="btn-glow px-8 py-4 rounded-lg text-cta-foreground uppercase font-medium flex items-center gap-2 group"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/about" 
              className="glass-card-hover px-8 py-4 rounded-lg text-foreground uppercase font-medium border border-accent-luminous/20 hover:border-accent-luminous/40"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
