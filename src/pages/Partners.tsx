import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Handshake } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Import partner logos
import ecobank from '@/assets/partners/ecobank.png';
import ucc from '@/assets/partners/ucc.png';
import isaca from '@/assets/partners/isaca.png';
import stanfield from '@/assets/partners/stanfield.png';
import kyambogo from '@/assets/partners/kyambogo.png';
import datamine from '@/assets/partners/datamine.png';
import centenary from '@/assets/partners/centenary.png';
import ministryIct from '@/assets/partners/ministry-ict.png';
import nita from '@/assets/partners/nita.png';
import innovationHub from '@/assets/partners/innovation-hub.png';
import iau from '@/assets/partners/iau.png';
import acwj from '@/assets/partners/acwj.png';

const clients = [
  { name: "Ecobank", logo: ecobank },
  { name: "Uganda Communications Commission", logo: ucc },
  { name: "ISACA Kampala Chapter", logo: isaca },
  { name: "Stanfield", logo: stanfield },
  { name: "Kyambogo University", logo: kyambogo },
  { name: "Datamine Strategy", logo: datamine },
  { name: "Centenary Bank", logo: centenary },
];

const partners = [
  { name: "Ministry of ICT & National Guidance", logo: ministryIct },
  { name: "NITA Uganda", logo: nita },
  { name: "National ICT Innovation Hub", logo: innovationHub },
  { name: "International American University", logo: iau },
  { name: "Association for Women Journalists", logo: acwj },
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
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white">
                Partners
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed">
                We collaborate with leading institutions, government bodies, and industry players 
                to accelerate Africa's AI transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-center text-white">
              Our Clients
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
              {clients.map((client) => (
                <div 
                  key={client.name} 
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cta/30 transition-all duration-300 w-full max-w-[200px] aspect-square flex items-center justify-center group"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-center text-white">
              Our Partners
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
              {partners.map((partner) => (
                <div 
                  key={partner.name} 
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cta/30 transition-all duration-300 w-full max-w-[180px] aspect-square flex items-center justify-center group"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Form */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <Handshake className="w-16 h-16 text-accent mx-auto mb-6" />
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
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
                      className="w-full px-4 py-3 border border-border bg-background font-body focus:outline-none focus:border-accent transition-colors rounded-lg"
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
                      className="w-full px-4 py-3 border border-border bg-background font-body focus:outline-none focus:border-accent transition-colors rounded-lg"
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
                      className="w-full px-4 py-3 border border-border bg-background font-body focus:outline-none focus:border-accent transition-colors rounded-lg"
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
                      className="w-full px-4 py-3 border border-border bg-background font-body focus:outline-none focus:border-accent transition-colors rounded-lg"
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
                    className="w-full px-4 py-3 border border-border bg-background font-body focus:outline-none focus:border-accent transition-colors rounded-lg"
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
                    className="w-full px-4 py-3 border border-border bg-background font-body focus:outline-none focus:border-accent transition-colors resize-none rounded-lg"
                    placeholder="Describe how you'd like to partner with Otic Group..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-body font-medium text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors rounded-lg"
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
