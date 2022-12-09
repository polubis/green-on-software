import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function Layout() {
  return (
    <div className="flex-c min-h-screen" style={{ background: 'yellow' }}>
      <header className='flex items-center h-18 px-6' style={{ background: 'red' }}>1</header>
      <div style={{ background: 'blue' }}>2</div>
    </div>
  );
}

export { Layout };

export type { LayoutProps };
