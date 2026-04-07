import { Truck } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-glass-border">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-primary font-heading font-bold text-sm">
        <Truck className="w-4 h-4" />
        Mudanza Fácil Barcelona
      </div>
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default Footer;
