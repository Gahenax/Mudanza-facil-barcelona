/**
 * @file contact.ts
 * @description Configuración centralizada de contacto — Mudanza Fácil Barcelona
 *
 * ⚠️ FUENTE ÚNICA DE VERDAD para todos los datos de contacto.
 * Para cambiar teléfono, email o Instagram: edita SOLO este archivo.
 * Todos los componentes (Navbar, Hero, Pricing, Footer) importan desde aquí.
 */

export const CONTACT_INFO = {
  /** Número sin prefijo (para links tel:) */
  phone: "677389365",
  /** Número formateado para mostrar en UI */
  phoneFormatted: "677 389 365",
  /** Número con prefijo internacional (para links tel: internacionales) */
  phoneIntl: "+34677389365",
  /** ID de WhatsApp (sin + ni espacios) */
  whatsappId: "34677389365",
  /** URL base de WhatsApp sin mensaje */
  whatsappUrl: "https://wa.me/34677389365",
  /** Email de contacto */
  email: "mudanzasfacil@gmail.com",
  /** Handle de Instagram (sin @) */
  instagram: "mudanzasfacilbcn",
} as const;

/**
 * Genera una URL de WhatsApp con mensaje personalizado.
 *
 * @param message - Texto a enviar por WhatsApp (opcional)
 * @returns URL completa de WhatsApp
 *
 * @example
 * // Sin mensaje — abre WhatsApp sin texto
 * getWhatsAppUrl()
 * // → "https://wa.me/34677389365"
 *
 * @example
 * // Con mensaje predefinido
 * getWhatsAppUrl("Hola, me interesa el plan VIP")
 * // → "https://wa.me/34677389365?text=Hola%2C%20me%20interesa..."
 */
export const getWhatsAppUrl = (message?: string): string => {
  if (!message) return CONTACT_INFO.whatsappUrl;
  return `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
};
