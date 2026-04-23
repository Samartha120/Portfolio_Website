import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const saved = window.localStorage.getItem('theme');
    return saved === 'soft' ? 'soft' : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
    root.classList.toggle('theme-soft', theme === 'soft');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'soft' : 'dark'));
  };

  return { theme, toggleTheme };
};
