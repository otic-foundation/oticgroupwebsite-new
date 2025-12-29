const Footer = () => {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="container mx-auto px-6 lg:px-12 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-widest text-muted-foreground font-body">
          {/* Locations */}
          <div className="flex items-center gap-2">
            <span>Based in</span>
            <span className="text-foreground font-medium">Nairobi</span>
            <span>/</span>
            <span className="text-foreground font-medium">Lagos</span>
            <span>/</span>
            <span className="text-foreground font-medium">Cape Town</span>
          </div>

          {/* Copyright */}
          <div>
            <span>Otic Group © 2024</span>
          </div>

          {/* Paper number */}
          <div>
            <span>Paper No. 89-22</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
