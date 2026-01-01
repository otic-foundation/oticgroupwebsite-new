import speakerImage from '@/assets/speaker.jpeg';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Parallax background element */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-xs uppercase tracking-widest text-accent font-body mb-3">
            About Otic Group
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Pioneering AI<br />
            <span className="text-muted-foreground">for Africa</span>
          </h2>
        </div>

        {/* Asymmetrical grid layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left column - Image with offset */}
          <div className="lg:col-span-5 lg:col-start-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-accent/30 -z-10" />
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-accent -z-10" />
              
              <img
                src={speakerImage}
                alt="Nesta Paul Katende, Founder & CEO"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                <p className="font-display text-xl font-bold">Nesta Paul Katende</p>
                <p className="text-sm text-muted-foreground">Founder & Group CEO</p>
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="lg:col-span-6 lg:col-start-7 space-y-12">
            {/* Mission */}
            <div className="border-l-2 border-accent pl-6">
              <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                To become Africa's leading AI enterprise by delivering intelligent systems 
                that transform how organizations operate, decide, and scale. We bridge the 
                gap between cutting-edge research and practical business transformation.
              </p>
            </div>

            {/* Vision */}
            <div className="border-l-2 border-muted-foreground/30 pl-6">
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                A future where African enterprises lead global innovation through 
                AI-powered intelligence, workforce readiness, and sustainable systems thinking.
              </p>
            </div>

            {/* Stats/Credentials */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="font-display text-3xl lg:text-4xl font-bold text-accent">5+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Years</p>
              </div>
              <div>
                <p className="font-display text-3xl lg:text-4xl font-bold text-accent">1000+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Trained</p>
              </div>
              <div>
                <p className="font-display text-3xl lg:text-4xl font-bold text-accent">3</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Ventures</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
