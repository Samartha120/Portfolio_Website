// Mock EmailJS implementation
export const sendEmail = async (templateParams) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Email sent successfully:', templateParams);
      resolve({ status: 200, text: 'OK' });
    }, 1500);
  });
};
