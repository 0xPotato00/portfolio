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
    <WithContainer>
      <TopBar className="fixed mb-20" />
      <div className="flex flex-col min-h-screen mt-36">{children}</div>
    </WithContainer>
  );
};

export default ILayout;
