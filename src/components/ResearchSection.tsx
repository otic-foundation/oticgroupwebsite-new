import { useEffect, useRef, useState } from 'react';
import enterpriseAI from '@/assets/enterprise-ai.jpeg';
import oticVision from '@/assets/otic-vision.jpeg';
import workforceTraining from '@/assets/workforce-training.jpeg';

interface ResearchCardData {
  number: string;
  title: string;
  summary: string;
  image?: string;
  link?: string;
  linkLabel?: string;
}

const researchData: ResearchCardData[] = [
  {
    number: "01",
    title: "Agentic AI in Enterprise Operations",
    summary: "Deployed AI systems that execute workflows in minutes, unify enterprise data, and amplify human decision-making.",
    image: enterpriseAI,
    link: "#",
    linkLabel: "Read more"
  },
  {
    number: "02",
    title: "Otic Vision: Intelligent Systems for SME Operations",
    summary: "AI-powered smartphone system for inventory tracking and real-time insights—designed for African SMEs.",
    image: oticVision,
    link: "https://oticvision.com/",
    linkLabel: "Explore Otic Vision"
  },
  {
    number: "03",
    title: "Workforce Readiness & AI Adoption",
    summary: "Training thousands of professionals with workflow-driven AI education that accelerates real transformation.",
    image: workforceTraining,
    link: "#",
    linkLabel: "Read more"
  },
  {
    number: "04",
    title: "Systems Thinking in Emerging Markets",
    summary: "Building adaptive, context-aware AI architectures that thrive in informal, fast-growing economies.",
    link: "#",
    linkLabel: "Read more"
  }
];

const ResearchCard = ({ data, index }: { data: ResearchCardData; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const isExternal = data.link?.startsWith('http');

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col h-full">
        {/* Image with 4:5 aspect ratio */}
        {data.image ? (
          <div className="relative overflow-hidden aspect-[4/5] mb-6 bg-white/5">
            <img 
              src={data.image} 
              alt={data.title}
              className="w-full h-full object-contain bg-[hsl(210,50%,20%)]"
            />
          </div>
        ) : (
          <div className="relative overflow-hidden aspect-[4/5] mb-6 bg-white/5 flex items-center justify-center border border-white/10">
            <span className="text-white/20 font-display text-8xl font-bold">{data.number}</span>
          </div>
        )}

        {/* Number */}
        <span className="text-[hsl(30,85%,55%)] font-display text-sm font-bold tracking-wider mb-2">
          {data.number}
        </span>

        {/* Title */}
        <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-tight mb-3">
          {data.title}
        </h3>

        {/* Summary - max 2 lines */}
        <p className="text-white/70 font-body text-base leading-relaxed mb-4 line-clamp-2">
          {data.summary}
        </p>

        {/* Link */}
        {data.link && (
          <a
            href={data.link}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 text-[hsl(30,85%,55%)] font-body font-medium text-sm hover:text-[hsl(30,85%,65%)] transition-colors duration-300 group mt-auto"
          >
            {data.linkLabel}
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
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
    <section id="research" className="py-20 lg:py-32 bg-[hsl(210,50%,25%)] relative overflow-hidden">
      {/* Parallax decorative shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 border border-white/5 rounded-full -z-0 opacity-30" />
      <div className="absolute bottom-20 left-0 w-64 h-64 border border-[hsl(30,85%,55%)]/10 -z-0 opacity-20" style={{ transform: 'rotate(12deg)' }} />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
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

        {/* Research Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
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
