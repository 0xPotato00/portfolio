import { ComponentPropsWithoutRef, FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import MainNavButton from '../elements/MenuButton/MenuButton';
import HamburgerMenu from '../elements/HamburgerMenu';
import Button from '../elements/Button';
import NavMenu from './NavMenu';
import img from '../../public/base.svg';
import WithContainer from '@/components/elements/WithContainer';
export interface Props extends ComponentPropsWithoutRef<'header'> {
  children?: React.ReactNode;
}

const TopBar: FC<Props> = ({ children, className, ...props }) => {
  return (
    <header {...props} className={classNames('w-full z-30 top-3', { sticky: !className?.includes('fixed') }, className)}>
      <NavMenu />
    </header>
  );
};

export default TopBar;
