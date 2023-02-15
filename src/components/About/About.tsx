import HamburgerMenu from '../elements/HamburgerMenu';
import Link from 'next/link';
import { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';

export interface Props extends ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode;
  className?: string;
  withNav?: boolean;
}

const About: FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={classNames('w-full h-full', className)} {...props}>
      <div className="h-24 container mx-auto flex items-center justify-around">
        <div className="w-80 flex justify-evenly">
          <Link href="/">
            <h1 className="flex items-center">Home</h1>
          </Link>
          <Link href="/">
            <h1 className="flex items-center">About</h1>
          </Link>
          <Link href="/">
            <h1 className="flex items-center">Passion</h1>
          </Link>
          <Link href="/">
            <h1 className="flex items-center">Links</h1>
          </Link>
        </div>
        <nav className="sm:relative flex items-center space-x-3 justify-end">
          <div className="flex items-center space-x-2">
            <div></div>
            <HamburgerMenu />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default About;
