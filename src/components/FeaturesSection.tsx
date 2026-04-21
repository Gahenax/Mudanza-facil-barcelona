import { useLanguage } from "@/context/LanguageContext";
import { Route, Package, Radar } from "lucide-react";

const FeaturesSection = () => {
  const { lang, t } = useLanguage();
  const f = t.features[lang];

  const features = [
    { icon: Route, title: f.f1, desc: f.f1d },
    { icon: Package, title: f.f2, desc: f.f2d },
    { icon: Radar, title: f.f3, desc: f.f3d },
  ];

  return (
    <section id="features" className="py-24 relative bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-black text-3xl md:text-5xl text-center mb-16 tracking-tight uppercase">
          {f.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <div
              key={i}
              className="cursor-pointer p-10 rounded-3xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner">
                <feat.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground uppercase tracking-tight">{feat.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed font-medium">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
