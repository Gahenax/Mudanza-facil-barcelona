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
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-16">{f.title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <div
              key={i}
              className="glass-hover p-8 rounded-xl group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{feat.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
