import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Award, Users, Globe, Target, Building2, Heart, GraduationCap } from 'lucide-react';
import speakerImage from '@/assets/speaker.jpeg';
import PartnerCarousel from '@/components/PartnerCarousel';

const About = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['AI', 'Agents', 'Otic'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen noise-overlay">
      <Header />
      <main className="flex-1">
        {/* Hero Section with Flipping Text */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-widest text-accent font-body mb-4">
                Company
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
                <span className="text-white">Reimagine your organisation with </span>
                <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
                  {words.map((word, index) => (
                    <span
                      key={word}
                      className={`absolute left-0 text-accent transition-all duration-500 ${
                        index === currentWord 
                          ? 'translate-y-0 opacity-100' 
                          : index === (currentWord - 1 + words.length) % words.length
                            ? '-translate-y-full opacity-0'
                            : 'translate-y-full opacity-0'
                      }`}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed">
                Otic Group is a diversified AI powerhouse accelerating Africa's digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Corporate Structure */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-16 text-center">
              Our Corporate Structure
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-border bg-background group hover:border-cta/50 transition-colors">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-6">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-white">
                  Otic Technologies
                </h3>
                <p className="text-muted-foreground font-body">
                  Delivers enterprise AI consulting, agent based automation, AI strategy, and 
                  enterprise transformation for organizations.
                </p>
              </div>

              <div className="p-8 border border-border bg-background group hover:border-cta/50 transition-colors">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-6">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-white">
                  Otic Foundation
                </h3>
                <p className="text-muted-foreground font-body mb-4">
                  Leads national AI awareness, community skilling, and digital capacity building 
                  initiatives for underserved groups.
                </p>
                <p className="text-accent font-body font-medium">
                  Over 5500 Ugandans trained in critical AI competencies
                </p>
              </div>

              <div className="p-8 border border-border bg-background group hover:border-cta/50 transition-colors">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-6">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-white">
                  Otic Institute of Emerging Technologies
                </h3>
                <p className="text-muted-foreground font-body">
                  Provides advanced training, certifications, and applied research in AI and 
                  frontier technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprises We Have Reimagined */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1a365d] mb-12 text-center">
              Enterprises We Have Reimagined
            </h2>
            <PartnerCarousel />
            <div className="text-center mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a365d] text-white font-body font-medium text-sm uppercase tracking-wider hover:bg-[#1a365d]/90 transition-colors"
              >
                Talk to Sales
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border border-accent/30 -z-10" />
                <img
                  src={speakerImage}
                  alt="Nesta Paul Katende, Founder & CEO"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-accent font-body mb-4">
                  Leadership
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                  Nesta Paul Katende
                </h2>
                <p className="text-lg text-muted-foreground font-body mb-4">
                  Founder & Group CEO
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-8 italic text-lg">
                  "We are architecting the intelligence layer for African enterprise. 
                  By merging rigorous systems thinking with adaptive AI, Otic Group 
                  is not just predicting what comes next—we are building the framework for it."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Traction Stats */}
        <section className="py-20 bg-[hsl(var(--deep-sea-blue))]">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-16 text-center">
              Our Traction
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Award, stat: "5+", label: "Years of Experience", desc: "Government endorsed AI implementor and educator" },
                { icon: Users, stat: "5,500+", label: "Trained Professionals", desc: "Corporate, institutional, and community programs" },
                { icon: Globe, stat: "15,000+", label: "Community Members", desc: "AI talent, tech leaders, and enthusiasts" },
                { icon: Target, stat: "2", label: "Countries", desc: "Operations in Uganda and Rwanda" }
              ].map((item, index) => (
                <div key={index} className="text-center p-8 border border-white/20 group hover:border-cta/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center border border-white/20 mx-auto mb-4">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-display text-4xl font-bold text-white mb-2">{item.stat}</p>
                  <p className="text-cta font-body font-medium mb-2">{item.label}</p>
                  <p className="text-white/60 font-body text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Endorsement */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-xl glass-card flex items-center justify-center border border-white/20 mx-auto mb-8">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                Government Endorsed
              </h2>
              <p className="text-muted-foreground font-body text-lg">
                Through its efforts, Otic has achieved official endorsement from the 
                Government of Uganda as an AI implementor and educator in the country.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 max-w-2xl mx-auto">
              Partner with Otic Group to transform your organization with AI.
            </p>
            <Link
              to="/partners"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-body font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
            >
              Become a Partner
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
