import type { Variant } from './defs';

export const getVariantClassName = (variant: Variant): string => {
  if (variant === 'primary') {
    return 'text-black-100 border-primary-100 bg-primary-100';
  }

  if (variant === 'secondary') {
    return 'text-black-100 border-gray-200 bg-white-100';
  }

  throw new Error('Unsupported variant');
};
