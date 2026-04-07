import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowDown, Truck } from "lucide-react";

const HeroSection = () => {
  const { lang, t } = useLanguage();
  const hero = t.hero[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 radial-gradient-bg" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Abstract truck graphic */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-glass-border flex items-center justify-center animate-float">
              <Truck className="w-12 h-12 text-primary" />
            </div>
            {/* Speed blur lines */}
            <div className="absolute top-1/2 -left-16 -translate-y-1/2 flex flex-col gap-2">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary/50 rounded-full" />
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary/30 rounded-full" />
              <div className="w-10 h-0.5 bg-gradient-to-r from-transparent to-primary/40 rounded-full" />
            </div>
          </div>
        </div>

        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight mb-6 animate-fade-in">
          {hero.title}
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {hero.subtitle}
        </p>

        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button variant="cta" size="lg" asChild>
            <a href="#calculator" className="text-base font-semibold">
              {hero.cta}
            </a>
          </Button>
        </div>

        <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a href="#features" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm" aria-label="Scroll down">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
