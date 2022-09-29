import { createContext, ReactNode, useMemo, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { DEFAULT_THEME, Theme } from './themes';

export interface ThemeProviderProps {
  children: ReactNode;
}

const Context = createContext<
  { setTheme: (theme: Theme) => void; theme: Theme } | undefined
>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <Context.Provider value={value}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </Context.Provider>
  );
};
