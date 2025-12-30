import { useState, useEffect } from 'react';
import logo from '@/assets/logo.jpeg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : ''
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 animate-slide-in-left">
          <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center">
            <img src={logo} alt="Otic Group Logo" className="w-8 h-8 object-contain" />
          </div>
          <span className="font-body font-bold tracking-wide text-sm uppercase text-[hsl(220,60%,20%)]">
            Otic Group
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wide font-body">
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors uppercase"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-foreground transition-colors uppercase"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
