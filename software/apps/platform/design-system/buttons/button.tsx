import { ButtonBaseProps } from './defs';
import { getVariantClassName } from './get-variant-class-name';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ButtonProps extends ButtonBaseProps {}

type OwnProps = Pick<ButtonProps, 'variant'>;

const getClassName = ({ variant }: OwnProps): string => {
  const className = `h-10 px-4 border rounded-sm button-text`;

  return `${className} ${getVariantClassName(variant)}`;
};

function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${getClassName({ variant })} ${className}`}
    />
  );
}

export { Button };

export type { ButtonProps };
