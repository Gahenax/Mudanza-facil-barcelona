import React, { createContext, useContext, useState } from "react";

type Lang = "es" | "cat";

const translations = {
  nav: {
    es: { services: "Servicios", calculator: "Cotizador", contact: "Contacto" },
    cat: { services: "Serveis", calculator: "Cotitzador", contact: "Contacte" },
  },
  hero: {
    es: {
      title: "Mudamos tu mundo con precisión quirúrgica",
      subtitle: "Logística de mudanzas premium en Barcelona. Tecnología, cuidado y eficiencia en cada caja.",
      cta: "Quiero Cotizar",
    },
    cat: {
      title: "Mudem el teu món amb precisió quirúrgica",
      subtitle: "Logística de mudances premium a Barcelona. Tecnologia, cura i eficiència a cada caixa.",
      cta: "Vull Cotitzar",
    },
  },
  stepper: {
    es: {
      title: "Configura tu mudanza",
      step1: "Tipo de vivienda",
      step2: "Ruta Logística",
      step3: "Complejidad",
      flat: "Piso",
      house: "Casa",
      commercial: "Local",
      local: "Barcelona Local",
      national: "Nacional",
      european: "Europea",
      stairs: "Escaleras",
      elevator: "Ascensor",
      premium: "Embalaje Premium",
      next: "Siguiente",
      prev: "Anterior",
      result: "Configuración logística completa. Tu servicio está listo para ser cotizado.",
      whatsapp: "Solicitar cotización por WhatsApp",
    },
    cat: {
      title: "Configura la teva mudança",
      step1: "Tipus d'habitatge",
      step2: "Ruta Logística",
      step3: "Complexitat",
      flat: "Pis",
      house: "Casa",
      commercial: "Local",
      local: "Barcelona Local",
      national: "Nacional",
      european: "Europea",
      stairs: "Escales",
      elevator: "Ascensor",
      premium: "Embalatge Premium",
      next: "Següent",
      prev: "Anterior",
      result: "Configuració logística completa. El teu servei està llest per a ser cotitzat.",
      whatsapp: "Solicitar cotització per WhatsApp",
    },
  },
  features: {
    es: {
      title: "¿Por qué elegirnos?",
      f1: "Precisión Logística",
      f1d: "Planificación milimétrica de cada ruta y recurso.",
      f2: "Embalaje Premium",
      f2d: "Materiales de alta gama para proteger lo que más importa.",
      f3: "Seguimiento en Tiempo Real",
      f3d: "Monitoriza tu mudanza desde cualquier dispositivo.",
    },
    cat: {
      title: "Per què escollir-nos?",
      f1: "Precisió Logística",
      f1d: "Planificació mil·limètrica de cada ruta i recurs.",
      f2: "Embalatge Premium",
      f2d: "Materials d'alta gamma per protegir el que més importa.",
      f3: "Seguiment en Temps Real",
      f3d: "Monitoritza la teva mudança des de qualsevol dispositiu.",
    },
  },
} as const;

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("es");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
