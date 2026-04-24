import emailjs from '@emailjs/browser';

/**
 * Sends an email using EmailJS Browser SDK
 * @param {Object} templateParams - The dynamic variables for the email template
 * @returns {Promise} - The EmailJS send promise
 */
export const sendEmail = async (templateParams) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS credentials missing in environment variables.');
  }

  return emailjs.send(serviceId, templateId, templateParams, publicKey);
};
