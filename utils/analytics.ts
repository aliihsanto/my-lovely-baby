
/**
 * GOOGLE ADS & ANALYTICS CONFIGURATION
 * 
 * Instructions:
 * 1. Replace the placeholder values below with your actual IDs from Google Ads/Analytics.
 * 2. This file handles the firing of events.
 */

// Your Google Ads Account ID (e.g., AW-123456789)
export const GADS_ACCOUNT_ID = 'AW-XXXXXXXXX';

// Event Conversion Labels (Find these in Google Ads > Goals > Conversions)
export const GADS_WHATSAPP_LABEL = 'AbC_CoNvErSiOnLaBeL'; // Replace with "Click WhatsApp" label
export const GADS_FORM_SUBMIT_LABEL = 'XyZ_CoNvErSiOnLaBeL'; // Replace with "Submit Lead Form" label

// Global type definition for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Generic Event Tracker
export const trackEvent = (action: string, category: string, label: string, value?: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } else {
    console.log(`[Analytics Dev Mode] Event: ${action}, Category: ${category}, Label: ${label}`);
  }
};

// 1. Track WhatsApp Click Conversion
export const trackWhatsAppClick = () => {
  if (typeof window.gtag !== 'undefined') {
    // Standard GA4 event
    window.gtag('event', 'click', {
      event_category: 'Contact',
      event_label: 'WhatsApp Button',
    });
    
    // Google Ads Conversion Event
    if (GADS_ACCOUNT_ID && GADS_WHATSAPP_LABEL) {
      window.gtag('event', 'conversion', {
        'send_to': `${GADS_ACCOUNT_ID}/${GADS_WHATSAPP_LABEL}`
      });
    }
  } else {
    console.log('[Analytics Dev Mode] WhatsApp Click Conversion Triggered');
  }
};

// 2. Track Form Submission Conversion
export const trackFormSubmit = () => {
  if (typeof window.gtag !== 'undefined') {
    // Standard GA4 event
    window.gtag('event', 'form_submit', {
      event_category: 'Contact',
      event_label: 'Dealer Application Form',
    });

    // Google Ads Conversion Event
    if (GADS_ACCOUNT_ID && GADS_FORM_SUBMIT_LABEL) {
      window.gtag('event', 'conversion', {
        'send_to': `${GADS_ACCOUNT_ID}/${GADS_FORM_SUBMIT_LABEL}`
      });
    }
  } else {
    console.log('[Analytics Dev Mode] Form Submit Conversion Triggered');
  }
};
