import { ComponentPropsWithoutRef, FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import MainNavButton from '../elements/MenuButton/MenuButton';
import HamburgerMenu from '../elements/HamburgerMenu';
import Button from '../elements/Button';
import NavMenu from './NavMenu';
import img from '../../public/base.svg';

export interface Props extends ComponentPropsWithoutRef<'header'> {
  children?: React.ReactNode;
}

const TopBar: FC<Props> = ({ children, className, ...props }) => {
  return (
    <header
      {...props}
      className={classNames(
        'w-full z-30 top-0 bg-black text-white dark:bg-gray-900 drop-shadow',
        { sticky: !className?.includes('fixed') },
        className,
      )}
    >
      <NavMenu />
    </header>
  );
};

export default TopBar;
