import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  links?: { label: string; to: string }[];
}

const COMPANY_INFO = {
  about: `Otic Group is a leading AI solutions company focused on African enterprise transformation. We provide cutting-edge artificial intelligence solutions that empower businesses across the continent to innovate, optimize, and scale.`,
  services: `Our services include:
• Enterprise AI Integration - Custom AI solutions for business operations
• Workforce Training - AI literacy and skills development programs  
• Research & Development - Cutting-edge AI research tailored for African markets
• Data Analytics - Advanced analytics and business intelligence`,
  products: `Our flagship products:
• Otic Vision - An AI-powered business platform for enterprise analytics and automation
• Otic Learn - A comprehensive AI-driven learning and training platform`,
  contact: `You can reach us at:
• Email: info@oticgroup.net
• Phone: +256 780 176 805
• Locations: Uganda & Rwanda`,
  industries: `We serve various industries including:
• Financial Services & Banking
• Healthcare & Life Sciences
• Agriculture & Agribusiness
• Manufacturing & Supply Chain
• Government & Public Sector`,
};

const QUICK_RESPONSES: { keywords: string[]; response: string; links?: { label: string; to: string }[] }[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    response: `Hello! Welcome to Otic Group. I'm here to help you learn about our AI solutions and services. What would you like to know about?`,
    links: [
      { label: 'Our Services', to: '/services' },
      { label: 'About Us', to: '/about' },
    ],
  },
  {
    keywords: ['who', 'about', 'what is otic', 'company'],
    response: COMPANY_INFO.about,
    links: [{ label: 'Learn More About Us', to: '/about' }],
  },
  {
    keywords: ['service', 'offer', 'provide', 'do you do', 'what do you'],
    response: COMPANY_INFO.services,
    links: [{ label: 'View All Services', to: '/services' }],
  },
  {
    keywords: ['product', 'vision', 'learn', 'platform', 'solution'],
    response: COMPANY_INFO.products,
    links: [
      { label: 'Otic Vision', to: '/otic-vision' },
      { label: 'Otic Learn', to: '/otic-learn' },
    ],
  },
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'talk', 'sales', 'demo'],
    response: COMPANY_INFO.contact,
    links: [{ label: 'Contact Sales', to: '/contact' }],
  },
  {
    keywords: ['industry', 'sector', 'work with', 'client'],
    response: COMPANY_INFO.industries,
    links: [{ label: 'View Industries', to: '/industries' }],
  },
  {
    keywords: ['partner', 'partnership', 'collaborate'],
    response: `We actively seek partnerships with organizations that share our vision for AI-driven transformation in Africa. Whether you're a technology provider, research institution, or enterprise looking to collaborate, we'd love to hear from you.`,
    links: [
      { label: 'Our Partners', to: '/partners' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    keywords: ['research', 'innovation', 'r&d'],
    response: `Our Research & Development team focuses on creating AI solutions specifically designed for African markets and challenges. We conduct cutting-edge research in machine learning, natural language processing, and computer vision.`,
    links: [{ label: 'View Research', to: '/research' }],
  },
  {
    keywords: ['location', 'where', 'office', 'uganda', 'rwanda'],
    response: `Otic Group operates in Uganda and Rwanda, serving enterprises across East Africa and beyond. We're expanding our reach to serve more African markets.`,
    links: [{ label: 'Contact Us', to: '/contact' }],
  },
  {
    keywords: ['training', 'learn', 'education', 'course'],
    response: `Otic Learn is our AI-driven education platform that offers comprehensive training programs in AI, data science, and digital transformation. We help organizations upskill their workforce for the AI era.`,
    links: [{ label: 'Explore Otic Learn', to: '/otic-learn' }],
  },
];

const getResponse = (input: string): Message => {
  const lowerInput = input.toLowerCase();
  
  for (const response of QUICK_RESPONSES) {
    if (response.keywords.some(keyword => lowerInput.includes(keyword))) {
      return {
        id: Date.now(),
        text: response.response,
        isBot: true,
        links: response.links,
      };
    }
  }
  
  return {
    id: Date.now(),
    text: `Thank you for your question! For more detailed information or specific inquiries, I recommend reaching out to our team directly. They'll be happy to assist you.`,
    isBot: true,
    links: [
      { label: 'Contact Sales', to: '/contact' },
      { label: 'View Services', to: '/services' },
    ],
  };
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: `Hello! 👋 I'm the Otic Group assistant. I can help you learn about our AI solutions, services, and how we're transforming African enterprises. What would you like to know?`,
      isBot: true,
      links: [
        { label: 'Our Services', to: '/services' },
        { label: 'Contact Sales', to: '/contact' },
      ],
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isBot: false,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getResponse(input);
      setMessages(prev => [...prev, botResponse]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-cta text-cta-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen ? 'rotate-0' : 'animate-pulse'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[350px] sm:w-[400px] max-h-[500px] glass-card rounded-2xl border border-border/50 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="px-4 py-3 border-b border-border/30 bg-secondary/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cta/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-cta" />
            </div>
            <div>
              <h3 className="font-body font-semibold text-sm">Otic Assistant</h3>
              <p className="text-xs text-muted-foreground">Ask us anything</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[320px]">
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                  message.isBot
                    ? 'bg-secondary/70 text-foreground rounded-bl-sm'
                    : 'bg-cta text-cta-foreground rounded-br-sm'
                }`}
              >
                <p className="text-sm font-body whitespace-pre-line">{message.text}</p>
                {message.links && message.links.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {message.links.map((link, index) => (
                      <Link
                        key={index}
                        to={link.to}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full bg-cta/20 text-cta hover:bg-cta/30 transition-colors"
                      >
                        {link.label}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-border/30 bg-secondary/30">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2.5 rounded-full bg-background border border-border text-sm font-body focus:outline-none focus:border-cta/50 transition-colors"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="w-10 h-10 rounded-full bg-cta text-cta-foreground flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cta/90 transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;