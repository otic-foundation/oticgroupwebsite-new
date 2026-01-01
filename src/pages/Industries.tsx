import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Building2, Landmark, Factory, Shield } from 'lucide-react';

const industries = [
  {
    icon: Landmark,
    name: "Banking & Financial Services",
    description: "Transform financial operations with AI-powered risk assessment, fraud detection, customer intelligence, and automated compliance. Our solutions drive efficiency while maintaining regulatory adherence.",
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
    description: "Enable smarter public service delivery through intelligent automation, citizen engagement platforms, and data-driven policy making. Partner with us to modernize government operations.",
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
    description: "Optimize production, supply chain, and quality control with AI-driven insights. From predictive maintenance to demand forecasting, transform your manufacturing operations.",
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
    description: "Revolutionize underwriting, claims processing, and customer service with intelligent automation. Reduce costs while improving accuracy and customer satisfaction.",
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
    <div className="flex flex-col min-h-screen noise-overlay">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-widest text-accent font-body mb-4">
                Our Expertise
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Industries
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed">
                AI impacts every sector differently. We bring deep domain expertise and 
                proven frameworks tailored to your industry's unique challenges and opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="space-y-20">
              {industries.map((industry, index) => (
                <div 
                  key={industry.name} 
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <industry.icon className="w-10 h-10 text-accent" />
                      <h2 className="font-display text-3xl font-bold">{industry.name}</h2>
                    </div>
                    <p className="text-muted-foreground font-body text-lg mb-8">
                      {industry.description}
                    </p>
                    <div className="mb-8">
                      <h4 className="font-display text-sm uppercase tracking-widest text-accent mb-4">
                        Key Capabilities
                      </h4>
                      <ul className="space-y-3">
                        {industry.capabilities.map((cap) => (
                          <li key={cap} className="flex items-center gap-3 text-muted-foreground font-body">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-accent font-body font-medium hover:text-accent/80 transition-colors"
                    >
                      Discuss your needs
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`relative aspect-[4/3] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[hsl(var(--deep-sea-blue))]">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Industry?
            </h2>
            <p className="text-white/70 font-body text-lg mb-8 max-w-2xl mx-auto">
              Our frameworks are adaptable across sectors. Let's discuss how we can 
              transform your industry with intelligent systems.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[hsl(var(--deep-sea-blue))] font-body font-medium text-sm uppercase tracking-wider hover:bg-accent hover:text-white transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
