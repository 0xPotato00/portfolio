import { ComponentPropsWithoutRef, FC } from 'react';
import BasicLayout, { BasicLayoutProps } from '../elements/BasicLayout';
import { WithContainer } from '../Layout/Layout';
import TopBar from '../TopBar';

export interface Props extends ComponentPropsWithoutRef<'div'>, BasicLayoutProps {
  children: React.ReactNode;
}

const ILayout: FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <BasicLayout {...props}>
        <TopBar />
        <div className="flex flex-col min-h-screen bg-white">{children}</div>
      </BasicLayout>
    </>
  );
};

export default ILayout;
