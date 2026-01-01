import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Handshake, Building2, GraduationCap, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const partnerCategories = [
  {
    icon: Building2,
    title: "Government Partners",
    partners: [
      "Ministry of ICT & National Guidance",
      "National Information Technology Authority (NITA)",
      "Uganda Communications Commission"
    ]
  },
  {
    icon: GraduationCap,
    title: "Academic Partners",
    partners: [
      "Kyambogo University",
      "International American University",
      "Datamine Strategy"
    ]
  },
  {
    icon: Globe,
    title: "Industry Partners",
    partners: [
      "ISACA Kampala Chapter",
      "National ICT Innovation Hub",
      "Association for Women Journalists"
    ]
  }
];

const Partners = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Partnership Request Submitted",
      description: "Thank you for your interest. Our team will contact you within 48 hours.",
    });
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      partnershipType: '',
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
                Company
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Partners
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed">
                We collaborate with leading institutions, government bodies, and industry players 
                to accelerate Africa's AI transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-center">
              Our Partners
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {partnerCategories.map((category) => (
                <div key={category.title} className="p-8 bg-background border border-border">
                  <category.icon className="w-10 h-10 text-accent mb-6" />
                  <h3 className="font-display text-xl font-bold mb-6">{category.title}</h3>
                  <ul className="space-y-4">
                    {category.partners.map((partner) => (
                      <li key={partner} className="flex items-center gap-3 text-muted-foreground font-body">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        {partner}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Form */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <Handshake className="w-16 h-16 text-accent mx-auto mb-6" />
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Become a Partner
                </h2>
                <p className="text-muted-foreground font-body text-lg">
                  Interested in partnering with Otic Group? Fill out the form below and our 
                  partnership team will get in touch.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-body font-medium mb-2">
                      Company / Organization Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border bg-background font-body focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your organization"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-body font-medium mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border bg-background font-body focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                  <div>
                    <label htmlFor="phone" className="block text-sm font-body font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-background font-body focus:outline-none focus:border-accent transition-colors"
                      placeholder="+256 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="partnershipType" className="block text-sm font-body font-medium mb-2">
                    Partnership Type *
                  </label>
                  <select
                    id="partnershipType"
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border bg-background font-body focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="">Select partnership type</option>
                    <option value="technology">Technology Partner</option>
                    <option value="academic">Academic Partner</option>
                    <option value="government">Government Partner</option>
                    <option value="industry">Industry Partner</option>
                    <option value="reseller">Reseller Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-body font-medium mb-2">
                    Tell us about your partnership interest *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border bg-background font-body focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Describe how you'd like to partner with Otic Group..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-body font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
                >
                  Submit Partnership Request
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
