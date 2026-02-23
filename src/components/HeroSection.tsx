import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[0.95] tracking-tight animate-fade-up-delay-1 text-white">
              <span>The Future </span>
              <span className="text-cta italic">Reimagined</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Otic Internships section */}
      <section className="page-section py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-8">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Otic <span className="text-cta italic">Internships</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-body text-base sm:text-lg">
              Launch your career with hands-on AI projects, mentorship, and real-world impact.
            </p>
          </div>

          <a
            href="https://forms.zohopublic.com/bobdstvgm1/form/InternApplicationForm/formperma/51MorMsVuuJyRFD3WuvnNg7XrTVlHIfxd9_4Ds2oQUo"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-sm shadow-lg transition-all duration-300 ease-out hover:-translate-y-1"
          >
            <div className="grid lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto">
                <img
                  src="/agentic%20ai%20interns.jpg"
                  alt="Otic Internships flyer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center gap-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-body">
                    Recruitment
                  </p>
                  <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold">
                    Join the <span className="text-cta italic">Agentic AI</span> Internship Cohort
                  </h3>
                  <p className="mt-4 text-muted-foreground font-body text-sm sm:text-base">
                    Apply for a structured internship program focused on AI, product, and research.
                  </p>
                </div>
                <div>
                  <span className="inline-flex items-center justify-center rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
                    Apply Now
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* "What's new with us" section */}
      <section className="page-section py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-8">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              What's new <span className="text-cta italic">with us</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Featured Card - Left Column (60%, 7-8 cols) */}
            <Link
              to={'/research'}
              className="lg:col-span-7 group relative block overflow-hidden rounded-3xl transition-all duration-300 ease-out"
            >
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-3xl">
                {/* Featured Image */}
                <img
                  src="/bank.jpg"
                  alt="The Agentic AI Inflection Point In Banking"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                />

                {/* Gradient Overlay - Stronger for light mode readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Glass Border Glow on Hover */}
                <div className="absolute inset-0 rounded-3xl border border-white/20 group-hover:border-accent-luminous/40 transition-colors duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="transform transition-transform duration-300 ease-out group-hover:translate-y-[-8px]">
                    <h3 className="font-display text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{ color: '#ffffff', textShadow: '0 4px 16px rgba(0, 0, 0, 0.6)' }}>
                      The Agentic AI Inflection Point In Banking
                    </h3>
                    <div className="flex items-center gap-2 text-cta font-body font-medium text-sm group-hover:gap-3 transition-all duration-300" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.4)' }}>
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

                {/* Hover Lift Shadow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-luminous/0 to-accent-luminous/0 group-hover:from-accent-luminous/10 group-hover:to-accent-luminous/5 transition-all duration-300 pointer-events-none" />
              </div>
            </Link>

            {/* Compact Rail - Right Column (40%, 4-5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Compact Card 1 - Ecobank Uganda */}
              <Link
                to="/research"
                className="group relative block overflow-hidden rounded-2xl transition-all duration-300 ease-out h-40"
              >
                <div className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/60 to-accent/20 backdrop-blur-sm">
                  {/* Gradient instead of video */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                  {/* Glass Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-orange-500 group-hover:border-orange-400 transition-colors duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 transform transition-transform duration-300 ease-out group-hover:translate-y-[-4px]">
                    <h4 className="font-display text-lg font-bold mb-2 text-white light:text-black">
                      A reimagined series: Ecobank Uganda
                    </h4>
                    <div className="flex items-center gap-2 text-cta font-body text-xs font-medium group-hover:gap-3 transition-all duration-300">
                      <span>Read more</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-luminous/0 to-accent-luminous/0 group-hover:from-accent-luminous/10 group-hover:to-accent-luminous/5 transition-all duration-300 pointer-events-none" />
                </div>
              </Link>

              {/* Compact Card 2 - Research Header */}
              <Link
                to="/research"
                className="group relative block overflow-hidden rounded-2xl transition-all duration-300 ease-out h-40"
              >
                <div className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/80 to-secondary/40 backdrop-blur-sm">
                  {/* Placeholder with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-luminous/20 via-transparent to-transparent" />

                  {/* Glass Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-orange-500 group-hover:border-orange-400 transition-colors duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 transform transition-transform duration-300 ease-out group-hover:translate-y-[-4px]">
                    <h4 className="font-display text-lg font-bold mb-2 text-white light:text-black">
                      Research Reimagined
                    </h4>
                    <p className="font-body text-xs mb-2 line-clamp-1" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      Exploring AI's impact
                    </p>
                    <div className="flex items-center gap-2 text-cta font-body text-xs font-medium group-hover:gap-3 transition-all duration-300">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-luminous/0 to-accent-luminous/0 group-hover:from-accent-luminous/10 group-hover:to-accent-luminous/5 transition-all duration-300 pointer-events-none" />
                </div>
              </Link>

              {/* Compact Card 3 - Updates */}
              <Link
                to="/research"
                className="group relative block overflow-hidden rounded-2xl transition-all duration-300 ease-out h-40"
              >
                <div className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-accent/10 to-secondary/40 backdrop-blur-sm">
                  {/* Accent glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cta/10 via-transparent to-transparent" />

                  {/* Glass Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-orange-500 group-hover:border-orange-400 transition-colors duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 transform transition-transform duration-300 ease-out group-hover:translate-y-[-4px]">
                    <h4 className="font-display text-lg font-bold mb-2 text-white light:text-black">
                      Latest Insights
                    </h4>
                    <p className="font-body text-xs mb-2 line-clamp-1" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      AI trends & analysis
                    </p>
                    <div className="flex items-center gap-2 text-cta font-body text-xs font-medium group-hover:gap-3 transition-all duration-300">
                      <span>Discover</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-luminous/0 to-accent-luminous/0 group-hover:from-accent-luminous/10 group-hover:to-accent-luminous/5 transition-all duration-300 pointer-events-none" />
                </div>
              </Link>
            </div>
          </div>

          {/* View All Updates Link */}
          <div className="flex justify-end mt-8">
            <Link
              to="/research"
              className="flex items-center gap-2 text-cta font-body text-sm font-medium hover:gap-3 transition-all duration-300 group"
            >
              <span>View all updates</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
