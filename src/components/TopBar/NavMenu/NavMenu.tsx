import { ComponentPropsWithoutRef, FC } from 'react';
import Link from 'next/link';
import Button from '@/components/elements/Button';
import Image from 'next/image';
import { SiInstagram } from 'react-icons/si';

export interface NavProps extends ComponentPropsWithoutRef<'nav'> {
  children?: React.ReactNode;
  links?: string[];
}

const navLinks = [
  { name: 'About', href: '/About' },
  { href: 'https://www.instagram.com/gemsparlor/', name: <SiInstagram /> },
];

const NavMenu: FC<NavProps> = ({ children, links, ...props }) => {
  const menu = navLinks.map((link, iterator) => {
    return (
      <Link href={link.href} key={iterator} passHref>
        <Button className="flex items-center font-light text-black text-sm font-serif">{link.name}</Button>
      </Link>
    );
  });
  return (
    <div className="flex flex-row justify-center items-center mx-auto max-w-screen-2xl">
      <Image src="/logo.svg" alt="cave" width={90} height={90} className="rounded-full ml-10" />
      <div className="flex flex-row ml-auto">{menu}</div>
    </div>
  );
};

export default NavMenu;
