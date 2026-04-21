import React, { createContext, useContext, useState, useEffect } from "react";

type Lang = "es" | "cat";

// ✅ Fuente única de verdad para datos de contacto
export const contactInfo = {
  phone: "677389365",
  phoneFormatted: "677 389 365",
  whatsappId: "34677389365",
  whatsappUrl: "https://wa.me/34677389365",
  email: "mudanzasfacil@gmail.com",
  instagram: "mudanzasfacilbcn",
};

export const translations = {
  nav: {
    es: { services: "Servicios", calculator: "Cotizador", contact: "Contacto" },
    cat: { services: "Serveis", calculator: "Cotitzador", contact: "Contacte" },
  },
  hero: {
    es: {
      title: "Mudamos tu mundo con exactitud profesional",
      subtitle: "Logística de mudanzas premium en Barcelona. Tecnología, cuidado y eficiencia en cada bulto.",
      cta: "Quiero Cotizar",
      price: "Desde 89,99€",
      minPriceLabel: "Precio mínimo",
    },
    cat: {
      title: "Mudem el teu món amb exactitud professional",
      subtitle: "Logística de mudances premium a Barcelona. Tecnologia, cura i eficiència a cada bulto.",
      cta: "Vull Cotitzar",
      price: "Des de 89,99€",
      minPriceLabel: "Preu mínim",
    },
  },
  trust: {
    es: {
      insurance: "Seguro a Todo Riesgo",
      fleet: "Flota Propia",
      certified: "Personal Certificado",
    },
    cat: {
      insurance: "Assegurança a Tot Risc",
      fleet: "Flota Pròpia",
      certified: "Personal Certificat",
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
      f1: "Exactitud Profesional",
      f1d: "Planificación milimétrica de cada ruta y recurso.",
      f2: "Embalaje Premium",
      f2d: "Materiales de alta gama para proteger lo que más importa.",
      f3: "Seguimiento en Tiempo Real",
      f3d: "Monitorea tu mudanza desde cualquier dispositivo.",
    },
    cat: {
      title: "Per què escollir-nos?",
      f1: "Exactitud Professional",
      f1d: "Planificació mil·limètrica de cada ruta i recurs.",
      f2: "Embalatge Premium",
      f2d: "Materials d'alta gamma per protegir el que més importa.",
      f3: "Seguiment en Temps Real",
      f3d: "Monitoritza la teva mudança des de qualsevol dispositiu.",
    },
  },
  quality: {
    es: {
      title: "Nuestra Calidad en Acción",
      subtitle: "Materiales y procesos diseñados para la máxima protección de tus pertenencias.",
      team: "Equipo Experto",
      teamD: "Personal uniformado and certificado con años de experiencia.",
      fleet: "Furgonetas premium",
      fleetD: "Vehículos modernos, limpios y totalmente equipados.",
      packing: "Embalaje Premium",
      packingD: "Protección multicapa para objetos delicados y de valor.",
      protection: "Seguridad Garantizada",
      protectionD: "Protocolos de estiba y protección de muebles premium.",
    },
    cat: {
      title: "La Nostra Qualitat en Acció",
      subtitle: "Materials i processos dissenyats per a la màxima protecció de les teves pertinences.",
      team: "Equip Expert",
      teamD: "Personal uniformat i certificat amb anys d'experiència.",
      fleet: "Furgonetes premium",
      fleetD: "Vehicles moderns, nets i totalment equipats.",
      packing: "Embalatge Premium",
      packingD: "Protecció multicapa per a objectes delicats i de valor.",
      protection: "Seguretat Garantida",
      protectionD: "Protocols d'estiba i protecció de mobles premium.",
    },
  },
  pricing: {
    es: {
      title: "Planes de Mudanza Premium",
      subtitle: "Elige el plan que mejor se adapte a tus necesidades. Precios orientativos sujetos a valoración final.",
      from: "A partir de",
      cta: "Solicita info",
      plans: [
        {
          name: "Mudanza básica",
          price: "390 €",
          desc: "Traslado básico de por ejemplo habitación en la misma ciudad.",
        },
        {
          name: "Mudanza estándar",
          price: "890 €",
          desc: "Mudanza de un piso dos habitaciones. Montaje básico. Cajas preparadas por el cliente.",
        },
        {
          name: "Mudanza estándar Plus",
          price: "1.090 €",
          desc: "Mudanza estándar piso 3 o más habitaciones. Desmontaje y montaje estándar. Las cajas deberán estar preparadas por ti.",
        },
        {
          name: "Mudanza completa",
          price: "1.290 €",
          desc: "Traslado completo de vivienda tres o más habitaciones. Con desmontaje - montaje del mobiliario.",
        },
        {
          name: "Mudanza VIP",
          price: "1.490 €",
          desc: "Mudanza vivienda tres o más habitaciones con desmontaje y posterior montaje del mobiliario. Te llevamos el material necesario antes.",
        },
        {
          name: "Mudanza Total VIP",
          price: "1.890 €",
          desc: "Nosotros hacemos el embalaje de tus enseres. Nos encargamos de todo. Desmontaje y montaje completo.",
        },
      ]
    },
    cat: {
      title: "Plans de Mudança Premium",
      subtitle: "Tria el pla que millor s'adapti a les teves necessitats. Preus orientatius subjectes a valoració final.",
      from: "A partir de",
      cta: "Sol·licita info",
      plans: [
        {
          name: "Mudança bàsica",
          price: "390 €",
          desc: "Trasllat bàsic de per exemple habitació a la mateixa ciutat.",
        },
        {
          name: "Mudança estàndard",
          price: "890 €",
          desc: "Mudança d'un pis dues habitacions. Muntatge bàsic. Caixes preparades pel client.",
        },
        {
          name: "Mudança estàndard Plus",
          price: "1.090 €",
          desc: "Mudança estàndard pis 3 o més habitacions. Desmuntatge i muntatge estàndard. Les caixes hauran d'estar preparades per tu.",
        },
        {
          name: "Mudança completa",
          price: "1.290 €",
          desc: "Trasllat complet d'habitatge tres o més habitacions. Amb desmuntatge - muntatge del mobiliari.",
        },
        {
          name: "Mudança VIP",
          price: "1.490 €",
          desc: "Mudança habitatge tres o més habitacions amb desmuntatge i posterior muntatge del mobiliari. Et portem el material necessari abans.",
        },
        {
          name: "Mudança Total VIP",
          price: "1.890 €",
          desc: "Nosaltres fem l'embalatge dels teus estris. Ens encarreguem de tot. Desmuntatge i muntatge complet.",
        },
      ]
    }
  }
} as const;

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      return (localStorage.getItem("mudanza_lang") as Lang) || "es";
    } catch {
      return "es"; // Fallback si localStorage está bloqueado
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("mudanza_lang", lang);
    } catch {
      // Silencio si no está disponible
    }
  }, [lang]);

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
