 import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import React from "react";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'About', href: '/about' },
  { name: 'Officers', href: '/officers'},
  { name: 'Calendar', href: '/calendar'},
  { name: 'Competitions', href: '/competitions'},
  { name: 'Points', href: '/points'},
  // { name: 'Contact', href: '/contact'},
  { name: 'Links', href: '/links'},
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[60px] grow items-center justify-center gap-5 rounded-md bg-white hover:bg-green-300 text-xl font-medium  hover:text-black md:flex-none md:justify-start md:p-1 md:px-20',
              {
                'bg-green-100 text-green-600': pathname === link.href,
              },
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
