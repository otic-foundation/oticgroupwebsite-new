import speakerImage from '@/assets/speaker.jpeg';

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Main content container */}
      <div className="container mx-auto px-6 lg:px-12 pt-28 lg:pt-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left sidebar */}
          <aside className="lg:col-span-2 animate-fade-up-delay-1">
            <div className="border-l-2 border-accent pl-4 py-1">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-body leading-relaxed">
                Systems<br />
                Manifesto<br />
                <span className="font-medium">V.1.0</span><br />
                Africa
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
                    className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Description block */}
            <div className="mt-16 lg:mt-20 flex justify-end animate-fade-up-delay-3">
              <div className="max-w-md border-l-2 border-muted-foreground/30 pl-6">
                <p className="text-base lg:text-lg text-muted-foreground font-body leading-relaxed">
                  We are architecting the intelligence layer for African enterprise. 
                  By merging rigorous systems thinking with adaptive AI, Otic Group 
                  is not just predicting what comes next—we are building the framework for it.
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
