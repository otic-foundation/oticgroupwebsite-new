import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Building2, Landmark, Factory, Shield, Scale, GraduationCap, Car } from 'lucide-react';

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
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
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
  },
  {
    icon: Scale,
    name: "Legal Services",
    description: "Streamline legal workflows with AI-powered document analysis, contract review, compliance monitoring, and case management automation.",
    capabilities: [
      "Contract analysis & review",
      "Legal document automation",
      "Compliance monitoring",
      "Case outcome prediction",
      "Due diligence acceleration"
    ],
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80"
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Transform learning experiences with personalized AI tutoring, automated assessments, curriculum optimization, and student success prediction.",
    capabilities: [
      "Personalized learning paths",
      "Automated grading & feedback",
      "Student performance analytics",
      "Curriculum optimization",
      "Administrative automation"
    ],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
  },
  {
    icon: Car,
    name: "Automotive",
    description: "Drive innovation in automotive operations with AI-powered predictive maintenance, supply chain optimization, and customer experience enhancement.",
    capabilities: [
      "Predictive maintenance systems",
      "Supply chain intelligence",
      "Quality inspection automation",
      "Customer experience optimization",
      "Fleet management analytics"
    ],
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80"
  }
];

const Industries = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden grid-bg">
          <div className="orb orb-luminous w-[500px] h-[500px] -top-64 -right-64 animate-glow-pulse" />
          <div className="orb orb-blue w-80 h-80 top-1/3 -left-40 opacity-25" />
          <div className="orb orb-accent w-64 h-64 bottom-0 right-1/4 opacity-20" />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="marker-orange" />
                <p className="text-xs uppercase tracking-widest text-accent-luminous font-body">
                  Our Expertise
                </p>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                <span className="text-white">Industries</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed">
                AI impacts every sector differently. We bring deep domain expertise and 
                proven frameworks tailored to your industry's unique challenges.
              </p>
              <div className="divider-accent w-32 mt-8" />
            </div>
          </div>
        </section>

        {/* Industries Grid - Image Cards */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {industries.map((industry, index) => (
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
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/20" />
                    {/* Orange glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cta/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="absolute inset-0 p-5 lg:p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors">
                        <industry.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <h2 className="font-display text-lg lg:text-xl font-bold text-white">
                        {industry.name}
                      </h2>
                    </div>
                    
                    <p className="text-muted-foreground font-body text-sm mb-4 line-clamp-3">
                      {industry.description}
                    </p>
                    
                    {/* Capabilities - shown on hover */}
                    <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {industry.capabilities.slice(0, 3).map((cap) => (
                          <span 
                            key={cap} 
                            className="px-2 py-1 text-xs font-body bg-white/10 text-white border border-white/20 rounded-full"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-cta font-body font-medium text-sm hover:text-cta/80 transition-colors"
                    >
                      <span className="marker-orange w-1.5 h-1.5" />
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
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-background" />
          <div className="orb orb-luminous w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
          
          <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
            <div className="section-panel max-w-3xl mx-auto p-12">
              <div className="divider-accent w-16 mx-auto mb-8" />
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Don't See Your Industry?</span>
              </h2>
              <p className="text-muted-foreground font-body text-lg mb-8 max-w-2xl mx-auto">
                Our frameworks are adaptable across sectors. Let's discuss how we can 
                transform your industry with intelligent systems.
              </p>
              <Link
                to="/contact"
                className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-lg font-body font-medium text-sm uppercase tracking-wider text-cta-foreground"
              >
                Talk to Sales
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
