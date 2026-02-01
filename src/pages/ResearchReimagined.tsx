import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Download, ArrowRight } from 'lucide-react';
import reimaginedBankingCover from '@/assets/research/reimagined-banking-cover.png';

// Data for the horizontal bar chart - investment expectations
const investmentData = [
  { label: 'Higher level', jan2026: 82, jan2025: 72, jan2024: 88 },
  { label: 'Same level', jan2026: 11, jan2025: 24, jan2024: 10 },
  { label: 'Lower level', jan2026: 7, jan2025: 4, jan2024: 2 },
];

// Data for disruption preparedness
const disruptionData = [
  { label: 'Consumer and social disruption', cxoVery: 45, cxoSomewhat: 47, empVery: 30, empSomewhat: 54 },
  { label: 'Economic disruption', cxoVery: 43, cxoSomewhat: 46, empVery: 29, empSomewhat: 54 },
  { label: 'Environmental disruption', cxoVery: 38, cxoSomewhat: 51, empVery: 29, empSomewhat: 47 },
  { label: 'Geopolitical disruption', cxoVery: 38, cxoSomewhat: 46, empVery: 27, empSomewhat: 46 },
  { label: 'Talent disruption', cxoVery: 49, cxoSomewhat: 43, empVery: 30, empSomewhat: 51 },
  { label: 'Technological disruption', cxoVery: 55, cxoSomewhat: 40, empVery: 38, empSomewhat: 49 },
];

const ResearchReimagined = () => {
  return (
    <div className="flex flex-col min-h-screen noise-overlay">
      <Header />
      <main className="flex-1">
        {/* Back Link */}
        <section className="pt-24 pb-4 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors font-body text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Research
            </Link>
          </div>
        </section>

        {/* Hero Section - matching Industries style */}
        <section className="pb-16 pt-8 relative overflow-hidden bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 rounded-full bg-cta" />
                  <p className="text-xs uppercase tracking-widest text-cta font-body">
                    Research Report
                  </p>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                  The Agentic AI Inflection Point in Banking
                </h1>
                <p className="text-lg text-muted-foreground font-body mb-4">
                  An Operating Model Divide for 2026
                </p>
              </div>
              
              {/* Cover Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-secondary/50 p-4">
                  <img
                    src={reimaginedBankingCover}
                    alt="Reimagined Banking - Accelerating Enterprise Productivity"
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Thesis - Modern Infographic Style */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: Statement */}
              <div>
                <div className="w-1 h-12 bg-cta mb-8" />
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Prioritized digital, and AI, investments are increasing leaders' bullishness for business growth. But are organizations ready for AI?
                </h2>
              </div>
              
              {/* Right: Investment Expectations Chart */}
              <div>
                <p className="text-white/80 font-body text-lg mb-8">
                  Compared to the change experienced throughout your organization in 2025, what are your expectations for the level of change in 2026?
                </p>
                
                <div className="space-y-6">
                  {investmentData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <span className="text-white/70 font-body text-sm">{item.label}</span>
                      <div className="flex items-center gap-2">
                        {/* Jan 2026 - Purple */}
                        <div 
                          className="h-8 bg-gradient-to-r from-[#9333ea] to-[#a855f7] rounded-r transition-all duration-1000"
                          style={{ width: `${item.jan2026 * 2}px` }}
                        />
                        <span className="text-white font-body text-sm font-medium min-w-[40px]">{item.jan2026}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {/* Jan 2025 - Light Purple */}
                        <div 
                          className="h-8 bg-gradient-to-r from-[#a855f7] to-[#c084fc] rounded-r transition-all duration-1000"
                          style={{ width: `${item.jan2025 * 2}px` }}
                        />
                        <span className="text-white/70 font-body text-sm min-w-[40px]">{item.jan2025}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {/* Jan 2024 - Lightest */}
                        <div 
                          className="h-8 bg-gradient-to-r from-[#c084fc] to-[#d8b4fe] rounded-r transition-all duration-1000"
                          style={{ width: `${item.jan2024 * 2}px` }}
                        />
                        <span className="text-white/50 font-body text-sm min-w-[40px]">{item.jan2024}%</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Legend */}
                <div className="flex flex-wrap gap-6 mt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#9333ea] rounded" />
                    <span className="text-white/70 font-body text-sm">January 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#a855f7] rounded" />
                    <span className="text-white/70 font-body text-sm">January 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#c084fc] rounded" />
                    <span className="text-white/70 font-body text-sm">January 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Central Thesis Highlight */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 md:p-12 border-l-4 border-cta bg-background/50 rounded-r-2xl">
                <p className="text-white font-display text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed">
                  Agentic AI allows revenue and risk‑adjusted volume growth to decouple from headcount growth for the first time in modern banking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Disruption Preparedness - Modern Infographic */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: Statement */}
              <div>
                <div className="w-1 h-12 bg-cta mb-8" />
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  The positivity reverberating across the C-suite does not align with what their workforce is experiencing, even though talent is the primary accelerator of AI scale.
                </h2>
              </div>
              
              {/* Right: Disruption Chart */}
              <div>
                <p className="text-white/80 font-body text-lg mb-6">
                  To what extent do you believe your organization is prepared to respond to the following areas of disruption in 2026?
                </p>
                
                {/* Toggle Tabs */}
                <div className="flex gap-4 mb-8">
                  <span className="px-4 py-2 bg-[#9333ea] text-white font-body text-sm rounded-full">Industry</span>
                  <span className="px-4 py-2 border border-white/20 text-white/60 font-body text-sm rounded-full">Geography</span>
                </div>
                
                {/* Header */}
                <div className="grid grid-cols-[1fr,auto,auto] gap-4 mb-4 text-white/60 font-body text-sm">
                  <span></span>
                  <span className="w-32 text-center">CxO</span>
                  <span className="w-32 text-center">Employee</span>
                </div>
                
                {/* Data Rows */}
                <div className="space-y-4">
                  {disruptionData.map((item, index) => (
                    <div key={index} className="grid grid-cols-[1fr,auto,auto] gap-4 items-center">
                      <span className="text-white/80 font-body text-sm">{item.label}</span>
                      
                      {/* CxO Bar */}
                      <div className="w-32 flex items-center gap-1">
                        <div 
                          className="h-6 bg-[#9333ea] rounded-sm flex items-center justify-center"
                          style={{ width: `${item.cxoVery}%` }}
                        >
                          <span className="text-white text-xs font-medium">{item.cxoVery}%</span>
                        </div>
                        <div 
                          className="h-6 bg-[#c084fc] rounded-sm flex items-center justify-center"
                          style={{ width: `${item.cxoSomewhat}%` }}
                        >
                          <span className="text-white text-xs font-medium">{item.cxoSomewhat}%</span>
                        </div>
                        <span className="text-white/60 text-xs ml-1">{item.cxoVery + item.cxoSomewhat}%</span>
                      </div>
                      
                      {/* Employee Bar */}
                      <div className="w-32 flex items-center gap-1">
                        <div 
                          className="h-6 bg-[#9333ea] rounded-sm flex items-center justify-center"
                          style={{ width: `${item.empVery}%` }}
                        >
                          <span className="text-white text-xs font-medium">{item.empVery}%</span>
                        </div>
                        <div 
                          className="h-6 bg-[#c084fc] rounded-sm flex items-center justify-center"
                          style={{ width: `${item.empSomewhat}%` }}
                        >
                          <span className="text-white text-xs font-medium">{item.empSomewhat}%</span>
                        </div>
                        <span className="text-white/60 text-xs ml-1">{item.empVery + item.empSomewhat}%</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Legend */}
                <div className="flex gap-6 mt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#9333ea] rounded" />
                    <span className="text-white/70 font-body text-sm">Very prepared</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#c084fc] rounded" />
                    <span className="text-white/70 font-body text-sm">Somewhat prepared</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key ROI Metrics */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-8 bg-background/50 rounded-xl border border-white/10 text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-cta mb-3">20-40%</p>
                <p className="text-white/70 font-body text-sm">
                  Structural reduction in middle & back-office costs
                </p>
              </div>
              
              <div className="p-8 bg-background/50 rounded-xl border border-white/10 text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-cta mb-3">10-20%</p>
                <p className="text-white/70 font-body text-sm">
                  Uplift in risk-adjusted revenue
                </p>
              </div>
              
              <div className="p-8 bg-background/50 rounded-xl border border-white/10 text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-white mb-3">Continuous</p>
                <p className="text-white/70 font-body text-sm">
                  Real-time controls replacing periodic checks
                </p>
              </div>
              
              <div className="p-8 bg-background/50 rounded-xl border border-white/10 text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-white mb-3">24-36</p>
                <p className="text-white/70 font-body text-sm">
                  Month window for enterprise transformation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Three Conclusions */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Three Unavoidable Conclusions (January 2026)
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-8 bg-secondary/30 rounded-xl border border-white/10">
                <div className="w-12 h-12 rounded-full bg-cta/20 flex items-center justify-center mb-6">
                  <span className="font-display text-xl font-bold text-cta">1</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4">Experimentation Phase is Over</h3>
                <p className="text-white/70 font-body">
                  Table-stakes GenAI assistants are commoditized. Boards now demand efficiency ratio, ROE, and loss metrics.
                </p>
              </div>
              
              <div className="p-8 bg-secondary/30 rounded-xl border border-white/10">
                <div className="w-12 h-12 rounded-full bg-cta/20 flex items-center justify-center mb-6">
                  <span className="font-display text-xl font-bold text-cta">2</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4">Agentic Systems in Production</h3>
                <p className="text-white/70 font-body">
                  Leading global banks and fintechs have agentic AI in production, and they are compounding advantage.
                </p>
              </div>
              
              <div className="p-8 bg-secondary/30 rounded-xl border border-white/10">
                <div className="w-12 h-12 rounded-full bg-cta/20 flex items-center justify-center mb-6">
                  <span className="font-display text-xl font-bold text-cta">3</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4">Partnership Imperative</h3>
                <p className="text-white/70 font-body">
                  Most institutions are structurally unprepared. Strategic partnerships emerge as the lowest-risk, highest-ROI path.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Links and CTA */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                <span className="text-white/60 font-body text-sm">Industries:</span>
                <Link 
                  to="/industries"
                  className="px-4 py-2 border border-white/20 rounded-full text-white/80 font-body text-sm hover:border-cta hover:text-cta transition-colors"
                >
                  Banking & Financial Services
                </Link>
                <span className="text-white/60 font-body text-sm">Services:</span>
                <Link 
                  to="/services#agentic-ai"
                  className="px-4 py-2 border border-white/20 rounded-full text-white/80 font-body text-sm hover:border-cta hover:text-cta transition-colors"
                >
                  Agentic AI Enterprise Transformation
                </Link>
              </div>
              
              <a
                href="/downloads/Executive_Decision_Strain_Diagnostic.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-cta text-cta-foreground font-body font-medium text-sm uppercase tracking-wider hover:bg-cta/90 transition-colors rounded-lg"
              >
                <Download className="w-5 h-5" />
                Access the Full Report
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Bank?
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 max-w-2xl mx-auto">
              Partner with Otic Group to navigate the agentic AI transition.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-cta-foreground font-body font-medium text-sm uppercase tracking-wider hover:bg-cta/90 transition-colors rounded-lg"
            >
              Talk to Sales
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchReimagined;
