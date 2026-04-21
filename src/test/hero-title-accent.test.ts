/**
 * @file hero-title-accent.test.ts
 * @description Fortress Check — superpowers-debugging-pro
 *
 * Previene la regresión del bug: "split hardcodeado que no funciona en otros idiomas"
 *
 * ORIGINAL TRIGGER IDENTIFICADO:
 * HeroSection.tsx usaba split('profesional') asumiendo invarianza lingüística.
 * La traducción CAT usa 'professional' (con doble L), rompiendo el split silenciosamente.
 *
 * CONTRATO QUE ESTE TEST GARANTIZA:
 * - Cada idioma tiene 'titleAccent' definido en translations
 * - El título CONTIENE la palabra accent (el split funcionará)
 * - El split produce exactamente 2 partes (texto antes + texto después)
 *
 * Si alguien agrega un nuevo idioma sin 'titleAccent' → este test falla inmediatamente.
 * Si alguien cambia el título y olvida actualizar titleAccent → este test falla.
 */

import { describe, it, expect } from "vitest";
import { translations } from "@/context/LanguageContext";

describe("🏰 Fortress: HeroSection Title Accent Contract", () => {
  const langs = Object.keys(translations.hero) as Array<keyof typeof translations.hero>;

  langs.forEach((lang) => {
    describe(`[${lang}]`, () => {
      it("titleAccent debe estar definido en translations.hero", () => {
        expect(translations.hero[lang]).toHaveProperty("titleAccent");
        expect((translations.hero[lang] as { titleAccent?: string }).titleAccent).toBeTruthy();
      });

      it("title debe CONTENER titleAccent (el split debe funcionar)", () => {
        const hero = translations.hero[lang] as { title: string; titleAccent: string };
        expect(hero.title.toLowerCase()).toContain(hero.titleAccent.toLowerCase());
      });

      it("split por titleAccent produce exactamente 2 partes", () => {
        const hero = translations.hero[lang] as { title: string; titleAccent: string };
        const parts = hero.title.split(hero.titleAccent);
        expect(parts).toHaveLength(2);
      });

      it("la parte antes del accent no está vacía", () => {
        const hero = translations.hero[lang] as { title: string; titleAccent: string };
        const [before] = hero.title.split(hero.titleAccent);
        expect(before.trim().length).toBeGreaterThan(0);
      });
    });
  });
});
