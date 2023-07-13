import { createContext, useContext, useState } from "react";

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextType {
  theme: Theme,
  toggle: () => void,
  setLight: () => void,
  setDark: () => void,
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);

  const toggle = () => {
    if (theme === Theme.DARK) {
      setTheme(Theme.LIGHT);
      // document.classList.add('')
    } else {
      setTheme(Theme.DARK);
    }
  }

  const setLight = () => setTheme(Theme.LIGHT);
  const setDark = () => setTheme(Theme.DARK);

  return { theme, toggle, setLight, setDark }

}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Component should be placed inside ThemeProvider');
  }
  return context;
}

type ThemeProviderProps = {
  children: React.ReactNode;
}

// render(<ThemeProvider><ThemeSwitcher /></ThemeProvider>)
// render(<AuthContext.Provider value={{
//     isLogged,
//     setIsLogged
//   }}>
//   <AuthCredentials />
// </ThemeProvider>)

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme, toggle, setLight, setDark } = useTheme();
  return (
    <ThemeContext.Provider value={{
      theme, toggle, setLight, setDark
    }}>
      {children}
    </ThemeContext.Provider>
  );
}