import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import logo from '@/assets/oticlogo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const location = useLocation();
  
  const expertiseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const companyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // apply theme class on root and persist
  const applyTheme = (light: boolean) => {
    const root = document.documentElement;
    if (light) {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', light ? 'light' : 'dark');
  };

  const toggleTheme = () => {
    setIsLight(prev => {
      const next = !prev;
      applyTheme(next);
      return next;
    });
  };

  useEffect(() => {
    // read stored preference or default to dark
    const pref = localStorage.getItem('theme');
    const light = pref === 'light';
    setIsLight(light);
    applyTheme(light);
  }, []);

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

  const handleExpertiseEnter = () => {
    if (expertiseTimeoutRef.current) {
      clearTimeout(expertiseTimeoutRef.current);
    }
    setExpertiseOpen(true);
  };

  const handleExpertiseLeave = () => {
    expertiseTimeoutRef.current = setTimeout(() => {
      setExpertiseOpen(false);
    }, 350);
  };

  const handleCompanyEnter = () => {
    if (companyTimeoutRef.current) {
      clearTimeout(companyTimeoutRef.current);
    }
    setCompanyOpen(true);
  };

  const handleCompanyLeave = () => {
    companyTimeoutRef.current = setTimeout(() => {
      setCompanyOpen(false);
    }, 350);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || mobileMenuOpen 
          ? 'glass-card border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo - no circular boundary, just the logo */}
        <Link to="/" className="flex items-center group">
          <div className="w-24 h-24 md:w-28 md:h-28 overflow-hidden group-hover:scale-105 transition-transform">
            <img src={logo} alt="Otic Group Logo" className="w-full h-full object-contain" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm tracking-wide font-body">
          <Link to="/otic-vision" className="text-muted-foreground light:text-gray-900 hover:text-foreground light:hover:text-black transition-colors uppercase relative group">
            Otic Vision
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-luminous group-hover:w-full transition-all duration-300" />
          </Link>
          <Link to="/otic-learn" className="text-muted-foreground light:text-gray-900 hover:text-foreground light:hover:text-black transition-colors uppercase relative group">
            Otic Learn
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-luminous group-hover:w-full transition-all duration-300" />
          </Link>
          <Link to="/research" className="text-muted-foreground light:text-gray-900 hover:text-foreground light:hover:text-black transition-colors uppercase relative group">
            Research
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-luminous group-hover:w-full transition-all duration-300" />
          </Link>
          
          {/* Expertise Dropdown */}
          <div 
            className="relative" 
            onMouseEnter={handleExpertiseEnter} 
            onMouseLeave={handleExpertiseLeave}
          >
            <button className="flex items-center gap-1 text-muted-foreground light:text-gray-900 hover:text-foreground light:hover:text-black transition-colors uppercase group">
              Expertise <ChevronDown className={`w-3 h-3 transition-transform ${expertiseOpen ? 'rotate-180' : ''}`} />
            </button>
            <div 
              className={`absolute top-full left-0 pt-2 w-48 transition-all duration-300 ${
                expertiseOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
              onMouseEnter={handleExpertiseEnter}
              onMouseLeave={handleExpertiseLeave}
            >
              <div className="glass-card rounded-lg overflow-hidden border border-accent-luminous/10 bg-background/95 light:bg-white/95 backdrop-blur-xl">
                <Link to="/services" className="block px-4 py-3 text-muted-foreground light:text-gray-900 hover:text-foreground light:hover:text-black hover:bg-accent-luminous/10 light:hover:bg-gray-100 transition-colors border-b border-border/30">
                  Services
                </Link>
                <Link to="/industries" className="block px-4 py-3 text-muted-foreground light:text-gray-900 hover:text-foreground light:hover:text-black hover:bg-accent-luminous/10 light:hover:bg-gray-100 transition-colors">
                  Industries
                </Link>
              </div>
            </div>
          </div>

          {/* Company Dropdown */}
          <div 
            className="relative" 
            onMouseEnter={handleCompanyEnter} 
            onMouseLeave={handleCompanyLeave}
          >
            <button className="flex items-center gap-1 text-muted-foreground light:text-gray-900 hover:text-foreground light:hover:text-black transition-colors uppercase group">
              Company <ChevronDown className={`w-3 h-3 transition-transform ${companyOpen ? 'rotate-180' : ''}`} />
            </button>
            <div 
              className={`absolute top-full left-0 pt-2 w-48 transition-all duration-300 ${
                companyOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
              onMouseEnter={handleCompanyEnter}
              onMouseLeave={handleCompanyLeave}
            >
              <div className="glass-card rounded-lg overflow-hidden border border-accent-luminous/10 bg-background/95 light:bg-white/95 backdrop-blur-xl">
                <Link to="/about" className="block px-4 py-3 text-muted-foreground light:text-gray-900 hover:text-foreground light:hover:text-black hover:bg-accent-luminous/10 light:hover:bg-gray-100 transition-colors border-b border-border/30">
                  Who We Are
                </Link>
                <Link to="/partners" className="block px-4 py-3 text-muted-foreground light:text-gray-900 hover:text-foreground light:hover:text-black hover:bg-accent-luminous/10 light:hover:bg-gray-100 transition-colors">
                  Partner with us
                </Link>
              </div>
            </div>
          </div>

          <Link to="/contact" className="btn-glow px-6 py-2.5 rounded-lg text-cta-foreground uppercase font-medium">
            Contact
          </Link>
          {/* theme toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full hover:bg-secondary/50 transition-colors"
            aria-label="Toggle light/dark mode"
          >
            {isLight ? (
              <Moon className="w-5 h-5 text-foreground" />
            ) : (
              <Sun className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-7 h-7 text-foreground" /> : <Menu className="w-7 h-7 text-foreground" />}
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
          <Link to="/partners" className="block py-3 px-4 text-foreground font-body rounded-lg hover:bg-secondary/50 transition-colors">Partner with us</Link>
          <Link to="/contact" className="block py-3 px-4 text-cta font-body font-medium rounded-lg hover:bg-cta/10 transition-colors">Contact</Link>
          {/* mobile theme toggle */}
          <button
            onClick={toggleTheme}
            className="block py-3 px-4 text-foreground font-body rounded-lg hover:bg-secondary/50 transition-colors"
            aria-label="Toggle light/dark mode"
          >
            {isLight ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
