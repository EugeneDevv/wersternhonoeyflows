const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-2xl font-bold text-background tracking-wide">
              Western <span className="text-primary">Apiaries</span>
            </p>
            <p className="font-body text-sm text-background/50 mt-1">
              Sustainable beekeeping from Western Kenya
            </p>
          </div>
          <div className="flex items-center gap-8">
            {["Products", "Services", "Equipment", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body text-sm text-background/50 hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="font-body text-xs text-background/40">
            © 2020 Western Apiaries <strong>|</strong> Developed by{" "}
            <a
              href="https://eugenedevv.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              eugeneDevv
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
