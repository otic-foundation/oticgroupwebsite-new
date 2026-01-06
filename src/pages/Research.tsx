import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import enterpriseAI from '@/assets/enterprise-ai.jpeg';
import oticVision from '@/assets/otic-vision.jpeg';
import workforceTraining from '@/assets/workforce-training.jpeg';

const researchData = [
  {
    number: "01",
    title: "Agentic AI in Enterprise Operations",
    summary: "Deployed AI systems that execute workflows in minutes, unify enterprise data, and amplify human decision-making. Our research demonstrates 40-300% ROI across transformed functions.",
    image: enterpriseAI,
    link: "/services"
  },
  {
    number: "02",
    title: "Otic Vision: Intelligent Systems for SME Operations",
    summary: "AI-powered smartphone system for inventory tracking and real-time insights—designed for African SMEs. Using computer vision and data intelligence to empower businesses.",
    image: oticVision,
    link: "/otic-vision"
  },
  {
    number: "03",
    title: "Workforce Readiness & AI Adoption",
    summary: "Training thousands of professionals with workflow-driven AI education that accelerates real transformation. Over 5500 learners have passed through our programs.",
    image: workforceTraining,
    link: "/otic-learn"
  },
  {
    number: "04",
    title: "Systems Thinking in Emerging Markets",
    summary: "Building adaptive, context-aware AI architectures that thrive in informal, fast-growing economies. Our framework addresses the unique challenges of African markets.",
    link: "/about"
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

        {/* Research Grid */}
        <section className="py-20 bg-[hsl(var(--deep-sea-blue))]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-12">
              {researchData.map((item) => (
                <div key={item.number} className="group">
                  {item.image ? (
                    <div className="relative aspect-[4/3] mb-6 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-white/5 flex items-center justify-center border border-white/10">
                      <span className="text-white/20 font-display text-8xl font-bold">{item.number}</span>
                    </div>
                  )}
                  <span className="text-accent font-display text-sm font-bold tracking-wider mb-2 block">
                    {item.number}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/70 font-body mb-6">
                    {item.summary}
                  </p>
                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-2 text-accent font-body font-medium text-sm hover:text-accent/80 transition-colors group"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
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
