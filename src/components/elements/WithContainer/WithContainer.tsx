import classNames from 'classnames';
import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

export interface Props extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

export const WithContainer: FC<ComponentPropsWithoutRef<'div'>> = ({ className, ...props }) => {
  return <div {...props} className={classNames('container mx-auto px-7 min-h-screen', className)} />;
};

export default WithContainer;
