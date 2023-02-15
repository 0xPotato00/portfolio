import { ComponentPropsWithoutRef, FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import MainNavButton from '../elements/MenuButton/MenuButton';
import HamburgerMenu from '../elements/HamburgerMenu';
import Button from '../elements/Button';

export interface Props extends ComponentPropsWithoutRef<'header'> {
  children?: React.ReactNode;
  className?: string;
  withNav?: boolean;
}

const TopBar: FC<Props> = ({ children, className, ...props }) => {
  let MainNavButton = 'div';
  return (
    <header
      {...props}
      className={classNames(
        'w-full z-30 top-0 bg-black text-white dark:bg-gray-900 drop-shadow',
        { sticky: !className?.includes('fixed') },
        className,
      )}
    >
      <div className="h-24 container mx-auto flex items-center justify-around">
        <div className="w-80 flex justify-evenly">
          <Link href="/vvvv">
            <Button className="flex items-center">Home</Button>
          </Link>
          <Link href="/fffff">
            <Button className="flex items-center">About</Button>
          </Link>
          <Link href="/gggg">
            <Button className="flex items-center">Passion</Button>
          </Link>
        </div>
        <nav className="sm:relative flex items-center space-x-3 justify-end">
          <div className="flex items-center space-x-2">
            <div></div>
            <HamburgerMenu />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default TopBar;
