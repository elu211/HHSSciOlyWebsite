 import Link from 'next/link';
 import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import React from "react";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

const buttons = [
  { image: '/components/images/discord.png', href: 'https://discord.com/invite/35aWYtPpw4'},
  { image: '/components/images/instagram.png', href: 'https://www.instagram.com/homesteadscioly'},
  { image: '/components/images/mail.png', href: '/contact'}
]

export default function NavButtons() {
  const pathname = usePathname();
  return (
    <>
      {buttons.map((button) => {
        return (
          <Link
            href={button.href}
            className={clsx(
              'flex md:p-1 md:px-5'
            )}
          >
            <Image 
            className="dark:invert pt-2"
            src= {button.image}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: 'auto', height: 'auto'}}
            priority alt={""}/>
          </Link>
        );
      })}
    </>
  );
}
