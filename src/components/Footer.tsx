import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Youtube, Phone, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';

// Custom X (Twitter) icon
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Custom Instagram icon
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// Custom TikTok icon
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/30">
      {/* Background effects - enhanced */}
      <div className="orb orb-accent w-80 h-80 -bottom-40 -left-40 opacity-20" />
      <div className="orb orb-luminous w-64 h-64 -bottom-32 right-1/4 opacity-15" />
      
      <div className="container mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="divider-accent w-full mb-12" />
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-accent-luminous/30">
                <img src={logo} alt="Otic Group Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-body font-bold tracking-wide text-sm uppercase">
                Otic Group
              </span>
            </Link>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Pioneering AI solutions for African enterprise transformation.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wide mb-6 text-foreground">
              Products
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/otic-vision" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-body">
                  Otic Vision
                </Link>
              </li>
              <li>
                <Link to="/otic-learn" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-body">
                  Otic Learn
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-body">
                  Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wide mb-6 text-foreground">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-body">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-body">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-body">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-body">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wide mb-6 text-foreground flex items-center gap-2">
              <span className="marker-orange" />
              Contact
            </h4>
            
            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <a 
                href="tel:+256780176805" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-body"
              >
                <Phone className="w-4 h-4" />
                +256 780 176 805
              </a>
              <a 
                href="mailto:info@oticgroup.net" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-body"
              >
                <Mail className="w-4 h-4" />
                info@oticgroup.net
              </a>
            </div>
            
            <a 
              href="mailto:info@oticgroup.net?subject=Inquiry%20from%20Website" 
              className="btn-glow inline-block px-6 py-3 rounded-lg text-cta-foreground uppercase text-sm font-medium mb-6"
            >
              Get in Touch
            </a>
            
            {/* Social links */}
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://www.linkedin.com/company/oticuganda/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-cta hover:border-cta/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://x.com/OticUganda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-cta hover:border-cta/30 transition-all"
                aria-label="X (Twitter)"
              >
                <XIcon />
              </a>
              <a 
                href="https://www.instagram.com/oticgroup_?igsh=YzE3bDQ5c2RudnU3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-cta hover:border-cta/30 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61559194525144&sk=about" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-cta hover:border-cta/30 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com/@oticgroup?si=mxr-kzZMiBWnYxSj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-cta hover:border-cta/30 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="https://www.tiktok.com/@oticgroup?_r=1&_t=ZM-92r345MF61Q" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-cta hover:border-cta/30 transition-all"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs font-body">
            © {new Date().getFullYear()} Otic Group. All rights reserved.
          </p>
          <Link to="/privacy" className="text-muted-foreground hover:text-foreground text-xs font-body transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;