import { ReactNode, useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className="flex-col min-h-screen grid grid-rows-[72px_1fr]"
      onClick={() => setExpanded((prev) => !prev)}
    >
      <header className="flex items-center h-18 px-6 bg-white-100 border-b border-b-gray-200">
        a
      </header>
      <div className="flex">
        {expanded && (
          <aside className="bg-white-900 w-[300px] bg-white-100 shrink-0 py-5 px-6"></aside>
        )}
        <main className="w-[100%] py-10 px-7 bg-gray-300">{children}</main>
      </div>
    </div>
  );
}

export { Layout };

export type { LayoutProps };
