
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return saved ? saved === 'dark' : prefersDark;
  });

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    
    // Apply theme immediately without animation delays
    body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    html.setAttribute('data-theme', isDark ? 'dark' : 'light');
    html.style.colorScheme = isDark ? 'dark' : 'light';
    
    // Store preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update CSS custom properties for better theme switching
    if (isDark) {
      html.style.setProperty('--bg-color', '#0f1419');
      html.style.setProperty('--text-color', '#ffffff');
      html.style.setProperty('--card-bg', '#1a1f2e');
    } else {
      html.style.setProperty('--bg-color', '#ffffff');
      html.style.setProperty('--text-color', '#0f172a');
      html.style.setProperty('--card-bg', '#ffffff');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
