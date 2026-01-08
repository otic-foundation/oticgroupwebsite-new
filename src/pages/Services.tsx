import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Bot, Workflow, Users, Database, Code, LineChart } from 'lucide-react';

const Services = () => {
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
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white">
                Services
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed">
                Otic Technologies is the innovation engine of Otic Group, delivering AI training 
                solutions and outsourcing services that enhance workforce capabilities and drive 
                digital efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Agentic AI Section */}
        <section className="py-20 bg-[hsl(var(--deep-sea-blue))]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-accent font-body text-sm uppercase tracking-widest mb-4">
                  Flagship Offering
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                  Agentic AI Enterprise Transformation
                </h2>
                <p className="text-white/80 font-body text-lg mb-8">
                  Our Agentic AI Enterprise Framework is a comprehensive organizational operating 
                  system for the Cognitive Age. Partner with Otic Group to architect and execute 
                  a transformation that yields measurable results.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="p-4 border border-white/20">
                    <p className="font-display text-3xl font-bold text-accent">40-300%</p>
                    <p className="text-white/60 text-sm">ROI Across Functions</p>
                  </div>
                  <div className="p-4 border border-white/20">
                    <p className="font-display text-3xl font-bold text-accent">3.2x</p>
                    <p className="text-white/60 text-sm">Decision Cycle Acceleration</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[hsl(var(--deep-sea-blue))] font-body font-medium text-sm uppercase tracking-wider hover:bg-accent hover:text-white transition-colors"
                >
                  Request Proposal
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt="Enterprise AI Transformation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-center text-white">
              Our Service Categories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Agents & Automation */}
              <div className="p-8 border border-border hover:border-cta/50 transition-colors group">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-6">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-white">
                  Agents & Automation
                </h3>
                <p className="text-muted-foreground font-body mb-6">
                  Deploy AI agents that execute workflows, automate processes, and amplify 
                  human decision-making across your organization.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground font-body">
                  <li>• Multi-agent workflow design</li>
                  <li>• Process automation</li>
                  <li>• Decision intelligence systems</li>
                  <li>• Customer journey orchestration</li>
                </ul>
              </div>

              {/* Digital Process Automation */}
              <div className="p-8 border border-border hover:border-cta/50 transition-colors group">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-6">
                  <Workflow className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-white">
                  Digital Process Automation
                </h3>
                <p className="text-muted-foreground font-body mb-6">
                  Transform operations through intelligent automation and data-driven 
                  efficiency for measurable business impact.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground font-body">
                  <li>• Data Digitization & ETL</li>
                  <li>• Data Analytics & Insights</li>
                  <li>• AI-Driven Optimization</li>
                  <li>• Software Development</li>
                </ul>
              </div>

              {/* AI Talent Outsourcing */}
              <div className="p-8 border border-border hover:border-cta/50 transition-colors group">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-white">
                  AI Talent Outsourcing
                </h3>
                <p className="text-muted-foreground font-body mb-6">
                  Connect with vetted AI and technology professionals to scale innovation 
                  faster and build your AI capabilities.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground font-body">
                  <li>• AI Engineers & Data Scientists</li>
                  <li>• ML Operations Specialists</li>
                  <li>• AI Project Managers</li>
                  <li>• Technical Consultants</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Programmes */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-center text-white">
              Transformation Programmes
            </h2>
            <p className="text-center text-muted-foreground font-body mb-16 max-w-3xl mx-auto">
              Each programme is a 5-week intensive sprint, combining strategy, design, build, and deployment.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Customer Growth & Acquisition Intelligence",
                  impact: "25-40% revenue growth in targeted segments",
                  icon: LineChart
                },
                {
                  title: "Operational Excellence & Decision Velocity",
                  impact: "40-60% reduction in decision cycle times",
                  icon: Workflow
                },
                {
                  title: "Risk, Governance & Compliance Automation",
                  impact: "50-80% reduction in compliance cost",
                  icon: Database
                },
                {
                  title: "Enterprise Leadership & Organizational Design",
                  impact: "50-70% improvement in strategic initiative success",
                  icon: Code
                }
              ].map((programme, index) => (
                <div key={index} className="p-8 bg-background border border-border group hover:border-cta/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-4">
                    <programme.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 text-white">{programme.title}</h3>
                  <p className="text-muted-foreground font-body text-sm">
                    Economic Impact: <span className="text-cta">{programme.impact}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 max-w-2xl mx-auto">
              The cognitive era rewards the bold, the strategic, and the architecturally deliberate.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-body font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors rounded-lg"
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
