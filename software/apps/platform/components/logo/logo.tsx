import { LogoSvg } from './logo-svg';

function Logo() {
  return (
    <div className="flex items-center">
      <LogoSvg />
      <span className="ml-3 subtitle-1 hidden md:block">GreenOn</span>
    </div>
  );
}

export { Logo };
