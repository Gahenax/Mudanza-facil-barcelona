import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Truck, Award } from "lucide-react";

const TrustSection = () => {
  const { lang, t } = useLanguage();
  const trust = t.trust[lang];

  const items = [
    {
      icon: ShieldCheck,
      title: trust.insurance,
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Truck,
      title: trust.fleet,
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Award,
      title: trust.certified,
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4 group transition-all hover:translate-y-[-2px] cursor-default">
              <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center p-3 shadow-sm group-hover:shadow-md transition-all`}>
      <item.icon className="w-6 h-6" />
              </div>
              <span className="font-heading font-bold text-foreground text-sm tracking-tight uppercase">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
