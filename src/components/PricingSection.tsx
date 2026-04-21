import { Check, MessageCircle } from "lucide-react";
import { useLanguage, contactInfo } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const { lang, t } = useLanguage();
  const p = t.pricing[lang];

  return (
    <section className="py-24 bg-gray-50/50" id="tarifas">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground uppercase tracking-tighter mb-4">
            {p.title}
          </h2>
          <p className="text-muted-foreground font-medium text-lg leading-relaxed">
            {p.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {p.plans.map((plan, index) => {
            const whatsappUrl = `https://wa.me/${contactInfo.whatsappId}?text=${encodeURIComponent(
              `Hola! Me interesa el plan "${plan.name}" (a partir de ${plan.price}). ¿Podéis darme más información?`
            )}`;

            return (
              <div 
                key={index} 
                className="group relative bg-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
              >
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-xl font-heading font-black uppercase tracking-tight text-foreground mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">
                      {p.from}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black text-foreground tracking-tighter">
                        {plan.price.split(' ')[0]}
                      </span>
                      <span className="text-2xl font-black text-foreground tracking-tighter">
                        {plan.price.split(' ')[1]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="flex-grow mb-10">
                  <div className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary stroke-[3px]" />
                    </div>
                    <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                      {plan.desc}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  variant="cta" 
                  className="w-full h-14 rounded-2xl font-bold bg-white text-foreground border-2 border-primary hover:bg-primary hover:text-white transition-all group-hover:scale-[1.02]"
                  asChild
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {p.cta}
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
