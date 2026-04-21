// Mock analytics tracking
export const trackEvent = (eventName, data = {}) => {
  console.log(`[Analytics Tracked] Event: ${eventName}`, data);
};

export const trackPageView = (pageName) => {
  console.log(`[Analytics PageView] Page: ${pageName}`);
};
