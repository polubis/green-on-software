import type { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export type Variant = 'primary' | 'secondary';

export interface ButtonBaseProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: Variant;
}
