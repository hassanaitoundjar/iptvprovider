/**
 * Payment links configuration for IPTV Smarters Pro
 * Centralized payment links for easy management
 */

// Contact information
const contact = {
  whatsappNumber: '+12393411655', // Replace with your actual phone number (country code + number)

  // Helper function to generate WhatsApp message link
  getWhatsappMessageUrl: (message: string) => {
    return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
};

// Payment links
const paymentLinks = {
  // Monthly plan payment link
  monthPrice: '18.95',
  monthly: contact.getWhatsappMessageUrl('Hello, I want to subscribe'),

  // 6-month plan payment link
  sixMonthsPrice: '39.95',
  sixMonths: contact.getWhatsappMessageUrl('Hello, I want to subscribe'),

  // 12-month plan payment link
  oneYearPrice: '59.95',
  annual: contact.getWhatsappMessageUrl('Hello, I want to subscribe'),

  // 3-month plan payment link
  threeMonthsPrice: '30',
  threeMonths: contact.getWhatsappMessageUrl('Hello, I want to subscribe'),

  // PayPal.me payment link
  paypalMe: 'https://paypal.me/laraserv',
};

// Usage examples:
// 1. Use contact.whatsappUrl for basic WhatsApp link
// 2. Use contact.getWhatsappMessageUrl("Hello, I want to subscribe") for pre-filled message
// 3. Use in plan URL: `${paymentLinks.monthly}?contact=${contact.whatsappNumber}`

export default paymentLinks;
export { paymentLinks, contact };