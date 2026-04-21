import { Truck, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="py-16 border-t border-gray-100 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-foreground font-heading font-black text-xl uppercase tracking-tighter">
            <span className="text-primary">Mudanza Fácil</span> Barcelona
          </div>
          <p className="text-gray-400 text-sm max-w-xs font-medium">Logística premium y mudanzas residenciales con exactitud profesional en toda Barcelona.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full md:w-auto">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">Contacto</span>
            <a href="tel:677389365" className="flex items-center gap-2 text-base font-black text-gray-700 hover:text-accent transition-colors">
              <Phone className="w-5 h-5" /> 677 389 365
            </a>
            <a href="mailto:mudanzasfacil@gmail.com" className="flex items-center gap-2 text-base font-bold text-gray-600 hover:text-accent transition-colors">
              <Mail className="w-5 h-5" /> Email
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">Social</span>
            <a href="https://instagram.com/mudanzasfacilbcn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-accent transition-colors">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">© {new Date().getFullYear()} GAHENAX AI SOLUTIONS</p>
        <div className="flex gap-6">
          <span className="text-[10px] font-bold text-gray-300 uppercase underline decoration-accent/30 underline-offset-4">Privacy</span>
          <span className="text-[10px] font-bold text-gray-300 uppercase underline decoration-accent/30 underline-offset-4">Terms</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
