import { ComponentPropsWithoutRef, FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import Button from '@/components/elements/Button';

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
      <Link href={link.href} key={iterator}>
        <Button className="flex items-center font-light">{link.name}</Button>
      </Link>
    );
  });
  return (
    <div className="h-24 container mx-auto flex items-center justify-start">
      <div className="w-24 h-24 mr-80 flex-row justify-center p-2">
        <img src="/parlor4.svg" alt="logo" className="w-20 h-20 rounded-full" />
      </div>
      <div className="w-80 flex justify-evenly ml-auto">{menu}</div>
    </div>
  );
};

export default NavMenu;
