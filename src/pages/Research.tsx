import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, TrendingUp, Building2, BarChart3, Globe, Cpu, Users } from 'lucide-react';
import enterpriseAI from '@/assets/enterprise-ai.jpeg';
import oticVision from '@/assets/otic-vision.jpeg';
import workforceTraining from '@/assets/workforce-training.jpeg';

const researchData = [
  {
    number: "01",
    title: "Agentic AI in Enterprise Operations",
    summary: "Deployed AI systems that execute workflows in minutes, unify enterprise data, and amplify human decision-making. Our research demonstrates 40-300% ROI across transformed functions.",
    image: enterpriseAI,
    link: "/services",
    stats: [
      { value: "40-300%", label: "ROI Improvement" },
      { value: "3.2x", label: "Decision Speed" }
    ]
  },
  {
    number: "02",
    title: "Otic Vision: Intelligent Systems for SME Operations",
    summary: "AI-powered smartphone system for inventory tracking and real-time insights—designed for African SMEs. Using computer vision and data intelligence to empower businesses.",
    image: oticVision,
    link: "/otic-vision",
    stats: [
      { value: "1000+", label: "SMEs Enabled" },
      { value: "60%", label: "Time Saved" }
    ]
  },
  {
    number: "03",
    title: "Workforce Readiness & AI Adoption",
    summary: "Training thousands of professionals with workflow-driven AI education that accelerates real transformation. Over 5500 learners have passed through our programs.",
    image: workforceTraining,
    link: "/otic-learn",
    stats: [
      { value: "5,500+", label: "Trained Professionals" },
      { value: "15K+", label: "Community Members" }
    ]
  },
  {
    number: "04",
    title: "Systems Thinking in Emerging Markets",
    summary: "Building adaptive, context-aware AI architectures that thrive in informal, fast-growing economies. Our framework addresses the unique challenges of African markets.",
    link: "/about",
    stats: [
      { value: "2", label: "Countries" },
      { value: "5+", label: "Years Research" }
    ]
  }
];

const insightCards = [
  {
    icon: Building2,
    title: "Enterprise Transformation",
    value: "67%",
    description: "of African enterprises cite AI readiness as a top strategic priority for 2025"
  },
  {
    icon: TrendingUp,
    title: "Market Growth",
    value: "42%",
    description: "projected annual growth in AI adoption across East African enterprises"
  },
  {
    icon: Users,
    title: "Talent Gap",
    value: "85%",
    description: "of organizations report difficulty finding AI-skilled talent locally"
  }
];

const Research = () => {
  return (
    <div className="flex flex-col min-h-screen noise-overlay">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-widest text-accent font-body mb-4">
                Insights
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white">
                Research
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed">
                Applied research from real deployments, systems, and field work. 
                Our research emerges from building, deploying, and observing AI systems 
                in live enterprise and SME environments across Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Key Insights - Data Cards */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-12 text-center">
              Key Market Insights
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {insightCards.map((card, index) => (
                <div key={index} className="p-8 border border-border bg-background group hover:border-cta/50 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors">
                      <card.icon className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-body">
                      {card.title}
                    </span>
                  </div>
                  <p className="font-display text-5xl md:text-6xl font-bold text-accent mb-4">
                    {card.value}
                  </p>
                  <p className="text-muted-foreground font-body">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Grid */}
        <section className="py-20 bg-[hsl(var(--deep-sea-blue))]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Research Areas
              </h2>
              <p className="text-white/70 font-body text-lg max-w-2xl">
                Our research spans enterprise AI, SME operations, workforce development, and 
                systems thinking for emerging markets.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {researchData.map((item) => (
                <article key={item.number} className="group border border-white/10 hover:border-cta/40 transition-colors overflow-hidden">
                  {item.image ? (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--deep-sea-blue))] via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 text-accent font-display text-sm font-bold tracking-wider bg-[hsl(var(--deep-sea-blue))]/80 px-3 py-1">
                        {item.number}
                      </span>
                    </div>
                  ) : (
                    <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                      <Globe className="w-24 h-24 text-white/10" />
                      <span className="absolute top-4 left-4 text-accent font-display text-sm font-bold tracking-wider bg-[hsl(var(--deep-sea-blue))]/80 px-3 py-1">
                        {item.number}
                      </span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-white/70 font-body mb-6">
                      {item.summary}
                    </p>
                    
                    {/* Stats Row */}
                    {item.stats && (
                      <div className="flex gap-8 mb-6 pt-6 border-t border-white/10">
                        {item.stats.map((stat, idx) => (
                          <div key={idx}>
                            <p className="font-display text-2xl font-bold text-accent">{stat.value}</p>
                            <p className="text-sm text-white/50 font-body">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-2 text-accent font-body font-medium text-sm hover:text-accent/80 transition-colors group/link"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Focus */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                  Research Methodology
                </h2>
                <p className="text-muted-foreground font-body text-lg mb-8">
                  Our research is grounded in real-world implementation. We don't just study AI—we 
                  build, deploy, and measure its impact in live environments across enterprises and 
                  SMEs throughout Africa.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Cpu, text: "Field deployments across multiple industries" },
                    { icon: BarChart3, text: "Quantitative impact measurement and ROI analysis" },
                    { icon: Users, text: "User research and adoption studies" },
                    { icon: Globe, text: "Cross-market comparative analysis" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border border-border">
                      <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                      <p className="text-muted-foreground font-body">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-accent/10">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Data analysis and research"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-accent/5" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
              Partner With Us on Research
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 max-w-2xl mx-auto">
              Collaborate with Otic Group on groundbreaking AI research tailored for African markets.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-body font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
