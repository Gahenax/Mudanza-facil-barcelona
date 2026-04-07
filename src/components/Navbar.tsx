import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Truck, Menu, X } from "lucide-react";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const nav = t.nav[lang];
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-glass-border" aria-label="Main navigation">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-primary font-heading font-bold text-lg">
          <Truck className="w-6 h-6" />
          <span>Mudanza Fácil</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">{nav.services}</a>
          <a href="#calculator" className="text-sm text-muted-foreground hover:text-primary transition-colors">{nav.calculator}</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">{nav.contact}</a>
          <div className="flex items-center gap-1 ml-4 glass rounded-full px-1 py-0.5">
            <button
              onClick={() => setLang("es")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${lang === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="Cambiar a Castellano"
            >
              ES
            </button>
            <button
              onClick={() => setLang("cat")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${lang === "cat" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="Canviar a Català"
            >
              CAT
            </button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-glass-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#features" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-primary">{nav.services}</a>
            <a href="#calculator" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-primary">{nav.calculator}</a>
            <a href="#contact" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-primary">{nav.contact}</a>
            <div className="flex gap-2">
              <button onClick={() => { setLang("es"); setOpen(false); }} className={`px-3 py-1 rounded-full text-xs font-medium ${lang === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>ES</button>
              <button onClick={() => { setLang("cat"); setOpen(false); }} className={`px-3 py-1 rounded-full text-xs font-medium ${lang === "cat" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>CAT</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
