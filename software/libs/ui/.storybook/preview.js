import { ThemeProvider } from '../src/theme/theme.provider';
import { GlobalStyle } from '../src/global-style';

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
