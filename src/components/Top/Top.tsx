import { ComponentPropsWithoutRef, FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import MainNavButton from '../elements/MenuButton/MenuButton';
import HamburgerMenu from '../elements/HamburgerMenu';

export interface Props extends ComponentPropsWithoutRef<'header'> {
  children?: React.ReactNode;
  className?: string;
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
      <div className="h-24 px-7 container mx-auto flex items-center justify-between">
        {true ? (
          <Link href="/">
            <h1 className="flex items-center"></h1>
          </Link>
        ) : (
          <nav aria-label="primary" className="font-display flex items-center lg:space-x-5">
            <Link passHref href="/">
              <h1 className="cursor-pointer">ssss</h1>
            </Link>

            <div className="hidden md:flex items-center">
              <Link href="/environments" passHref>
                <MainNavButton href="/environments">Environments</MainNavButton>
              </Link>
              <Link href="/wallets" passHref>
                <MainNavButton href="/wallets">Wallets</MainNavButton>
              </Link>
              <Link href="/faucet" passHref>
                <MainNavButton href="/faucet">Faucet</MainNavButton>
              </Link>
              <MainNavButton href="kkk">Logs</MainNavButton>
              <MainNavButton href="href">Docs</MainNavButton>
            </div>
          </nav>
        )}
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
