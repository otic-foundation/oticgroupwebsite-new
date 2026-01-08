import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  links?: { label: string; to: string }[];
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: `Hello! 👋 I'm the Otic Group AI assistant. I can help you learn about our AI solutions, services, and how we're transforming African enterprises. What would you like to know?`,
      isBot: true,
      links: [
        { label: 'Our Services', to: '/services' },
        { label: 'Contact Sales', to: '/contact' },
      ],
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now(), text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.filter(m => m.id !== 1).map(m => ({
        role: m.isBot ? 'assistant' : 'user',
        content: m.text
      }));

      const { data, error } = await supabase.functions.invoke('chat', {
        body: { message: input, history }
      });

      const botResponse: Message = {
        id: Date.now() + 1,
        text: error ? "I'm having trouble connecting. Please contact us at info@oticgroup.net." : data.reply,
        isBot: true,
        links: [{ label: 'Contact Sales', to: '/contact' }],
      };
      setMessages(prev => [...prev, botResponse]);
    } catch {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: "I'm having trouble right now. Please contact us directly.",
        isBot: true,
        links: [{ label: 'Contact Us', to: '/contact' }],
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-cta text-cta-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${isOpen ? '' : 'animate-pulse'}`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      <div className={`fixed bottom-24 right-6 z-50 w-[350px] sm:w-[400px] max-h-[500px] glass-card rounded-2xl border border-border/50 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="px-4 py-3 border-b border-border/30 bg-secondary/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cta/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-cta" />
            </div>
            <div>
              <h3 className="font-body font-semibold text-sm">Otic AI Assistant</h3>
              <p className="text-xs text-muted-foreground">Powered by Lovable AI</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[320px]">
          {messages.map(message => (
            <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${message.isBot ? 'bg-secondary/70 text-foreground rounded-bl-sm' : 'bg-cta text-cta-foreground rounded-br-sm'}`}>
                <p className="text-sm font-body whitespace-pre-line">{message.text}</p>
                {message.links && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {message.links.map((link, index) => (
                      <Link key={index} to={link.to} onClick={() => setIsOpen(false)} className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full bg-cta/20 text-cta hover:bg-cta/30 transition-colors">
                        {link.label}<ArrowRight className="w-3 h-3" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-secondary/70 rounded-2xl rounded-bl-sm px-4 py-2.5">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0ms'}} />
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '150ms'}} />
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '300ms'}} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 border-t border-border/30 bg-secondary/30">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 rounded-full bg-background border border-border text-sm font-body focus:outline-none focus:border-cta/50 transition-colors disabled:opacity-50"
            />
            <button onClick={handleSend} disabled={!input.trim() || isLoading} className="w-10 h-10 rounded-full bg-cta text-cta-foreground flex items-center justify-center disabled:opacity-50 hover:bg-cta/90 transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
