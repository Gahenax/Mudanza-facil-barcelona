import { useLanguage } from "@/context/LanguageContext";

const VisualQualitySection = () => {
  const { t, lang } = useLanguage();
  const q = t.quality[lang];

  const items = [
    {
      title: q.team,
      description: q.teamD,
      image: "/movers-action.png",
    },
    {
      title: q.fleet,
      description: q.fleetD,
      image: "/fleet-premium.png",
    },
    {
      title: q.packing,
      description: q.packingD,
      image: "/packing-detail.png",
    },
    {
      title: q.protection,
      description: q.protectionD,
      image: "/protection-process.png",
    },
  ];

  return (
    <section className="py-24 bg-white" id="calidad">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground uppercase tracking-tighter mb-4">
            {q.title}
          </h2>
          <p className="text-gray-500 font-medium text-lg leading-relaxed">
            {q.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[16/10] shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-heading font-black text-2xl uppercase tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm font-medium max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualQualitySection;
