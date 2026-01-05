import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

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
              Get in Touch
            </h4>
            <Link 
              to="/contact" 
              className="btn-glow inline-block px-6 py-3 rounded-lg text-cta-foreground uppercase text-sm font-medium mb-6"
            >
              Contact Us
            </Link>
            
            {/* Social links */}
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-accent-luminous hover:border-accent-luminous/30 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-accent-luminous hover:border-accent-luminous/30 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-accent-luminous hover:border-accent-luminous/30 transition-all"
              >
                <Facebook className="w-4 h-4" />
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
