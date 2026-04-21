import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('dark'); // Only supporting dark mode per requirements

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, [theme]);

  const toggleTheme = () => {
    // Kept for signature requirement, but forced dark
    setTheme('dark');
  };

  return { theme, toggleTheme };
};
