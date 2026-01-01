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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-background/95 backdrop-blur-sm border-b border-border' : ''
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center">
            <img src={logo} alt="Otic Group Logo" className="w-8 h-8 object-contain" />
          </div>
          <span className="font-body font-bold tracking-wide text-sm uppercase text-foreground">
            Otic Group
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm tracking-wide font-body">
          <Link to="/otic-vision" className="text-muted-foreground hover:text-foreground transition-colors uppercase">
            Otic Vision
          </Link>
          <Link to="/otic-learn" className="text-muted-foreground hover:text-foreground transition-colors uppercase">
            Otic Learn
          </Link>
          <Link to="/research" className="text-muted-foreground hover:text-foreground transition-colors uppercase">
            Research
          </Link>
          
          {/* Expertise Dropdown */}
          <div className="relative" onMouseEnter={() => setExpertiseOpen(true)} onMouseLeave={() => setExpertiseOpen(false)}>
            <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors uppercase">
              Expertise <ChevronDown className="w-3 h-3" />
            </button>
            {expertiseOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border shadow-lg py-2">
                <Link to="/services" className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                  Services
                </Link>
                <Link to="/industries" className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                  Industries
                </Link>
              </div>
            )}
          </div>

          {/* Company Dropdown */}
          <div className="relative" onMouseEnter={() => setCompanyOpen(true)} onMouseLeave={() => setCompanyOpen(false)}>
            <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors uppercase">
              Company <ChevronDown className="w-3 h-3" />
            </button>
            {companyOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border shadow-lg py-2">
                <Link to="/about" className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                  Who We Are
                </Link>
                <Link to="/partners" className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                  Partners
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="px-6 py-2 bg-accent text-accent-foreground uppercase hover:bg-accent/90 transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container mx-auto px-6 py-6 space-y-4">
            <Link to="/otic-vision" className="block py-2 text-foreground font-body">Otic Vision</Link>
            <Link to="/otic-learn" className="block py-2 text-foreground font-body">Otic Learn</Link>
            <Link to="/research" className="block py-2 text-foreground font-body">Research</Link>
            <Link to="/services" className="block py-2 text-foreground font-body">Services</Link>
            <Link to="/industries" className="block py-2 text-foreground font-body">Industries</Link>
            <Link to="/about" className="block py-2 text-foreground font-body">Who We Are</Link>
            <Link to="/partners" className="block py-2 text-foreground font-body">Partners</Link>
            <Link to="/contact" className="block py-2 text-accent font-body font-medium">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
