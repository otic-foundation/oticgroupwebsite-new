import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, BookOpen, Award, Clock, Briefcase, GraduationCap, Target } from 'lucide-react';

const OticLearn = () => {
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
                  Education
                </p>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white">
                OticLearn
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed">
                At a time when AI is no longer a future concept but a present reality, Otic Learn 
                bridges the gap between curiosity and career readiness through curated, practical, 
                and industry relevant courses.
              </p>
            </div>
          </div>
        </section>

        {/* Platform Overview */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-cta font-body text-sm uppercase tracking-widest mb-4">
                  Digital Learning Environment
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                  A Comprehensive Learning Platform
                </h2>
                <p className="text-muted-foreground font-body text-lg mb-8">
                  The platform supports learners at every stage, from beginners taking their first 
                  steps in AI to professionals seeking advanced applied expertise.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center border border-white/20 flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-cta" />
                    </div>
                    <p className="text-muted-foreground font-body">
                      Access structured, expert created AI and data science courses
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center border border-white/20 flex-shrink-0">
                      <Clock className="w-5 h-5 text-cta" />
                    </div>
                    <p className="text-muted-foreground font-body">
                      Learn at your own pace, on your own schedule
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center border border-white/20 flex-shrink-0">
                      <Award className="w-5 h-5 text-cta" />
                    </div>
                    <p className="text-muted-foreground font-body">
                      Gain certifications that validate your skills and enhance career competitiveness
                    </p>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="Collaborative learning environment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-accent/5" />
              </div>
            </div>
          </div>
        </section>

        {/* Why OticLearn */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Why OticLearn Matters
              </h2>
              <p className="text-white/80 font-body text-lg">
                The world is rapidly adopting AI, and demand for relevant skills is outstripping supply. 
                Organizations no longer hire for titles alone — they hire for capability. Otic Learn 
                answers that need by equipping individuals with skills that employers are actively seeking, 
                translating digital learning into real world advantage.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-white/10 group hover:border-cta/40 transition-colors rounded-xl">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  Structured Learning Pathways
                </h3>
                <p className="text-white/70 font-body">
                  Designed for both foundational understanding and advanced mastery, guiding you 
                  step by step through your AI journey.
                </p>
              </div>
              
              <div className="p-8 border border-white/10 group hover:border-cta/40 transition-colors rounded-xl">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-6">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  Practical Labs & Exercises
                </h3>
                <p className="text-white/70 font-body">
                  Applied exercises that translate theory into real world problem solving, 
                  preparing you for actual workplace challenges.
                </p>
              </div>
              
              <div className="p-8 border border-white/10 group hover:border-cta/40 transition-colors rounded-xl">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-6">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  Recognized Certifications
                </h3>
                <p className="text-white/70 font-body">
                  Globally recognized certification options that support career advancement 
                  and professional credibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
              Start Your AI Learning Journey
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 max-w-2xl mx-auto">
              Whether you want to launch a career in AI or accelerate your professional impact, 
              Otic Learn gives you the structure, support, and certification you need.
            </p>
            <a
              href="https://oticlearn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-cta-foreground font-body font-medium text-sm uppercase tracking-wider hover:bg-cta/90 transition-colors rounded-lg"
            >
              Enroll Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OticLearn;
