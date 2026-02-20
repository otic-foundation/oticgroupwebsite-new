import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import reimaginedBankingCover from '@/assets/research/reimagined-cover.png';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

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
            <h1 className="font-display text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[0.95] tracking-tight animate-fade-up-delay-1 text-white">
              <span>The Future </span>
              <span className="text-cta italic">Reimagined</span>
            </h1>
          </div>
        </div>
      </section>

      {/* "What's new with us" section */}
      <section className="page-section py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-5xl lg:text-6xl font-bold leading-tight">
              What's new <span className="text-cta italic">with us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reimagined Banking Card */}
            <Link
              to={'/research'}
              className="group relative block overflow-hidden rounded-xl bg-card/80 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center p-6 pt-16">
                  <img
                    src={reimaginedBankingCover}
                    alt="Reimagined Banking"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                    The Agentic AI Inflection Point In Banking
                  </h3>
                  <p className="text-white/80 font-body text-sm leading-relaxed mb-4">
                    Banks are crossing a structural boundary: from AI as an assistant to AI as an autonomous actor.
                  </p>
                  <div className="flex items-center gap-2 text-cta font-body text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Ecobank Uganda Card with Video */}
            <Link
              to="/research"
              className="group relative block overflow-hidden rounded-xl bg-card/80 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* Video as background */}
                <video
                  autoPlay
                  muted
                  loop
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/ecobank-video.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                    A reimagined series: Ecobank Uganda
                  </h3>
                  <div className="flex items-center gap-2 text-cta font-body text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
