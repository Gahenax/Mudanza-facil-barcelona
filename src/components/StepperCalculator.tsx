import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Building2, Home, Store, MapPin, Globe, Map, Footprints, ArrowUpFromDot, PackageCheck, MessageCircle, ChevronRight, ChevronLeft, Check } from "lucide-react";

type Selection = {
  housing: string | null;
  route: string | null;
  complexity: string[];
};

const StepperCalculator = () => {
  const { lang, t } = useLanguage();
  const s = t.stepper[lang];
  const [step, setStep] = useState(0);
  const [selection, setSelection] = useState<Selection>({ housing: null, route: null, complexity: [] });
  const [completed, setCompleted] = useState(false);

  const steps = [s.step1, s.step2, s.step3];
  const progress = completed ? 100 : ((step + 1) / steps.length) * 100;

  const housingOptions = [
    { key: "flat", label: s.flat, icon: Building2 },
    { key: "house", label: s.house, icon: Home },
    { key: "commercial", label: s.commercial, icon: Store },
  ];

  const routeOptions = [
    { key: "local", label: s.local, icon: MapPin },
    { key: "national", label: s.national, icon: Map },
    { key: "european", label: s.european, icon: Globe },
  ];

  const complexityOptions = [
    { key: "stairs", label: s.stairs, icon: Footprints },
    { key: "elevator", label: s.elevator, icon: ArrowUpFromDot },
    { key: "premium", label: s.premium, icon: PackageCheck },
  ];

  const toggleComplexity = (key: string) => {
    setSelection(prev => ({
      ...prev,
      complexity: prev.complexity.includes(key)
        ? prev.complexity.filter(k => k !== key)
        : [...prev.complexity, key],
    }));
  };

  const canNext = step === 0 ? !!selection.housing : step === 1 ? !!selection.route : selection.complexity.length > 0;

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
    else setCompleted(true);
  };

  const whatsappUrl = `https://wa.me/34600000000?text=${encodeURIComponent(
    `Hola! Quiero cotizar una mudanza: ${selection.housing}, ${selection.route}, ${selection.complexity.join(", ")}`
  )}`;

  return (
    <section id="calculator" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">{s.title}</h2>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {steps.map((label, i) => (
              <span key={i} className={`text-xs font-medium transition-colors ${i <= step || completed ? "text-primary" : "text-muted-foreground"}`}>
                {label}
              </span>
            ))}
          </div>
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="glass p-8 rounded-xl">
          {!completed ? (
            <>
              {/* Step content */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {step === 0 && housingOptions.map(opt => (
                  <button
                    key={opt.key}
                    onClick={() => setSelection(p => ({ ...p, housing: opt.key }))}
                    className={`glass-hover p-6 rounded-xl flex flex-col items-center gap-3 transition-all ${selection.housing === opt.key ? "border-primary glow-primary" : ""}`}
                    aria-label={opt.label}
                  >
                    <opt.icon className={`w-8 h-8 ${selection.housing === opt.key ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="text-sm font-medium">{opt.label}</span>
                  </button>
                ))}
                {step === 1 && routeOptions.map(opt => (
                  <button
                    key={opt.key}
                    onClick={() => setSelection(p => ({ ...p, route: opt.key }))}
                    className={`glass-hover p-6 rounded-xl flex flex-col items-center gap-3 transition-all ${selection.route === opt.key ? "border-primary glow-primary" : ""}`}
                    aria-label={opt.label}
                  >
                    <opt.icon className={`w-8 h-8 ${selection.route === opt.key ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="text-sm font-medium">{opt.label}</span>
                  </button>
                ))}
                {step === 2 && complexityOptions.map(opt => (
                  <button
                    key={opt.key}
                    onClick={() => toggleComplexity(opt.key)}
                    className={`glass-hover p-6 rounded-xl flex flex-col items-center gap-3 transition-all ${selection.complexity.includes(opt.key) ? "border-primary glow-primary" : ""}`}
                    aria-label={opt.label}
                  >
                    <opt.icon className={`w-8 h-8 ${selection.complexity.includes(opt.key) ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="text-sm font-medium">{opt.label}</span>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between">
                <Button
                  variant="ghost"
                  onClick={() => setStep(step - 1)}
                  disabled={step === 0}
                  className="text-muted-foreground"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" /> {s.prev}
                </Button>
                <Button
                  variant="default"
                  onClick={handleNext}
                  disabled={!canNext}
                >
                  {step === 2 ? <><Check className="w-4 h-4 mr-1" /> {s.next}</> : <>{s.next} <ChevronRight className="w-4 h-4 ml-1" /></>}
                </Button>
              </div>
            </>
          ) : (
            /* Result card */
            <div className="text-center animate-fade-in" id="contact">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 glow-primary">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <p className="text-lg font-heading font-semibold mb-8">{s.result}</p>
              <Button variant="cta" size="lg" asChild className="glow-cta">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  {s.whatsapp}
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StepperCalculator;
