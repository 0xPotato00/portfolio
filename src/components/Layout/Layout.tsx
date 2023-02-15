import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';
import classNames from 'classnames';
import TopBar from '@/components/TopBar';
// import BottomBar from './components/BottomBar';
// import classNames from 'classnames';

export interface Props extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

export interface WithSidebarProps {
  children: ReactNode;
  sidebar: ReactNode;
}

export const WithSidebar: FC<WithSidebarProps> = ({ children, sidebar }) => {
  return (
    <div className="py-20 lg:grid lg:grid-cols-12 min-h-screen">
      <div className="col-span-3 h-full relative lg:pr-10 mb-3">
        {sidebar}
        <div className="hidden lg:block absolute inset-y-0 right-0 h-full w-1 bg-gradient-to-b from-yellow-500 to-pink-500" />
        <div className="lg:hidden w-full h-1 bg-gradient-to-r from-yellow-500 to-pink-500" />
      </div>
      <div className="col-span-9 lg:pl-14 py-6 lg:pt-0 px-8 lg:px-0">{children}</div>
    </div>
  );
};

export const WithContainer: FC<ComponentPropsWithoutRef<'div'>> = ({ className, ...props }) => {
  return <div {...props} className={classNames('container mx-auto px-7 min-h-screen', className)} />;
};
