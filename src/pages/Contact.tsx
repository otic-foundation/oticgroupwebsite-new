import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll respond within 24-48 hours.",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col min-h-screen noise-overlay">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-widest text-accent font-body mb-4">
                Get in Touch
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white">
                Contact Us
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed">
                Ready to transform your organization with AI? Let's start a conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold mb-6 text-white">Get in Touch</h2>
                  <p className="text-muted-foreground font-body">
                    Have a question or want to work together? Reach out to us.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center border border-white/20 flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-body font-medium mb-1">Email</p>
                      <a 
                        href="mailto:info@oticgroup.net" 
                        className="text-muted-foreground font-body hover:text-accent transition-colors"
                      >
                        info@oticgroup.net
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center border border-white/20 flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-body font-medium mb-1">Phone</p>
                      <a 
                        href="tel:+256756722263" 
                        className="text-muted-foreground font-body hover:text-accent transition-colors"
                      >
                        +256 756 722 263
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center border border-white/20 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-body font-medium mb-1">Locations</p>
                      <p className="text-muted-foreground font-body">
                        Uganda • Rwanda
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="font-body font-medium mb-4">Website</p>
                  <a 
                    href="https://www.oticgroup.net" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent font-body hover:text-accent/80 transition-colors"
                  >
                    www.oticgroup.net
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="p-8 bg-secondary/30 border border-border">
                  <h3 className="font-display text-2xl font-bold mb-6 text-white">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-body font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border bg-background font-body focus:outline-none focus:border-accent transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-body font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border bg-background font-body focus:outline-none focus:border-accent transition-colors"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-body font-medium mb-2">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border bg-background font-body focus:outline-none focus:border-accent transition-colors"
                          placeholder="Your organization"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-body font-medium mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border bg-background font-body focus:outline-none focus:border-accent transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="enterprise">Enterprise Transformation</option>
                          <option value="training">Training & Education</option>
                          <option value="otic-vision">Otic Vision</option>
                          <option value="partnership">Partnership Inquiry</option>
                          <option value="careers">Careers</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-body font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-border bg-background font-body focus:outline-none focus:border-accent transition-colors resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-body font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
                    >
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
