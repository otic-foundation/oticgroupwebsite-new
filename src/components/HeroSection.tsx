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
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden grid-bg">
      {/* Animated orb decorations - enhanced */}
      <div className="orb orb-luminous w-[500px] h-[500px] -top-64 -right-64 animate-glow-pulse" />
      <div className="orb orb-blue w-80 h-80 top-1/3 -left-40 animate-float" style={{ animationDelay: '1s' }} />
      <div className="orb orb-accent w-64 h-64 bottom-20 right-1/4 animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      {/* Parallax decorative elements */}
      <div 
        ref={parallaxRef}
        className="absolute top-40 right-20 w-72 h-72 border border-accent-luminous/15 rounded-full -z-10 opacity-40"
      />
      
      {/* Main content */}
      <div className="container mx-auto px-6 lg:px-12 pt-28 lg:pt-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left sidebar */}
          <aside className="lg:col-span-2 animate-fade-up-delay-1">
            <div className="glass-card p-4 rounded-lg border-l-2 border-accent-luminous/50">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-body leading-relaxed">
                Empowering Africa's future<br />
                <span className="text-gradient font-medium">With Artificial Intelligence</span>
              </p>
            </div>
          </aside>

          {/* Main headline area */}
          <div className="lg:col-span-10">
            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-[0.95] tracking-tight animate-fade-up">
              <span className="block text-white">The Future</span>
              <span className="block text-cta italic">Reimagined</span>
            </h1>

            {/* Desktop layout: Image and description side by side */}
            <div className="mt-12 lg:mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Speaker image */}
              <div className="animate-fade-up-delay-2">
                <div className="relative w-full max-w-md mx-auto lg:mx-0">
                  {/* Glass frame with luminous border */}
                  <div className="absolute -inset-4 glass-card rounded-2xl -z-10 border border-accent-luminous/10" />
                  <div className="absolute -inset-8 border border-accent-luminous/5 rounded-3xl -z-20" />
                  
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={speakerImage}
                      alt="Visionary leader speaking about the future of African enterprise"
                      className="w-full h-auto object-cover"
                    />
                    {/* Gradient overlay with blue tint */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-accent-luminous/5 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Description block */}
              <div className="animate-fade-up-delay-3">
                <div className="section-panel p-6 rounded-xl border-l-2 border-cta/50">
                  <p className="text-base lg:text-lg text-muted-foreground font-body leading-relaxed italic">
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
            </div>

            {/* CTA buttons */}
            <div className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-up-delay-4">
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
      </div>
    </section>
  );
};

export default HeroSection;
