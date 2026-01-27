import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Download, TrendingUp, Building2, DollarSign, ShieldCheck, Clock } from 'lucide-react';
import reimaginedBankingCover from '@/assets/research/reimagined-banking-cover.png';

// Industry adoption data for the bar chart
const industryAdoptionData = [
  { industry: 'Banking & Financial Services', value: 67, highlight: true },
  { industry: 'Healthcare', value: 58 },
  { industry: 'Manufacturing', value: 54 },
  { industry: 'Government', value: 52 },
  { industry: 'Insurance', value: 48 },
  { industry: 'Retail', value: 45 },
  { industry: 'Telecommunications', value: 42 },
  { industry: 'Energy', value: 38 },
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
                Our insights emerge from building and deploying AI systems 
                in live enterprise environments across Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Research: Reimagined Banking */}
        <section className="py-16 bg-[hsl(var(--deep-sea-blue))]">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Cover Image */}
            <div className="relative rounded-2xl overflow-hidden mb-16 max-w-5xl mx-auto">
              <img
                src={reimaginedBankingCover}
                alt="Reimagined Banking - Accelerating Enterprise Productivity"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Key Thesis */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="p-8 border border-accent/30 bg-accent/5 rounded-2xl">
                <p className="text-white/90 font-body text-lg md:text-xl leading-relaxed">
                  Banks are now crossing a structural boundary: from AI as an assistant that answers 
                  questions and drafts content, to AI as an <span className="text-accent font-semibold">autonomous actor</span> that 
                  plans, decides, and executes multi‑step workflows within explicit risk, policy, and capital constraints.
                </p>
              </div>
            </div>

            {/* Central Thesis Highlight */}
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <div className="inline-block p-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50 rounded-2xl">
                <div className="bg-[hsl(var(--deep-sea-blue))] px-8 py-6 rounded-xl">
                  <p className="text-accent font-display text-xl md:text-2xl font-bold">
                    Agentic AI allows revenue and risk‑adjusted volume growth to decouple from headcount growth for the first time in modern banking.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Visualization Section */}
            <div className="max-w-5xl mx-auto mb-16">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                AI Readiness by Industry
              </h3>
              <p className="text-white/70 font-body text-center mb-12 max-w-2xl mx-auto">
                Percentage of enterprises citing AI transformation as a top strategic priority for 2025-2026
              </p>
              
              {/* Animated Bar Chart */}
              <div className="space-y-4">
                {industryAdoptionData.map((item, index) => (
                  <div key={item.industry} className="flex items-center gap-4">
                    <span className="text-white/80 font-body text-sm w-48 text-right flex-shrink-0">
                      {item.industry}
                    </span>
                    <div className="flex-1 h-8 bg-white/10 rounded-full overflow-hidden relative">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${
                          item.highlight 
                            ? 'bg-gradient-to-r from-accent to-accent/70' 
                            : 'bg-gradient-to-r from-[#4F7DFF] to-[#4F7DFF]/70'
                        }`}
                        style={{ 
                          width: `${item.value}%`,
                          animation: `growWidth 1.5s ease-out ${index * 0.1}s forwards`,
                        }}
                      />
                      <span className={`absolute right-4 top-1/2 -translate-y-1/2 font-display font-bold ${
                        item.highlight ? 'text-accent' : 'text-white'
                      }`}>
                        {item.value}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Metrics Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="p-6 border border-white/20 rounded-xl group hover:border-accent/40 transition-colors text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-accent" />
                </div>
                <p className="font-display text-4xl font-bold text-accent mb-2">20-40%</p>
                <p className="text-white/70 font-body text-sm">
                  Structural reduction in middle & back-office costs
                </p>
              </div>
              
              <div className="p-6 border border-white/20 rounded-xl group hover:border-accent/40 transition-colors text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <p className="font-display text-4xl font-bold text-accent mb-2">10-20%</p>
                <p className="text-white/70 font-body text-sm">
                  Uplift in risk-adjusted revenue in selected businesses
                </p>
              </div>
              
              <div className="p-6 border border-white/20 rounded-xl group hover:border-accent/40 transition-colors text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <p className="font-display text-4xl font-bold text-white mb-2">Continuous</p>
                <p className="text-white/70 font-body text-sm">
                  Real-time controls replacing periodic checks
                </p>
              </div>
              
              <div className="p-6 border border-white/20 rounded-xl group hover:border-accent/40 transition-colors text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <p className="font-display text-4xl font-bold text-white mb-2">24-36</p>
                <p className="text-white/70 font-body text-sm">
                  Month window for enterprise transformation
                </p>
              </div>
            </div>

            {/* Key Conclusions */}
            <div className="max-w-4xl mx-auto mb-16">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-8">
                Three Unavoidable Conclusions (January 2026)
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 border border-white/20 rounded-xl">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-display font-bold text-accent">1</span>
                  <div>
                    <h4 className="font-display text-lg font-bold text-white mb-2">Experimentation Phase is Over</h4>
                    <p className="text-white/70 font-body">
                      Table-stakes GenAI assistants are commoditized. Boards now demand efficiency ratio, ROE, and loss metrics.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-6 border border-white/20 rounded-xl">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-display font-bold text-accent">2</span>
                  <div>
                    <h4 className="font-display text-lg font-bold text-white mb-2">Agentic Systems in Production</h4>
                    <p className="text-white/70 font-body">
                      Leading global banks and fintechs have agentic AI in production, and they are compounding advantage.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-6 border border-white/20 rounded-xl">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-display font-bold text-accent">3</span>
                  <div>
                    <h4 className="font-display text-lg font-bold text-white mb-2">Partnership Imperative</h4>
                    <p className="text-white/70 font-body">
                      Most institutions are structurally unprepared to deploy agentic AI at scale. Strategic partnerships emerge as the lowest-risk, highest-ROI path.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Links and CTA */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="text-white/60 font-body text-sm">Industries:</span>
                <Link 
                  to="/industries"
                  className="px-4 py-2 border border-white/20 rounded-full text-white/80 font-body text-sm hover:border-accent hover:text-accent transition-colors"
                >
                  Banking & Financial Services
                </Link>
                <span className="text-white/60 font-body text-sm">Services:</span>
                <Link 
                  to="/services#agentic-ai"
                  className="px-4 py-2 border border-white/20 rounded-full text-white/80 font-body text-sm hover:border-accent hover:text-accent transition-colors"
                >
                  Agentic AI Enterprise Transformation
                </Link>
              </div>
              
              <div className="text-center">
                <a
                  href="/downloads/Executive_Decision_Strain_Diagnostic.pdf"
                  download
                  className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-body font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors rounded-lg"
                >
                  <Download className="w-5 h-5" />
                  Access the Full Report
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Research Methodology */}
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
                    { icon: Building2, text: "Field deployments across multiple industries" },
                    { icon: TrendingUp, text: "Quantitative impact measurement and ROI analysis" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border border-border">
                      <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                      <p className="text-muted-foreground font-body">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-accent/10">
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
      
      <style>{`
        @keyframes growWidth {
          from {
            width: 0%;
          }
        }
      `}</style>
    </div>
  );
};

export default Research;
