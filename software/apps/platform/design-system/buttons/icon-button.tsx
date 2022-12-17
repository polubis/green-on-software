import type { ButtonBaseProps } from './defs';
import { getVariantClassName } from './get-variant-class-name';
import Icon from '@mdi/react';

interface IconButtonProps extends Omit<ButtonBaseProps, 'children'> {
  rounded?: boolean;
  icon: string;
  iconSize?: number;
}

type OwnProps = Pick<IconButtonProps, 'variant' | 'rounded'>;

const getClassName = ({ variant, rounded }: OwnProps): string => {
  const roundValue = rounded ? 'rounded-full' : 'rounded-sm';
  const className = `w-10 h-10 f border flex justify-center items-center ${roundValue}`;

  return `${className} ${getVariantClassName(variant)}`;
};

function IconButton({
  className,
  variant,
  rounded,
  icon,
  iconSize = 1.1,
  ...props
}: IconButtonProps) {
  return (
    <button
      {...props}
      className={`${getClassName({ variant, rounded })} ${className}`}
    >
      <Icon size={iconSize} path={icon} />
    </button>
  );
}

export { IconButton };

export type { IconButtonProps };
