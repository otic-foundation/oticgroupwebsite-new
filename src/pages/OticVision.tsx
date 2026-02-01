import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Eye, BarChart3, ShoppingCart, FileCheck, Users, Smartphone, TrendingUp, Shield } from 'lucide-react';

const OticVision = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section - matching Industries style */}
        <section className="pt-32 pb-20 relative overflow-hidden bg-secondary/30">
          <div className="orb orb-luminous w-[500px] h-[500px] -top-64 -right-64 animate-glow-pulse" />
          <div className="orb orb-blue w-80 h-80 bottom-0 -left-40 opacity-25" />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-cta" />
                <p className="text-xs uppercase tracking-widest text-cta font-body">
                  Product
                </p>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                <span className="text-white">OticVision</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed mb-8">
                An operations platform built to give African SMEs enterprise grade visibility and 
                control using nothing more than a smartphone. It brings together computer vision, 
                automation, and real time analytics to help business owners understand what is 
                happening in their business, reduce losses, and make confident, data driven decisions.
              </p>
              <a
                href="https://oticvision.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-lg font-body font-medium text-sm uppercase tracking-wider text-cta-foreground"
              >
                Explore Otic Vision
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="divider-accent w-32 mt-8" />
            </div>
          </div>
        </section>

        {/* Why OticVision Exists */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                Why OticVision Exists
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
                Most small and medium businesses operate with limited insight. Inventory is manual, 
                sales data is fragmented, customer behavior is unclear, and compliance is time consuming. 
                This leads to lost revenue, slow decisions, and operational stress.
              </p>
              <p className="text-cta font-body text-lg font-medium">
                OticVision closes this gap by making advanced AI tools affordable, simple, and locally relevant.
              </p>
            </div>
          </div>
        </section>

        {/* What OticVision Delivers */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-center text-white">
              What OticVision Delivers
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-white/10 hover:border-cta/50 transition-colors group rounded-xl">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-6">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-white">
                  Full Operational Visibility
                </h3>
                <p className="text-muted-foreground font-body">
                  Track inventory, sales, customers, and performance in real time with automated 
                  dashboards and alerts.
                </p>
              </div>

              <div className="p-8 border border-white/10 hover:border-cta/50 transition-colors group rounded-xl">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-6">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-white">
                  AI Powered Inventory and Sales
                </h3>
                <p className="text-muted-foreground font-body">
                  Use computer vision to scan products, record sales instantly, and keep stock 
                  levels accurate without manual effort.
                </p>
              </div>

              <div className="p-8 border border-white/10 hover:border-cta/50 transition-colors group rounded-xl">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-6">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-white">
                  Built In Compliance and Accounting
                </h3>
                <p className="text-muted-foreground font-body">
                  Generate compliant digital receipts and simplify reporting through integrated 
                  accounting and regulatory readiness.
                </p>
              </div>

              <div className="p-8 border border-white/10 hover:border-cta/50 transition-colors group rounded-xl">
                <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border border-white/20 group-hover:border-cta/40 transition-colors mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-white">
                  Better Customer Experience
                </h3>
                <p className="text-muted-foreground font-body">
                  Reduce queues, support digital payments, and understand customer behavior 
                  through data driven insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Value */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center text-white">
              Business Value at a Glance
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: TrendingUp, text: "Faster decision making through real time insight" },
                { icon: Shield, text: "Reduced losses from stock mismanagement and theft" },
                { icon: BarChart3, text: "Lower operational costs through automation" },
                { icon: Users, text: "Improved customer satisfaction and retention" },
                { icon: Smartphone, text: "Access to AI capabilities previously limited to large enterprises" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 border border-white/10 rounded-xl">
                  <item.icon className="w-6 h-6 text-cta flex-shrink-0" />
                  <p className="text-white/80 font-body">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Designed for African Businesses */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                  Designed for African Businesses
                </h2>
                <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
                  OticVision is built for local realities. It works on smartphones, requires minimal 
                  setup, and scales with the business. Pricing is structured to remain accessible 
                  as businesses grow.
                </p>
                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                  Unlike generic tools, OticVision balances advanced capability with everyday usability.
                </p>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80"
                  alt="African business owner using smartphone"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-accent/5" />
              </div>
            </div>
          </div>
        </section>

        {/* The Bigger Vision */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                The Bigger Vision
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                OticVision is part of Otic Group's mission to democratize access to intelligence 
                across Africa. By giving entrepreneurs clear sight into their operations, we enable 
                stronger businesses, better livelihoods, and more resilient local economies.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden bg-background">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-background" />
          <div className="orb orb-luminous w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
          
          <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
            <div className="section-panel max-w-3xl mx-auto p-12">
              <div className="divider-accent w-16 mx-auto mb-8" />
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Ready to Transform Your Business?</span>
              </h2>
              <p className="text-muted-foreground font-body text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of SMEs across Africa using Otic Vision to streamline operations.
              </p>
              <a
                href="https://oticvision.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-lg font-body font-medium text-sm uppercase tracking-wider text-cta-foreground"
              >
                Explore Otic Vision
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OticVision;
