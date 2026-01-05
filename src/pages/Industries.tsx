import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Building2, Landmark, Factory, Shield } from 'lucide-react';

const industries = [
  {
    icon: Landmark,
    name: "Banking & Financial Services",
    description: "Transform financial operations with AI-powered risk assessment, fraud detection, customer intelligence, and automated compliance.",
    capabilities: [
      "Credit risk modeling & assessment",
      "Fraud detection & prevention",
      "Customer journey optimization",
      "Regulatory compliance automation",
      "Investment analytics"
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
  },
  {
    icon: Building2,
    name: "Government",
    description: "Enable smarter public service delivery through intelligent automation, citizen engagement platforms, and data-driven policy making.",
    capabilities: [
      "Digital service transformation",
      "Citizen engagement platforms",
      "Policy analytics & insights",
      "Resource optimization",
      "Inter-agency coordination"
    ],
    image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800&q=80"
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Optimize production, supply chain, and quality control with AI-driven insights. From predictive maintenance to demand forecasting.",
    capabilities: [
      "Predictive maintenance",
      "Quality control automation",
      "Supply chain optimization",
      "Demand forecasting",
      "Production scheduling"
    ],
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80"
  },
  {
    icon: Shield,
    name: "Insurance",
    description: "Revolutionize underwriting, claims processing, and customer service with intelligent automation and AI-powered risk assessment.",
    capabilities: [
      "Automated underwriting",
      "Claims processing & fraud detection",
      "Risk assessment models",
      "Customer service automation",
      "Policy administration"
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
  }
];

const Industries = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden grid-bg">
          <div className="orb orb-accent w-80 h-80 -top-40 -right-40 opacity-30" />
          <div className="orb orb-blue w-64 h-64 bottom-0 -left-32 opacity-20" />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-widest text-accent font-body mb-4">
                Our Expertise
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                <span className="text-gradient">Industries</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed">
                AI impacts every sector differently. We bring deep domain expertise and 
                proven frameworks tailored to your industry's unique challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid - Image Cards */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-6">
              {industries.map((industry) => (
                <div 
                  key={industry.name} 
                  className="group relative rounded-2xl overflow-hidden glass-card-hover"
                >
                  {/* Background image */}
                  <div className="aspect-[4/3] relative">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
                        <industry.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h2 className="font-display text-xl lg:text-2xl font-bold text-foreground">
                        {industry.name}
                      </h2>
                    </div>
                    
                    <p className="text-muted-foreground font-body text-sm mb-4">
                      {industry.description}
                    </p>
                    
                    {/* Capabilities - shown on hover */}
                    <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {industry.capabilities.slice(0, 3).map((cap) => (
                          <span 
                            key={cap} 
                            className="px-3 py-1 text-xs font-body bg-accent/20 text-accent rounded-full"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-accent font-body font-medium text-sm hover:text-accent/80 transition-colors"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-background to-background" />
          <div className="orb orb-blue w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
          
          <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
            <div className="glass-card max-w-3xl mx-auto p-12 rounded-2xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Don't See Your Industry?
              </h2>
              <p className="text-muted-foreground font-body text-lg mb-8 max-w-2xl mx-auto">
                Our frameworks are adaptable across sectors. Let's discuss how we can 
                transform your industry with intelligent systems.
              </p>
              <Link
                to="/contact"
                className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-lg font-body font-medium text-sm uppercase tracking-wider text-foreground"
              >
                Contact Us
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

export default Industries;
