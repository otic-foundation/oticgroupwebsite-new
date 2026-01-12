import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Handshake } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import PartnerCarousel from '@/components/PartnerCarousel';

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
    // Send to email via mailto
    const subject = encodeURIComponent('Partnership Request from ' + formData.companyName);
    const body = encodeURIComponent(
      `Company: ${formData.companyName}\nContact: ${formData.contactName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPartnership Type: ${formData.partnershipType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info@oticgroup.net?subject=${subject}&body=${body}`;
    
    toast({
      title: "Partnership Request",
      description: "Your email client will open to send the partnership request.",
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

        {/* Partners Carousel Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a365d]">
              Our Partners
            </h2>
            <PartnerCarousel />
          </div>
        </section>

        {/* Partnership Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <Handshake className="w-16 h-16 text-[#1a365d] mx-auto mb-6" />
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#1a365d]">
                  Become a Partner
                </h2>
                <p className="text-gray-600 font-body text-lg">
                  Interested in partnering with Otic Group? Fill out the form below and our 
                  partnership team will get in touch.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-body font-medium mb-2 text-[#1a365d]">
                      Company / Organization Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#1a365d]/20 bg-[#f5f0e8] text-[#1a365d] font-body focus:outline-none focus:border-[#1a365d] transition-colors rounded-lg placeholder:text-[#1a365d]/50"
                      placeholder="Your organization"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-body font-medium mb-2 text-[#1a365d]">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#1a365d]/20 bg-[#f5f0e8] text-[#1a365d] font-body focus:outline-none focus:border-[#1a365d] transition-colors rounded-lg placeholder:text-[#1a365d]/50"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-body font-medium mb-2 text-[#1a365d]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#1a365d]/20 bg-[#f5f0e8] text-[#1a365d] font-body focus:outline-none focus:border-[#1a365d] transition-colors rounded-lg placeholder:text-[#1a365d]/50"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-body font-medium mb-2 text-[#1a365d]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#1a365d]/20 bg-[#f5f0e8] text-[#1a365d] font-body focus:outline-none focus:border-[#1a365d] transition-colors rounded-lg placeholder:text-[#1a365d]/50"
                      placeholder="+256 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="partnershipType" className="block text-sm font-body font-medium mb-2 text-[#1a365d]">
                    Partnership Type *
                  </label>
                  <select
                    id="partnershipType"
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#1a365d]/20 bg-[#f5f0e8] text-[#1a365d] font-body focus:outline-none focus:border-[#1a365d] transition-colors rounded-lg"
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
                  <label htmlFor="message" className="block text-sm font-body font-medium mb-2 text-[#1a365d]">
                    Tell us about your partnership interest *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-[#1a365d]/20 bg-[#f5f0e8] text-[#1a365d] font-body focus:outline-none focus:border-[#1a365d] transition-colors resize-none rounded-lg placeholder:text-[#1a365d]/50"
                    placeholder="Describe how you'd like to partner with Otic Group..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a365d] text-white font-body font-medium text-sm uppercase tracking-wider hover:bg-[#1a365d]/90 transition-colors rounded-lg"
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
