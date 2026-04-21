import { ArrowRight, Truck, ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const { lang, t } = useLanguage();
  const h = t.hero[lang];

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      {/* Visual Element: Image on the right or as a subtle background */}
      <div className="absolute right-0 top-0 w-full h-full lg:w-1/2 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 hidden lg:block"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
        <img 
          src="/hero-official.jpg" 
          alt="Official Mudanza Fácil Barcelona" 
          className="w-full h-full object-cover object-center opacity-80 lg:opacity-100 transition-opacity duration-1000" 
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          
          <h1 className="text-5xl md:text-8xl font-heading font-black text-foreground uppercase tracking-tighter leading-[0.85] mb-8 animate-slide-up">
            {h.title.split('profesional')[0]}
            <span className="text-primary">profesional</span>
          </h1>
          

          
          <div className="flex flex-col sm:flex-row gap-6 animate-slide-up delay-200">
            <Button variant="cta" size="lg" className="h-16 px-10 rounded-xl text-lg font-black bg-primary text-white hover:bg-black transition-all hover:scale-105 flex items-center gap-3 uppercase tracking-tight shadow-xl shadow-primary/20" asChild>
              <a href="#tarifas">
                {h.cta}
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
            </Button>
            <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md border border-gray-100 px-8 py-5 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Truck className="text-primary w-6 h-6" />
              </div>
              <div>
                <p className="text-foreground font-black text-lg uppercase leading-none tracking-tight">677 389 365</p>
                <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest mt-1">SOPORTE 24/7</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-fade-in delay-500 hidden lg:flex">
          <span className="text-[10px] font-black tracking-[0.3em] text-muted-foreground uppercase">Explorar</span>
          <ArrowDown className="w-4 h-4 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
