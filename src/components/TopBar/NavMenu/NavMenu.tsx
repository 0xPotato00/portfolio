import { ComponentPropsWithoutRef, FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import Button from '@/components/elements/Button';

export interface NavProps extends ComponentPropsWithoutRef<'nav'> {
  children?: React.ReactNode;
  links?: string[];
}

const bools = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/About' },
  { name: 'Contact', href: '/Contact' },
];

const NavMenu: FC<NavProps> = ({ children, links, ...props }) => {
  const navLinks = bools.map((link, iterator) => {
    return (
      <Link href={link.href} key={iterator}>
        <Button className="flex items-center">{link.name}</Button>
      </Link>
    );
  });
  return (
    <div className="h-24 container mx-auto flex items-center justify-end">
      <div className="w-80 flex justify-evenly">{navLinks}</div>
    </div>
  );
};

export default NavMenu;
