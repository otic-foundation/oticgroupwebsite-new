import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Camera, BarChart3, Zap, Brain } from 'lucide-react';

const OticVision = () => {
  return (
    <div className="flex flex-col min-h-screen noise-overlay">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-widest text-accent font-body mb-4">
                Product
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Otic Vision
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed mb-8">
                The first intelligent eye for your business. Transform everyday operations 
                into intelligent insights with AI-powered computer vision.
              </p>
              <a
                href="https://oticvision.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-body font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
              >
                Explore Otic Vision
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* What is OticVision */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  AI-Powered Business Platform
                </h2>
                <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                  OticVision is an AI-powered business platform that transforms everyday operations 
                  into intelligent insights. Using computer vision and data intelligence, it empowers 
                  SMEs to operate smarter.
                </p>
              </div>
              <div className="relative aspect-video bg-muted rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80"
                  alt="Point of Sale System"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-center">
              Key Capabilities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Camera,
                  title: "Instant Inventory",
                  description: "See and manage inventory instantly through camera-based recognition."
                },
                {
                  icon: Zap,
                  title: "Automated Sales",
                  description: "Automate sales and accounting in real time — no expensive POS needed."
                },
                {
                  icon: BarChart3,
                  title: "AI Analytics",
                  description: "Understand performance through AI analytics and predictive insights."
                },
                {
                  icon: Brain,
                  title: "Smart Decisions",
                  description: "Make smarter decisions backed by actionable recommendations."
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 border border-border hover:border-accent transition-colors">
                  <feature.icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground font-body">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[hsl(var(--deep-sea-blue))]">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/70 font-body text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of SMEs across Africa using Otic Vision to streamline operations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[hsl(var(--deep-sea-blue))] font-body font-medium text-sm uppercase tracking-wider hover:bg-accent hover:text-white transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OticVision;
