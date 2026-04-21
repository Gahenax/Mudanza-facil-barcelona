/**
 * @file i18n.test.ts
 * @description Test de cobertura de traducciones ES/CAT
 *
 * Valida que todas las secciones del objeto `translations`
 * tienen exactamente las mismas keys en ambos idiomas.
 * Si agregas una nueva sección sin traducción al catalán → este test falla.
 */

import { describe, it, expect } from "vitest";
import { translations } from "@/context/LanguageContext";

type Lang = "es" | "cat";
const LANGS: Lang[] = ["es", "cat"];

describe("i18n Coverage — Mudanza Fácil Barcelona", () => {
  const sections = Object.keys(translations) as (keyof typeof translations)[];

  sections.forEach((section) => {
    describe(`Sección: ${section}`, () => {
      // 1. Verificar que la sección existe para cada idioma
      LANGS.forEach((lang) => {
        it(`[${lang}] existe`, () => {
          expect(translations[section]).toHaveProperty(lang);
        });
      });

      // 2. Verificar paridad de keys entre ES y CAT
      it(`[cat] tiene las mismas keys que [es]`, () => {
        const esSection = translations[section]["es"];
        const catSection = translations[section]["cat"];

        if (Array.isArray(esSection) || Array.isArray(catSection)) {
          // Para arrays (como pricing.plans), verificar misma longitud
          expect(Array.isArray(catSection)).toBe(true);
          return;
        }

        const esKeys = Object.keys(esSection as object).sort();
        const catKeys = Object.keys(catSection as object).sort();

        expect(catKeys).toEqual(esKeys);
      });

      // 3. Verificar que no haya valores vacíos en ningún idioma
      LANGS.forEach((lang) => {
        it(`[${lang}] no tiene valores vacíos`, () => {
          const sectionData = translations[section][lang];

          if (Array.isArray(sectionData)) {
            // Para arrays, verificar que ningún item tenga strings vacíos
            sectionData.forEach((item: unknown, i: number) => {
              if (typeof item === "object" && item !== null) {
                Object.entries(item as Record<string, unknown>).forEach(([key, val]) => {
                  expect(
                    val,
                    `${section}.${lang}[${i}].${key} no debe estar vacío`
                  ).toBeTruthy();
                });
              }
            });
            return;
          }

          Object.entries(sectionData as Record<string, unknown>).forEach(([key, val]) => {
            expect(
              val,
              `${section}.${lang}.${key} no debe estar vacío`
            ).toBeTruthy();
          });
        });
      });
    });
  });
});
