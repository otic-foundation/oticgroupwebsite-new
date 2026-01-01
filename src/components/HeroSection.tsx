import { useState, useEffect, useRef } from 'react';
import speakerImage from '@/assets/speaker.jpeg';

const HeroSection = () => {
  const [isColorized, setIsColorized] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle color when scrolled past 300px
      setIsColorized(window.scrollY > 300);
      
      // Parallax effect for decorative elements
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Parallax decorative background */}
      <div 
        ref={parallaxRef}
        className="absolute top-20 right-10 w-64 h-64 border border-accent/10 rounded-full -z-10 opacity-50"
      />
      <div className="absolute bottom-40 left-10 w-32 h-32 border border-muted-foreground/10 -z-10 opacity-30" style={{ transform: 'rotate(45deg)' }} />
      
      {/* Main content container */}
      {/* Main content container */}
      <div className="container mx-auto px-6 lg:px-12 pt-28 lg:pt-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left sidebar */}
          <aside className="lg:col-span-2 animate-fade-up-delay-1">
            <div className="border-l-2 border-accent pl-4 py-1">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-body leading-relaxed">
                Empowering Africa's future<br />
                <span className="font-medium">With Artificial Intelligence</span>
              </p>
            </div>
          </aside>

          {/* Main headline area */}
          <div className="lg:col-span-10">
            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight animate-fade-up">
              <span className="block">The Future</span>
              <span className="block text-accent italic">Reimagined</span>
              <span className="text-accent">.</span>
            </h1>

            {/* Speaker image - centered below headline */}
            <div className="mt-12 lg:mt-16 flex justify-center animate-fade-up-delay-2">
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Decorative frame */}
                <div className="absolute -inset-3 border border-accent/20 -z-10" />
                <div className="absolute -inset-6 border border-border -z-20" />
                
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={speakerImage}
                    alt="Visionary leader speaking about the future of African enterprise"
                    className={`w-full h-auto object-cover transition-all duration-700 ${isColorized ? '' : 'grayscale'}`}
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Description block */}
            <div className="mt-16 lg:mt-20 flex justify-end animate-fade-up-delay-3">
              <div className="max-w-md border-l-2 border-muted-foreground/30 pl-6">
                <p className="text-base lg:text-lg text-muted-foreground font-body leading-relaxed italic">
                  "We are architecting the intelligence layer for African enterprise. 
                  By merging rigorous systems thinking with adaptive AI, Otic Group 
                  is not just predicting what comes next—we are building the framework for it."
                </p>
                <p className="mt-4 text-sm text-foreground font-body font-medium">
                  Nesta Paul Katende
                </p>
                <p className="text-xs text-muted-foreground font-body uppercase tracking-wide">
                  Group CEO & Founder, Otic Group
                </p>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="mt-12 flex justify-end animate-fade-up-delay-4">
              <a
                href="#explore"
                className="group flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors font-body"
              >
                <span className="animate-pulse-subtle">↓</span>
                <span>Scroll to explore</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
