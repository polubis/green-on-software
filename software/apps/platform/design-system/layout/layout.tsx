import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { IconButton } from '../buttons';
import { mdiMenuOpen, mdiClose } from '@mdi/js';

interface LayoutLink {
  title: string;
  path: string;
}

interface LayoutProps {
  children: ReactNode;
  logo: ReactNode;
  primarySection: ReactNode;
  additionalControls: ReactNode;
  primaryLinks: LayoutLink[];
  secondaryLinks: LayoutLink[];
}

const createLink = (title: string, path: string): LayoutLink => ({
  title,
  path,
});

function Layout({
  children,
  primaryLinks,
  secondaryLinks,
  logo,
  primarySection,
  additionalControls,
}: LayoutProps) {
  const [expanded, setExpanded] = useState(true);

  const toggleSidebar = (): void => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="flex-col min-h-screen grid grid-rows-[72px_1fr]">
      <header className="flex items-center justify-between h-18 px-6 bg-white-100 border-b border-b-gray-200">
        {logo}
        <div className="flex items-center">
          <div>
            {primaryLinks.map((link) => (
              <Link
                key={link.title}
                className="subtitle-2 text-black-100 first:ml-0 ml-6"
                href={link.path}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="h-[24px] w-[2px] bg-gray-300 mx-7" />
          <div className="mr-7">
            {secondaryLinks.map((link) => (
              <Link
                key={link.title}
                className="subtitle-2 text-black-100 first:ml-0 ml-6"
                href={link.path}
              >
                {link.title}
              </Link>
            ))}
          </div>
          {additionalControls}
        </div>
        {primarySection}
      </header>
      <div className="flex">
        {expanded ? (
          <aside className="w-[300px] bg-white-100 shrink-0 lg:relative bottom-0 top-0 fixed border-r border-r-gray-200">
            <div className="py-5 px-6 flex-col">Add here content in future</div>
            <IconButton
              className="fixed left-6 bottom-6"
              variant="secondary"
              rounded
              icon={mdiClose}
              onClick={toggleSidebar}
            />
          </aside>
        ) : (
          <IconButton
            className="fixed left-6 bottom-6"
            variant="secondary"
            rounded
            icon={mdiMenuOpen}
            onClick={toggleSidebar}
          />
        )}
        <main className="w-[100%] pt-7 pb-20 px-7 bg-gray-300">{children}</main>
      </div>
    </div>
  );
}

export { Layout, createLink };

export type { LayoutProps, LayoutLink };
