import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, TrendingUp, Shield, DollarSign, Download } from 'lucide-react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { AreaChart, Area, XAxis, YAxis } from 'recharts';

// Chart data for Revenue vs Headcount Trajectory
const trajectoryData = [
  { year: 'FY2024', revenue: 100, headcount: 100 },
  { year: 'FY2025', revenue: 115, headcount: 103 },
  { year: 'FY2026', revenue: 135, headcount: 105 },
  { year: 'FY2027', revenue: 160, headcount: 106 },
  { year: 'FY2028', revenue: 190, headcount: 107 },
  { year: 'FY2029', revenue: 225, headcount: 108 },
  { year: 'FY2030 (PROJECTED)', revenue: 265, headcount: 109 },
];

const chartConfig = {
  revenue: {
    label: 'Revenue Growth',
    color: 'hsl(200, 100%, 50%)',
  },
  headcount: {
    label: 'Headcount',
    color: 'hsl(0, 0%, 50%)',
  },
};

const ResearchReimagined = () => {
  return (
    <div className="flex flex-col min-h-screen noise-overlay">
      <Header />
      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <p className="text-xs uppercase tracking-widest text-cta font-body mb-6">
              Strategic Banking Report
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              The Era of Agentic AI in<br />Banking
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Decoupling Growth from Headcount: A new framework for operational 
              excellence and strategic revenue optimization.
            </p>
          </div>
        </section>

        {/* Key Metrics Cards */}
        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Cost Reduction Card */}
              <div className="relative rounded-2xl p-6 bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-background border border-purple-500/20 overflow-hidden">
                <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-cta/20 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-cta" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-cta font-display mb-2">
                  20-40%
                </h3>
                <p className="text-white font-medium mb-2">Cost Reduction</p>
                <p className="text-muted-foreground text-sm font-body">
                  Operational efficiency gains through autonomous AI agents across back-office workflows.
                </p>
              </div>

              {/* Revenue Uplift Card */}
              <div className="relative rounded-2xl p-6 bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-background border border-purple-500/20 overflow-hidden">
                <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-cta/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-cta" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-cta font-display mb-2">
                  10-20%
                </h3>
                <p className="text-white font-medium mb-2">Revenue Uplift</p>
                <p className="text-muted-foreground text-sm font-body">
                  Risk-adjusted growth via strategic asset management optimization and personalized lead scoring.
                </p>
              </div>

              {/* Continuous Controls Card */}
              <div className="relative rounded-2xl p-6 bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-background border border-purple-500/20 overflow-hidden">
                <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-cta/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-cta" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-cta font-display mb-2">
                  100%
                </h3>
                <p className="text-white font-medium mb-2">Continuous Controls</p>
                <p className="text-muted-foreground text-sm font-body">
                  Real-time risk monitoring and automated compliance guardrails active 24/7.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Decoupling Chart */}
        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="rounded-2xl p-6 lg:p-8 bg-gradient-to-br from-secondary/80 via-secondary/60 to-background border border-white/10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-cta font-body mb-2">
                    Figure 2: Growth Decoupling
                  </p>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
                    Revenue vs. Headcount Trajectory
                  </h2>
                </div>
                <div className="flex items-center gap-6 mt-4 lg:mt-0">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-accent" />
                    <span className="text-sm text-muted-foreground">Revenue Growth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Headcount</span>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium bg-cta text-cta-foreground rounded-full">
                    +45% EFFICIENCY
                  </span>
                </div>
              </div>
              
              <ChartContainer config={chartConfig} className="h-[300px] md:h-[350px] w-full">
                <AreaChart data={trajectoryData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="year" 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
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
                    stroke="hsl(var(--accent))"
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
          </div>
        </section>

        {/* Industry Links & CTA */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
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
                <span className="text-muted-foreground text-sm">Services:</span>
                <Link 
                  to="/services" 
                  className="text-white font-medium hover:text-cta transition-colors"
                >
                  Agentic AI Enterprise Transformation
                </Link>
              </div>
            </div>

            <p className="text-lg text-muted-foreground font-body mb-8">
              Ready to redefine your banking operations with the next<br className="hidden md:inline" /> 
              generation of AI?
            </p>

            <a
              href="/downloads/The_Agentic_AI_Inflection_Point_in_Banking.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cta text-cta font-body font-medium text-sm uppercase tracking-wider hover:bg-cta hover:text-cta-foreground transition-all duration-300 rounded-full"
            >
              <Download className="w-4 h-4" />
              Access The Full Report
            </a>

            <p className="text-sm text-muted-foreground mt-6">
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