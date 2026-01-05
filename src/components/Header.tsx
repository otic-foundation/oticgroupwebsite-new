import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setExpertiseOpen(false);
    setCompanyOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || mobileMenuOpen 
          ? 'glass-card border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-border/50 group-hover:border-accent-luminous/50 transition-colors">
            <img src={logo} alt="Otic Group Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-body font-bold tracking-wide text-sm uppercase text-foreground">
            Otic Group
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm tracking-wide font-body">
          <Link to="/otic-vision" className="text-muted-foreground hover:text-foreground transition-colors uppercase relative group">
            Otic Vision
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-luminous group-hover:w-full transition-all duration-300" />
          </Link>
          <Link to="/otic-learn" className="text-muted-foreground hover:text-foreground transition-colors uppercase relative group">
            Otic Learn
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-luminous group-hover:w-full transition-all duration-300" />
          </Link>
          <Link to="/research" className="text-muted-foreground hover:text-foreground transition-colors uppercase relative group">
            Research
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-luminous group-hover:w-full transition-all duration-300" />
          </Link>
          
          {/* Expertise Dropdown */}
          <div className="relative" onMouseEnter={() => setExpertiseOpen(true)} onMouseLeave={() => setExpertiseOpen(false)}>
            <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors uppercase group">
              Expertise <ChevronDown className={`w-3 h-3 transition-transform ${expertiseOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute top-full left-0 mt-4 w-48 glass-card rounded-lg overflow-hidden transition-all duration-300 border border-accent-luminous/10 ${
              expertiseOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}>
              <Link to="/services" className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent-luminous/10 transition-colors border-b border-border/30">
                Services
              </Link>
              <Link to="/industries" className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent-luminous/10 transition-colors">
                Industries
              </Link>
            </div>
          </div>

          {/* Company Dropdown */}
          <div className="relative" onMouseEnter={() => setCompanyOpen(true)} onMouseLeave={() => setCompanyOpen(false)}>
            <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors uppercase group">
              Company <ChevronDown className={`w-3 h-3 transition-transform ${companyOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute top-full left-0 mt-4 w-48 glass-card rounded-lg overflow-hidden transition-all duration-300 border border-accent-luminous/10 ${
              companyOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}>
              <Link to="/about" className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent-luminous/10 transition-colors border-b border-border/30">
                Who We Are
              </Link>
              <Link to="/partners" className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent-luminous/10 transition-colors">
                Partners
              </Link>
            </div>
          </div>

          <Link to="/contact" className="btn-glow px-6 py-2.5 rounded-lg text-cta-foreground uppercase font-medium">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container mx-auto px-6 py-6 space-y-1 border-t border-border/30">
          <Link to="/otic-vision" className="block py-3 px-4 text-foreground font-body rounded-lg hover:bg-secondary/50 transition-colors">Otic Vision</Link>
          <Link to="/otic-learn" className="block py-3 px-4 text-foreground font-body rounded-lg hover:bg-secondary/50 transition-colors">Otic Learn</Link>
          <Link to="/research" className="block py-3 px-4 text-foreground font-body rounded-lg hover:bg-secondary/50 transition-colors">Research</Link>
          <Link to="/services" className="block py-3 px-4 text-foreground font-body rounded-lg hover:bg-secondary/50 transition-colors">Services</Link>
          <Link to="/industries" className="block py-3 px-4 text-foreground font-body rounded-lg hover:bg-secondary/50 transition-colors">Industries</Link>
          <Link to="/about" className="block py-3 px-4 text-foreground font-body rounded-lg hover:bg-secondary/50 transition-colors">Who We Are</Link>
          <Link to="/partners" className="block py-3 px-4 text-foreground font-body rounded-lg hover:bg-secondary/50 transition-colors">Partners</Link>
          <Link to="/contact" className="block py-3 px-4 text-cta font-body font-medium rounded-lg hover:bg-cta/10 transition-colors">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
