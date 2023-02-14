import { ComponentPropsWithoutRef, FC } from 'react';
import BasicLayout, { Props as BasicLayoutProps } from '../Layout/Layout';

export * from '../Layout/Layout';

export interface Props extends ComponentPropsWithoutRef<'header'> {
  withNav?: boolean;
  TopBarProps?: {};

}

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
    </>
  );
};

export default DashboardLayout;
