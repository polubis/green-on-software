import { Theme } from './themes';

export const getThemeProp =
  (key: keyof Theme) =>
  ({ theme }: { theme: Theme }) =>
    theme[key];
