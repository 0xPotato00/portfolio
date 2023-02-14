import { FC } from 'react';
import { CreateEnvironmentProvider } from '@/components/CreateEnvironment';
import BasicLayout, {
  Props as BasicLayoutProps,
} from '../Layout/Layout';

export * from '../Layout/Layout';

export interface Props extends BasicLayoutProps {}

const DashboardLayout: FC<Props> = ({ TopBarProps, ...props }) => {
  return (
    <>
      <BasicLayout
        {...props}
        TopBarProps={{
          ...TopBarProps,
          withNav: TopBarProps?.withNav ?? true,
        }}
      />
      <CreateEnvironmentProvider />
    </>
  );
};

export default DashboardLayout;
