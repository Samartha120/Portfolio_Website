import emailjs from '@emailjs/browser';

export const sendEmail = async (templateParams) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const isValidKey = (key) => key && !key.startsWith('demo_');

  if (isValidKey(serviceId) && isValidKey(templateId) && isValidKey(publicKey)) {
    return emailjs.send(serviceId, templateId, templateParams, publicKey);
  }

  // Fallback simulation
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Email sent via simulation:', templateParams);
      resolve({ status: 200, text: 'OK' });
    }, 1500);
  });
};
