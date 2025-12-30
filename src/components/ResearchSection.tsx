import { useEffect, useRef, useState } from 'react';
import enterpriseAI from '@/assets/enterprise-ai.jpeg';
import oticVision from '@/assets/otic-vision.jpeg';
import workforceTraining from '@/assets/workforce-training.jpeg';

interface ResearchCard {
  number: string;
  title: string;
  context: string;
  sections: {
    label: string;
    content: string;
    highlight?: boolean;
  }[];
  insight: string;
  image?: string;
  link?: string;
}

const researchData: ResearchCard[] = [
  {
    number: "01",
    title: "Agentic AI in Enterprise Operations",
    context: "Large organizations operate with fragmented data, slow reporting cycles, and siloed decision-making structures.",
    sections: [
      {
        label: "What we did",
        content: "Designed and deployed an Agentic AI system within a regulated banking environment to support enterprise reporting, analysis, and decision intelligence.",
        highlight: true
      },
      {
        label: "What we observed",
        content: "Reporting workflows that previously took days were executed in minutes. Disconnected departmental data became linked into a unified enterprise view.",
        highlight: true
      }
    ],
    insight: "Agentic AI works best as a cognitive layer across enterprise systems — amplifying human decision-making rather than replacing it.",
    image: enterpriseAI
  },
  {
    number: "02",
    title: "Otic Vision: Intelligent Systems for SME Operations",
    context: "Most SMEs operate without accurate visibility into inventory, sales, or performance. Operational losses are systemic.",
    sections: [
      {
        label: "What we studied",
        content: "Retail and trade-based SMEs across East Africa, focusing on inventory behavior, sales recording, and operational decision-making.",
        highlight: true
      },
      {
        label: "What we discovered",
        content: "Fewer than 10% of SMEs use analytics tools. Manual stock tracking leads to compounding, invisible losses.",
        highlight: false
      },
      {
        label: "What we built to test it",
        content: "Otic Vision — an AI-powered operational system that uses smartphone-based intelligence to track inventory and generate real-time insights.",
        highlight: true
      }
    ],
    insight: "When designed for context, intelligent systems can outperform traditional enterprise tools while remaining accessible and affordable.",
    image: oticVision,
    link: "https://oticvision.com/"
  },
  {
    number: "03",
    title: "Workforce Readiness & AI Adoption",
    context: "AI adoption is commonly framed as a technology problem. In practice, it is a human capability challenge.",
    sections: [
      {
        label: "What we explored",
        content: "AI literacy and workforce readiness across corporates, universities, and public institutions.",
        highlight: false
      },
      {
        label: "What we learned",
        content: "Skills gaps delay AI adoption more than cost or infrastructure. Contextual, workflow-driven training accelerates transformation.",
        highlight: true
      },
      {
        label: "How we validated this",
        content: "Thousands of professionals and students trained. A growing AI practitioner community matched to real-world work.",
        highlight: true
      }
    ],
    insight: "AI transformation succeeds when people, systems, and strategy evolve together.",
    image: workforceTraining
  },
  {
    number: "04",
    title: "Systems Thinking in Emerging Markets",
    context: "AI systems built for mature markets often fail when deployed in emerging economies due to mismatched assumptions.",
    sections: [
      {
        label: "What we investigated",
        content: "How AI systems behave in environments characterized by informality, rapid growth, and limited digitization.",
        highlight: false
      },
      {
        label: "What we observed",
        content: "Adaptive, modular systems outperform rigid architectures. Local context is a strategic advantage, not a constraint.",
        highlight: true
      }
    ],
    insight: "The future of AI in emerging markets will be shaped by systems designed for adaptability, context-awareness, and human-centered execution."
  }
];

const ResearchCard = ({ data, index }: { data: ResearchCard; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 py-16 lg:py-24 border-t border-white/20">
        {/* Vertical Label */}
        <div className="lg:col-span-1 flex lg:flex-col items-start lg:items-center gap-4">
          <span className="text-[hsl(30,85%,55%)] font-display text-2xl lg:text-3xl font-bold">
            {data.number}
          </span>
          <div className="hidden lg:block w-px h-20 bg-white/30" />
        </div>

        {/* Content - alternates position */}
        <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          {/* Title */}
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
            {data.title}
          </h3>

          {/* Context */}
          <p className="text-white/80 font-body text-base leading-relaxed">
            {data.context}
          </p>

          {/* Sections */}
          <div className="space-y-5 mt-6">
            {data.sections.map((section, idx) => (
              <div key={idx}>
                <h4 className={`font-body text-sm font-semibold uppercase tracking-wider mb-2 ${
                  section.highlight ? 'text-[hsl(30,85%,55%)]' : 'text-white'
                }`}>
                  {section.label}
                </h4>
                <p className="text-white/70 font-body text-sm leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Insight */}
          <div className="mt-6 pt-4 border-t border-white/20">
            <p className="font-body text-base text-white/90 leading-relaxed italic">
              <span className="text-[hsl(30,85%,55%)] font-semibold not-italic">↳</span>{' '}
              {data.insight}
            </p>
          </div>

          {/* Link Button */}
          {data.link && (
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-[hsl(30,85%,55%)] text-white font-body font-medium text-sm uppercase tracking-wider hover:bg-[hsl(30,85%,45%)] transition-colors duration-300 rounded"
            >
              Explore Otic Vision
              <span>→</span>
            </a>
          )}
        </div>

        {/* Image - alternates position */}
        {data.image && (
          <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="relative overflow-hidden aspect-[4/3] shadow-2xl">
              <img 
                src={data.image} 
                alt={data.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              {/* Decorative frame */}
              <div className="absolute inset-0 border border-white/10 pointer-events-none" />
            </div>
          </div>
        )}

        {/* For cards without images, span full width */}
        {!data.image && (
          <div className="lg:col-span-6 lg:order-2 flex items-center justify-center">
            <div className="w-full h-full min-h-[200px] bg-white/5 border border-white/10 flex items-center justify-center">
              <span className="text-white/30 font-display text-6xl">{data.number}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ResearchSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="research" className="py-20 lg:py-32 bg-[hsl(210,50%,25%)]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-16 lg:mb-20 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            RESEARCH
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg lg:text-xl text-white/90 font-body leading-relaxed">
              <span className="text-[hsl(30,85%,55%)] font-medium">Applied research</span> from real deployments, 
              systems, and field work.
            </p>
            <p className="text-base lg:text-lg text-white/70 font-body mt-4">
              Our research emerges from building, deploying, and observing AI systems in live 
              enterprise and SME environments across Africa.
            </p>
          </div>
        </div>

        {/* Research Cards */}
        <div>
          {researchData.map((item, index) => (
            <ResearchCard key={item.number} data={item} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-white/20 text-center">
          <p className="text-white/80 font-body text-lg mb-6">
            Ready to explore what <span className="text-[hsl(30,85%,55%)]">intelligent systems</span> can do for your organization?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[hsl(210,50%,25%)] font-body font-medium text-sm uppercase tracking-wider hover:bg-[hsl(30,85%,55%)] hover:text-white transition-colors duration-300"
          >
            Start a Conversation
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;