import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border mt-auto bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Otic Group</h3>
            <p className="text-sm text-muted-foreground font-body">
              Accelerating Africa's AI Revolution
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-medium mb-4 text-sm uppercase tracking-widest">Products</h4>
            <ul className="space-y-2">
              <li><Link to="/otic-vision" className="text-muted-foreground hover:text-foreground text-sm font-body transition-colors">Otic Vision</Link></li>
              <li><Link to="/otic-learn" className="text-muted-foreground hover:text-foreground text-sm font-body transition-colors">Otic Learn</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body font-medium mb-4 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground text-sm font-body transition-colors">Who We Are</Link></li>
              <li><Link to="/partners" className="text-muted-foreground hover:text-foreground text-sm font-body transition-colors">Partners</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground text-sm font-body transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-medium mb-4 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li>info@oticgroup.net</li>
              <li>+256 756 722 263</li>
              <li>Uganda • Rwanda</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground font-body">
            © 2025 Otic Group. All rights reserved.
          </p>

          {/* Privacy */}
          <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground font-body transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
