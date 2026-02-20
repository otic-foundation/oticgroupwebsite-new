import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Bot, Workflow, Users, LineChart, Shield, Briefcase, Target, BookOpen, Calendar, Download, Brain } from 'lucide-react';

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen noise-overlay">
      <Header />
      <main className="flex-1">
        {/* Hero Section - matching Industries style */}
        <section className="pt-32 pb-20 relative overflow-hidden bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-cta" />
                <p className="text-xs uppercase tracking-widest text-cta font-body">
                  Our Expertise
                </p>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white">
                Services
              </h1>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-cta mb-6">
                Built for Measurable ROI
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed">
                Our services are designed to move organizations from experimentation to enterprise 
                scale value. We focus on productivity gains, cost optimization, revenue growth, 
                and risk reduction while ensuring responsible and sustainable AI adoption.
              </p>
            </div>
          </div>
        </section>

        {/* 1. Agentic AI Enterprise Transformation */}
        <section className="py-20 bg-[hsl(var(--deep-sea-blue))]" id="agentic-ai">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mb-16">
              <span className="text-accent font-body text-sm uppercase tracking-widest mb-4 block">
                01 — Flagship Offering
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Agentic AI Enterprise Transformation
              </h2>
              <p className="text-foreground/80 font-body text-lg">
                This is our flagship, end to end transformation engagement. We work with leadership 
                to reimagine how the entire organization operates when autonomous AI agents are 
                embedded across functions, workflows, and decision making. The objective is not 
                automation for its own sake. It is to redesign the enterprise for speed, intelligence, 
                and resilience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Customer Growth */}
              <article className="p-8 border border-white/20 group hover:border-cta/40 transition-colors">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-6">
                  <LineChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  Customer Growth and Acquisition Intelligence
                </h3>
                <p className="text-white/70 font-body mb-6">
                  We deploy agentic systems that continuously analyze customer data, market signals, 
                  and behavioral patterns to drive smarter acquisition and retention.
                </p>
                <div className="space-y-2 text-sm text-white/60 font-body mb-6">
                  <p>• Higher conversion rates through intelligent targeting</p>
                  <p>• Faster response to market changes and customer needs</p>
                  <p>• Improved lifetime value through proactive engagement</p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-accent font-body font-medium text-sm hover:text-accent/80 transition-colors"
                >
                  Talk to Sales <ArrowRight className="w-4 h-4" />
                </Link>
              </article>

              {/* Operational Excellence */}
              <article className="p-8 border border-white/20 group hover:border-cta/40 transition-colors">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-6">
                  <Workflow className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  Operational Excellence and Decision Velocity
                </h3>
                <p className="text-white/70 font-body mb-6">
                  We embed agents into core operational workflows to reduce manual effort, 
                  eliminate bottlenecks, and accelerate decision cycles.
                </p>
                <div className="space-y-2 text-sm text-white/60 font-body mb-6">
                  <p>• Reduced operational costs through intelligent automation</p>
                  <p>• Faster and better informed decisions across teams</p>
                  <p>• Improved service delivery and internal efficiency</p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-accent font-body font-medium text-sm hover:text-accent/80 transition-colors"
                >
                  Talk to Sales <ArrowRight className="w-4 h-4" />
                </Link>
              </article>

              {/* Governance Risk Compliance */}
              <article className="p-8 border border-white/20 group hover:border-cta/40 transition-colors">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  Governance, Risk, and Compliance Intelligence
                </h3>
                <p className="text-white/70 font-body mb-6">
                  We design agentic oversight systems that continuously monitor risk, compliance, 
                  and regulatory obligations across the enterprise.
                </p>
                <div className="space-y-2 text-sm text-white/60 font-body mb-6">
                  <p>• Proactive risk detection and mitigation</p>
                  <p>• Stronger compliance posture with reduced audit effort</p>
                  <p>• Increased confidence for executives and boards</p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-accent font-body font-medium text-sm hover:text-accent/80 transition-colors"
                >
                  Talk to Sales <ArrowRight className="w-4 h-4" />
                </Link>
              </article>

              {/* Enterprise Leadership */}
              <article className="p-8 border border-white/20 group hover:border-cta/40 transition-colors">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-6">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  Enterprise Leadership and Organisational Design
                </h3>
                <p className="text-white/70 font-body mb-6">
                  We help leadership teams adapt structures, roles, and decision models for an 
                  AI enabled organization.
                </p>
                <div className="space-y-2 text-sm text-white/60 font-body mb-6">
                  <p>• Clear accountability between humans and AI agents</p>
                  <p>• Leadership alignment on AI driven operating models</p>
                  <p>• Sustainable change management and adoption</p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-accent font-body font-medium text-sm hover:text-accent/80 transition-colors"
                >
                  Talk to Sales <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* Enterprise Decision Strain Diagnostic */}
        <section className="py-20 bg-secondary/50" id="diagnostic">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl glass-card flex items-center justify-center border border-accent/40">
                  <Brain className="w-7 h-7 text-accent" />
                </div>
                <span className="text-accent font-body text-sm uppercase tracking-widest">
                  Leadership Framework
                </span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
                Enterprise Decision Strain Diagnostic
              </h2>
              
              <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed mb-12">
                <p>
                  As organizations scale, complexity increases faster than decision capacity. What often 
                  shows up as operational friction, rising costs, missed opportunities, or declining trust 
                  is rarely a single failure. It is usually a structural strain in how decisions, controls, 
                  and information flow across the enterprise.
                </p>
                <p>
                  The Enterprise Decision Strain Diagnostic is a leadership framework designed to help 
                  executive teams assess where decision making is under pressure as complexity grows.
                </p>
                <p>
                  Rather than focusing on systems or technology, it examines how the organization senses 
                  issues, makes decisions, enforces controls, and maintains trust at scale.
                </p>
              </div>
              
              <a
                href="/downloads/Executive_Decision_Strain_Diagnostic.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-body font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors rounded-lg"
              >
                <Download className="w-5 h-5" />
                Access the Framework
              </a>
            </div>
          </div>
        </section>

        {/* 2. AI Agents */}
        <section className="py-20" id="ai-agents">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-accent font-body text-sm uppercase tracking-widest mb-4 block">
                  02 — Targeted Solutions
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                  AI Agents
                </h2>
                <p className="text-muted-foreground font-body text-lg mb-8">
                  Not every organization is ready for a full transformation at once. Some teams need 
                  targeted, high impact agents for specific workflows. We design and deploy individual 
                  AI agents tailored to a single function or process across departments such as HR, 
                  Finance, Operations, Customer Support, Marketing, and more.
                </p>
                <p className="text-muted-foreground font-body text-lg mb-8">
                  These agents integrate into existing systems and workflows, delivering value quickly 
                  without disrupting the broader organization.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/industries"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border font-body font-medium text-sm uppercase tracking-wider hover:bg-secondary transition-colors"
                  >
                    Explore Industries
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-body font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
                  >
                    Talk to Sales <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 border border-border group hover:border-cta/50 transition-colors">
                  <h4 className="font-display text-lg font-bold text-white mb-2">Typical Use Cases</h4>
                  <ul className="space-y-3 text-muted-foreground font-body">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-cta rounded-full mt-2 flex-shrink-0" />
                      HR agents for recruitment screening, policy queries, and performance insights
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-cta rounded-full mt-2 flex-shrink-0" />
                      Finance agents for reporting, forecasting, and anomaly detection
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-cta rounded-full mt-2 flex-shrink-0" />
                      Operations agents for scheduling, monitoring, and process optimization
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 border border-border group hover:border-cta/50 transition-colors">
                  <h4 className="font-display text-lg font-bold text-white mb-2">Business Value</h4>
                  <ul className="space-y-3 text-muted-foreground font-body">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-cta rounded-full mt-2 flex-shrink-0" />
                      Faster task completion and reduced workload
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-cta rounded-full mt-2 flex-shrink-0" />
                      Lower operational costs with minimal implementation effort
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-cta rounded-full mt-2 flex-shrink-0" />
                      Clear ROI from a single, well defined workflow
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. AI Strategy Roadmaps */}
        <section className="py-20 bg-secondary/50" id="strategy">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <span className="text-accent font-body text-sm uppercase tracking-widest mb-4 block">
                03 — Strategic Planning
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                AI Strategy Roadmaps
              </h2>
              <p className="text-muted-foreground font-body text-lg mb-8">
                AI success requires clarity before execution. Our AI strategy roadmap service provides 
                executive level guidance on how to deploy AI across the enterprise in a structured, 
                phased, and value driven way.
              </p>
              <p className="text-muted-foreground font-body text-lg mb-12">
                We assess your organization's readiness, identify priority use cases, define governance 
                structures, and outline a practical implementation plan aligned to business objectives.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  "A clear enterprise wide AI vision and operating model",
                  "Prioritized use cases with expected ROI",
                  "Implementation timelines and investment guidance",
                  "Alignment between leadership, technology, and business units"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border border-border">
                    <Target className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground font-body">{item}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-muted-foreground font-body italic mb-8">
                This service is ideal for organizations that want to invest in AI with confidence 
                and avoid fragmented or ad hoc adoption.
              </p>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-body font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
              >
                Book an Assessment <Calendar className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Workforce Enablement */}
        <section className="py-20" id="workforce">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-accent/10">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Team training session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-accent/5" />
              </div>
              
              <div>
                <span className="text-accent font-body text-sm uppercase tracking-widest mb-4 block">
                  04 — People Development
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                  Workforce Enablement
                </h2>
                <p className="text-muted-foreground font-body text-lg mb-8">
                  AI delivers value only when people know how to use it effectively. Our workforce 
                  enablement programs are designed around real job roles, real workflows, and real tools. 
                  We train teams across departments to integrate AI into their daily work, improving 
                  productivity without replacing human judgment.
                </p>
                
                <div className="space-y-4 mb-8">
                  <h4 className="font-display text-lg font-bold text-white">How We Approach It</h4>
                  <ul className="space-y-3 text-muted-foreground font-body">
                    <li className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      Role specific training tailored to each team's workflows
                    </li>
                    <li className="flex items-start gap-3">
                      <Bot className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      Practical use of AI tools relevant to daily tasks
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      Responsible AI usage, ethics, and governance awareness
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      Change management support to drive adoption
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 border border-cta/30 bg-cta/5 rounded-lg mb-8">
                  <h4 className="font-display text-lg font-bold text-white mb-3">Outcomes</h4>
                  <ul className="space-y-2 text-muted-foreground font-body">
                    <li>• Increased employee productivity and confidence</li>
                    <li>• Faster adoption of AI initiatives</li>
                    <li>• Stronger alignment between strategy and execution</li>
                  </ul>
                </div>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-body font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
                >
                  Talk to Sales <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 max-w-2xl mx-auto">
              The cognitive era rewards the bold, the strategic, and the architecturally deliberate.
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

export default Services;
