// Google Analytics tracking functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Track form submissions
export const trackFormSubmission = (formType: string, formData: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: formType,
      custom_parameters: {
        form_type: formType,
        subject: formData.subject || 'not_specified',
        academic_level: formData.academic_level || 'not_specified',
        deadline: formData.deadline || 'not_specified'
      }
    });
  }
};

// Track quote requests (main conversion)
export const trackQuoteRequest = (formData: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Track as conversion
    window.gtag('event', 'conversion', {
      send_to: 'AW-17468973880/quote_request',
      event_category: 'conversion',
      event_label: 'quote_request',
      value: 1,
      currency: 'USD'
    });

    // Track form submission details
    trackFormSubmission('quote_form', formData);
  }
};

// Track contact form submissions
export const trackContactSubmission = (formData: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17468973880/contact_form',
      event_category: 'conversion',
      event_label: 'contact_form',
      value: 0.5,
      currency: 'USD'
    });

    trackFormSubmission('contact_form', formData);
  }
};

// Track WhatsApp clicks
export const trackWhatsAppClick = (source: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: source,
      custom_parameters: {
        click_source: source
      }
    });
  }
};

// Track phone calls
export const trackPhoneCall = (source: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_call', {
      event_category: 'engagement',
      event_label: source,
      custom_parameters: {
        click_source: source
      }
    });
  }
};

// Track page views for thank you pages
export const trackThankYouPageView = (pageType: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: `Thank You - ${pageType}`,
      page_location: window.location.href,
      custom_parameters: {
        page_type: 'thank_you',
        conversion_type: pageType
      }
    });
  }
};

// Track service interest
export const trackServiceInterest = (serviceName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'service_interest', {
      event_category: 'engagement',
      event_label: serviceName,
      custom_parameters: {
        service_name: serviceName
      }
    });
  }
};