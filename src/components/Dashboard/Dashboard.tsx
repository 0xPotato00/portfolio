import { ComponentPropsWithoutRef, FC } from 'react';
import BasicLayout, { BasicLayoutProps } from '../elements/BasicLayout';
import { WithContainer } from '../Layout/Layout';
import TopBar from '../TopBar';

export interface Props extends ComponentPropsWithoutRef<'div'>, BasicLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <BasicLayout {...props}>
        <WithContainer>
          <TopBar />
          <div className="flex flex-col min-h-screen bg-white">{children}</div>
        </WithContainer>
      </BasicLayout>
    </>
  );
};

export default DashboardLayout;
