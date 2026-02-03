import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, TrendingUp, Shield, DollarSign, Download, Building2, Cog } from 'lucide-react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';

// Chart data for Revenue vs Headcount Trajectory (Figure 2 from report)
const trajectoryData = [
  { year: 'FY2024', revenue: 100, headcount: 100 },
  { year: 'FY2025', revenue: 115, headcount: 103 },
  { year: 'FY2026', revenue: 135, headcount: 105 },
  { year: 'FY2027', revenue: 160, headcount: 106 },
  { year: 'FY2028', revenue: 190, headcount: 107 },
  { year: 'FY2029', revenue: 225, headcount: 108 },
  { year: 'FY2030', revenue: 265, headcount: 109 },
];

const chartConfig = {
  revenue: {
    label: 'Revenue Growth',
    color: 'hsl(var(--cta))',
  },
  headcount: {
    label: 'Headcount',
    color: 'hsl(var(--muted-foreground))',
  },
};

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);
  
  return <span>{count}{suffix}</span>;
};

const ResearchReimagined = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen noise-overlay">
      <Header />
      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="pt-28 md:pt-32 pb-12 md:pb-16 relative overflow-hidden bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="w-2 h-2 rounded-full bg-cta" />
                <p className="text-xs uppercase tracking-widest text-cta font-body">
                  Strategic Banking Report
                </p>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6 text-white">
                The Agentic AI Inflection<br className="hidden md:block" /> Point in Banking
              </h1>
              <p className="text-base md:text-lg text-muted-foreground font-body max-w-3xl leading-relaxed">
                From AI as an assistant to AI as an autonomous actor—a new framework 
                for operational excellence and strategic revenue optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Thesis Statement Section */}
        <section className="py-12 md:py-20 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-6 md:p-8 lg:p-10 rounded-2xl border border-white/10">
                <p className="text-base md:text-lg lg:text-xl text-white/90 font-body leading-relaxed mb-6">
                  Banks are now crossing a structural boundary: from AI as an assistant that answers 
                  questions and drafts content, to <span className="text-cta font-semibold">AI as an autonomous actor</span> that 
                  plans, decides, and executes multi‑step workflows within explicit risk, policy, and 
                  capital constraints. In this model, agents do not merely "support" staff; they own 
                  well‑bounded production processes, invoke tools (core systems, risk engines, APIs), 
                  and escalate only true exceptions.
                </p>
                <div className="border-l-4 border-cta pl-4 md:pl-6">
                  <p className="text-lg md:text-xl lg:text-2xl text-white font-display font-bold italic leading-snug">
                    "Agentic AI allows revenue and risk‑adjusted volume growth to decouple from 
                    headcount growth for the first time in modern banking."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Figure 2: Growth Decoupling Chart */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="rounded-2xl p-4 md:p-6 lg:p-8 bg-gradient-to-br from-card/80 via-card/60 to-background border border-white/10">
                {/* Chart Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 md:mb-8 gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-cta font-body mb-2">
                      Figure 2: Growth Decoupling
                    </p>
                    <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-white">
                      Revenue vs. Headcount Trajectory
                    </h2>
                    <p className="text-sm text-muted-foreground mt-2 font-body">
                      Indexed projection (FY2024 = 100)
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 md:gap-6">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-cta" />
                      <span className="text-xs md:text-sm text-muted-foreground">Revenue Growth</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-muted-foreground" />
                      <span className="text-xs md:text-sm text-muted-foreground">Headcount</span>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-cta text-cta-foreground rounded-full animate-pulse">
                      +156% EFFICIENCY GAP
                    </span>
                  </div>
                </div>
                
                {/* Chart */}
                <div className="h-[250px] md:h-[300px] lg:h-[350px] w-full">
                  <ChartContainer config={chartConfig} className="h-full w-full">
                    <AreaChart data={trajectoryData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--cta))" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="hsl(var(--cta))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis 
                        dataKey="year" 
                        stroke="hsl(var(--muted-foreground))" 
                        fontSize={10}
                        tickLine={false}
                        axisLine={false}
                        interval={0}
                        angle={-45}
                        textAnchor="end"
                        height={60}
                      />
                      <YAxis 
                        stroke="hsl(var(--muted-foreground))" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        hide
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="hsl(var(--cta))"
                        strokeWidth={3}
                        fill="url(#revenueGradient)"
                      />
                      <Area
                        type="monotone"
                        dataKey="headcount"
                        stroke="hsl(var(--muted-foreground))"
                        strokeWidth={2}
                        strokeDasharray="8 4"
                        fill="transparent"
                      />
                    </AreaChart>
                  </ChartContainer>
                </div>
                
                {/* Chart Annotation */}
                <div className="mt-4 md:mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <p className="text-xs md:text-sm text-muted-foreground font-body text-center sm:text-left">
                    By FY2030, revenue is projected to grow <span className="text-cta font-semibold">165%</span> while 
                    headcount increases only <span className="text-white font-semibold">9%</span>
                  </p>
                  <p className="text-xs text-muted-foreground">Source: Otic Group Analysis</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Impact Metrics */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="text-center mb-8 md:mb-12">
              <p className="text-xs uppercase tracking-widest text-cta font-body mb-3">
                Early Adopter Results
              </p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Measurable Impact from Agentic AI
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* Cost Reduction Card */}
              <div className={`relative rounded-2xl p-5 md:p-6 lg:p-8 bg-gradient-to-br from-cta/20 via-cta/10 to-background border border-cta/30 overflow-hidden transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-cta/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-cta/20 flex items-center justify-center mb-4">
                    <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-cta" />
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cta font-display mb-2">
                    {isVisible && <AnimatedCounter end={20} suffix="-40%" />}
                  </h3>
                  <p className="text-white font-medium mb-2 text-sm md:text-base">Structural Cost Reduction</p>
                  <p className="text-muted-foreground text-xs md:text-sm font-body leading-relaxed">
                    Middle‑ and back‑office costs for agentified processes
                  </p>
                </div>
              </div>

              {/* Revenue Uplift Card */}
              <div className={`relative rounded-2xl p-5 md:p-6 lg:p-8 bg-gradient-to-br from-accent/20 via-accent/10 to-background border border-accent/30 overflow-hidden transform transition-all duration-700 delay-150 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent font-display mb-2">
                    {isVisible && <AnimatedCounter end={10} suffix="-20%" />}
                  </h3>
                  <p className="text-white font-medium mb-2 text-sm md:text-base">Risk‑Adjusted Revenue Uplift</p>
                  <p className="text-muted-foreground text-xs md:text-sm font-body leading-relaxed">
                    In selected businesses through strategic optimization
                  </p>
                </div>
              </div>

              {/* Continuous Controls Card */}
              <div className={`relative rounded-2xl p-5 md:p-6 lg:p-8 bg-gradient-to-br from-green-500/20 via-green-500/10 to-background border border-green-500/30 overflow-hidden transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                    <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 font-display mb-2">
                    24/7
                  </h3>
                  <p className="text-white font-medium mb-2 text-sm md:text-base">Continuous Controls</p>
                  <p className="text-muted-foreground text-xs md:text-sm font-body leading-relaxed">
                    Reduced operational losses and regulatory findings
                  </p>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
              <div className="glass-card p-4 md:p-6 rounded-xl border border-white/10">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-3 md:mb-4">
                  Where Gains Are Coming From
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {['Autonomous Credit Remediation', 'Multi‑Step KYC Resolution', 'Intraday Liquidity Optimization', 'Self‑Healing IT Operations'].map((item) => (
                    <div key={item} className="bg-secondary/50 rounded-lg p-3 md:p-4 text-center border border-white/5">
                      <p className="text-xs md:text-sm text-white font-body">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* January 2026 Conclusions */}
        <section className="py-12 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <p className="text-xs uppercase tracking-widest text-cta font-body mb-3">
                  Market Reality Check
                </p>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Three Unavoidable Conclusions
                </h2>
                <p className="text-muted-foreground mt-3 text-sm md:text-base">As of January 2026</p>
              </div>

              <div className="space-y-4 md:space-y-6">
                {/* Conclusion 1 */}
                <div className="glass-card p-4 md:p-6 lg:p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-cta/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-cta font-display font-bold text-lg md:text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2">
                      The Experimentation Phase Is Over
                    </h3>
                    <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed">
                      Table‑stakes GenAI assistants are commoditized. Boards now demand efficiency ratio, 
                      ROE, and loss metrics—not proof‑of‑concepts.
                    </p>
                  </div>
                </div>

                {/* Conclusion 2 */}
                <div className="glass-card p-4 md:p-6 lg:p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-display font-bold text-lg md:text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2">
                      Agentic Systems Are Already In Production
                    </h3>
                    <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed">
                      Leading global banks and fintechs have deployed agentic AI in production, 
                      and they are compounding their competitive advantage daily.
                    </p>
                  </div>
                </div>

                {/* Conclusion 3 */}
                <div className="glass-card p-4 md:p-6 lg:p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-display font-bold text-lg md:text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2">
                      Most Institutions Are Structurally Unprepared
                    </h3>
                    <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed">
                      Legacy cores, fragmented data, and lack of orchestration and governance capabilities 
                      make internal agentic AI builds likely to fail on time‑to‑value, architecture, and talent.
                    </p>
                  </div>
                </div>
              </div>

              {/* Strategic Path */}
              <div className="mt-8 md:mt-12 glass-card p-4 md:p-6 lg:p-8 rounded-2xl border-2 border-cta/40 bg-cta/5">
                <p className="text-white font-body text-sm md:text-base lg:text-lg leading-relaxed text-center">
                  <span className="text-cta font-semibold">Strategic partnerships</span> with specialized 
                  transformation firms are emerging as the lowest‑risk, highest‑ROI path to close the 
                  capability chasm within the <span className="text-white font-semibold">24–36 month window</span> shareholders 
                  and regulators will tolerate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Links & CTA */}
        <section className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">Industries:</span>
                <Link 
                  to="/industries" 
                  className="text-white font-medium hover:text-cta transition-colors"
                >
                  Banking & Financial Services
                </Link>
              </div>
              <span className="text-muted-foreground hidden md:inline">|</span>
              <div className="flex items-center gap-2">
                <Cog className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">Services:</span>
                <Link 
                  to="/services" 
                  className="text-white font-medium hover:text-cta transition-colors"
                >
                  Agentic AI Enterprise Transformation
                </Link>
              </div>
            </div>

            <a
              href="/downloads/The_Agentic_AI_Inflection_Point_in_Banking.pdf"
              download
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-cta text-cta-foreground font-body font-medium text-sm uppercase tracking-wider hover:bg-cta/90 transition-all duration-300 rounded-full shadow-lg shadow-cta/30"
            >
              <Download className="w-4 h-4" />
              Access The Full Report
            </a>

            <p className="text-xs md:text-sm text-muted-foreground mt-4 md:mt-6">
              Limited Executive Release • Q4 2024
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchReimagined;
