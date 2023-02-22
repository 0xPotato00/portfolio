import { ComponentPropsWithoutRef, FC } from 'react';
import Link from 'next/link';
import Button from '@/components/elements/Button';
import Image from 'next/image';

export interface NavProps extends ComponentPropsWithoutRef<'nav'> {
  children?: React.ReactNode;
  links?: string[];
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/About' },
  { name: 'Contact', href: '/Contact' },
];

const NavMenu: FC<NavProps> = ({ children, links, ...props }) => {
  const menu = navLinks.map((link, iterator) => {
    return (
      <Link href={link.href} key={iterator} passHref>
        <Button className="flex items-center font-light text-black">{link.name}</Button>
      </Link>
    );
  });
  return (
    <div className="w-11/12 h-auto  flex flex-row justify-start">
      <Image src="/logo.svg" alt="cave" width={90} height={90} className="rounded-full" />
      <div className="flex flex-row ml-auto px-10">{menu}</div>
    </div>
  );
};

export default NavMenu;
