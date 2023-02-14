import { ComponentPropsWithoutRef, FC } from 'react';
import BasicLayout, { Props as BasicLayoutProps } from '../Layout/Layout';

export * from '../Layout/Layout';

export interface Props extends ComponentPropsWithoutRef<'header'> {}

const DashboardLayout: FC<Props> = ({ ...props }) => {
  return (
    <>
      <BasicLayout {...props}>
        <div className="flex flex-col flex-1 w-full">
          <div className="flex flex-col flex-1 w-full">
            <div className="flex flex-col flex-1 w-full">
              <div className="flex flex-col flex-1 w-full">{props?.children}</div>
            </div>
          </div>
        </div>
      </BasicLayout>
    </>
  );
};

export default DashboardLayout;
