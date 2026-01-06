import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, GraduationCap, Users, Building2, Globe } from 'lucide-react';

const OticLearn = () => {
  return (
    <div className="flex flex-col min-h-screen noise-overlay">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-widest text-accent font-body mb-4">
                Education
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white">
                OticLearn
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed mb-8">
                Otic Institute of Emerging Technologies — A center for advanced learning and research 
                in AI, data science, and frontier tech for the future of work.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Corporate Training */}
              <div className="p-8 border border-border bg-background group hover:border-cta/50 transition-colors">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-6">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-white">
                  Corporate AI Consultancy & Training
                </h3>
                <p className="text-muted-foreground font-body mb-6">
                  Empowering corporate organizations and the public sector to adopt and leverage 
                  AI for improved efficiency, decision-making, and innovation.
                </p>
                <ul className="space-y-3 text-muted-foreground font-body">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cta rounded-full" />
                    Customized AI strategies and use cases
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cta rounded-full" />
                    Workforce upskilling in AI and data literacy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cta rounded-full" />
                    AI agent building and deployment
                  </li>
                </ul>
              </div>

              {/* NFASI */}
              <div className="p-8 border border-border bg-background group hover:border-cta/50 transition-colors">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-white">
                  National Free AI Skilling Initiative
                </h3>
                <p className="text-muted-foreground font-body mb-6">
                  Free AI Skilling program across different regions in Uganda, equipping learners 
                  with foundational AI skills for the evolving world.
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="font-display text-3xl font-bold text-cta">5500+</p>
                    <p className="text-sm text-muted-foreground">Trained Learners</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-cta">15K+</p>
                    <p className="text-sm text-muted-foreground">Community Members</p>
                  </div>
                </div>
              </div>

              {/* University Programs */}
              <div className="p-8 border border-border bg-background group hover:border-cta/50 transition-colors">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-6">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-white">
                  University AI Programs
                </h3>
                <p className="text-muted-foreground font-body mb-6">
                  Free AI Skilling for students in universities across Uganda, equipping them 
                  with specific AI skills shaping their career choices.
                </p>
                <p className="text-sm text-muted-foreground font-body">
                  Practical agentic AI tools in Finance, Marketing, Engineering, Legal, and more.
                </p>
              </div>

              {/* Rwanda Expansion */}
              <div className="p-8 border border-border bg-background group hover:border-cta/50 transition-colors">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-6">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-white">
                  Otic Rwanda
                </h3>
                <p className="text-muted-foreground font-body mb-6">
                  Strategic expansion into Rwanda, delivering Enterprise Skilling and AI Business 
                  Process Outsourcing aligned with Rwanda's NST2 strategy.
                </p>
                <ul className="space-y-3 text-muted-foreground font-body">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cta rounded-full" />
                    Enterprise Skilling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cta rounded-full" />
                    Grassroots AI Literacy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cta rounded-full" />
                    Sector-specific certifications
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
              Start Your AI Learning Journey
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 max-w-2xl mx-auto">
              Whether you're an individual, corporation, or institution, we have a program for you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-body font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
            >
              Enroll Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OticLearn;
