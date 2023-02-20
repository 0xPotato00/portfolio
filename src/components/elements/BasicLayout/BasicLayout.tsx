import { FC } from 'react';

export interface BasicLayoutProps {
  children?: React.ReactNode;
}

const BasicLayout: FC<BasicLayoutProps> = ({ children, ...props }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white" {...props}>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default BasicLayout;
