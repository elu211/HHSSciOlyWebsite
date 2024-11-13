 import Link from 'next/link';
 import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import React from "react";
import discord from '@/components/images/discord.png';
import instagram from '@/components/images/instagram.png';
import mail from '@/components/images/mail.png';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

const buttons = [
  { image: discord, href: 'https://discord.com/invite/35aWYtPpw4'},
  { image: instagram, href: 'https://www.instagram.com/homesteadscioly'},
  { image: mail, href: '/contact'}
]

export default function NavButtons() {
  const pathname = usePathname();
  return (
    <>
      {buttons.map((button) => {
        return (
          <Link
            href={button.href}
            target="_blank"
            className={clsx(
              'flex md:p-1 md:px-3'
            )}
          >
            <Image 
            src= {button.image}
            width={25}
            height={25}
            sizes="100vw"
            priority alt={""}/>
          </Link>
        );
      })}
    </>
  );
}
