import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Camera, BarChart3, Zap, Brain } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: "Instant Inventory",
    description: "See and manage inventory instantly through camera-based recognition.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80"
  },
  {
    icon: Zap,
    title: "Automated Sales",
    description: "Automate sales and accounting in real time — no expensive POS needed.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
  },
  {
    icon: BarChart3,
    title: "AI Analytics",
    description: "Understand performance through AI analytics and predictive insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
  },
  {
    icon: Brain,
    title: "Smart Decisions",
    description: "Make smarter decisions backed by actionable recommendations.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80"
  }
];

const OticVision = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden grid-bg">
          {/* Orb decorations */}
          <div className="orb orb-accent w-80 h-80 -top-40 -right-40 opacity-30" />
          <div className="orb orb-blue w-64 h-64 bottom-0 -left-32 opacity-20" />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-widest text-accent font-body mb-4">
                Product
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                <span className="text-gradient">Otic Vision</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed mb-8">
                The first intelligent eye for your business. Transform everyday operations 
                into intelligent insights with AI-powered computer vision.
              </p>
              <a
                href="https://oticvision.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-lg font-body font-medium text-sm uppercase tracking-wider text-foreground"
              >
                Explore Otic Vision
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* What is OticVision */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  AI-Powered Business Platform
                </h2>
                <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                  OticVision is an AI-powered business platform that transforms everyday operations 
                  into intelligent insights. Using computer vision and data intelligence, it empowers 
                  SMEs to operate smarter.
                </p>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80"
                  alt="Point of Sale System"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-accent/10" />
              </div>
            </div>
          </div>
        </section>

        {/* Features - Image-heavy cards */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
              Key Capabilities
            </h2>
            <p className="text-muted-foreground text-center font-body mb-16 max-w-2xl mx-auto">
              Powerful features designed to transform how SMEs operate across Africa
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group relative rounded-2xl overflow-hidden aspect-[16/10] glass-card-hover"
                >
                  {/* Background image */}
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground font-body">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-background to-background" />
          <div className="orb orb-blue w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
          
          <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
            <div className="glass-card max-w-3xl mx-auto p-12 rounded-2xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-muted-foreground font-body text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of SMEs across Africa using Otic Vision to streamline operations.
              </p>
              <Link
                to="/contact"
                className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-lg font-body font-medium text-sm uppercase tracking-wider text-foreground"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OticVision;
