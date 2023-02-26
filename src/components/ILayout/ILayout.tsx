import { ComponentPropsWithoutRef, FC } from 'react';
import Background from '../elements/Background';
import BasicLayout, { BasicLayoutProps } from '../elements/BasicLayout';
import WithContainer from '../elements/WithContainer';
import TopBar from '../TopBar';

export interface Props extends ComponentPropsWithoutRef<'div'>, BasicLayoutProps {
  children: React.ReactNode;
}

const ILayout: FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <TopBar className="fixed mb-20" />
      <div className="flex flex-row justify-center min-h-screen mt-36 max-w-screen-2xl px-5 md:px-20 m-auto">{children}</div>
    </>
  );
};

export default ILayout;
