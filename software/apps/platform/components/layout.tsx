import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { Logo } from './logo';

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
        <div className="flex items-center">
          <Logo />
          <span className="ml-3 subtitle-1 hidden md:block">GreenOn</span>
        </div>
        <div className="flex">
          <Link className="subtitle-2 text-black-100" href="/articles">
            Articles
          </Link>
          <Link className="subtitle-2 text-black-100" href="/articles">
            Waiting room
          </Link>
          <Link className="subtitle-2 text-black-100" href="/articles">
            Courses
          </Link>
          <Link className="subtitle-2 text-black-100" href="/articles">
            Webinars
          </Link>
          <div className="h-[24px] w-[2px] bg-gray-300 mx-7" />
          <Link className="subtitle-2 text-black-100" href="/articles">
            Sandbox
          </Link>
        </div>
      </header>
      <div className="flex">
        {expanded && (
          <aside className="bg-white-900 w-[300px] bg-white-100 shrink-0 lg:relative bottom-0 top-0 fixed border-r border-r-gray-200">
            <div className="sticky top-0 left-0 bottom-0 right-0 py-5 px-6">
              a
            </div>
          </aside>
        )}
        <main className="w-[100%] py-7 px-7 bg-gray-300">{children}</main>
      </div>
    </div>
  );
}

export { Layout };

export type { LayoutProps };
