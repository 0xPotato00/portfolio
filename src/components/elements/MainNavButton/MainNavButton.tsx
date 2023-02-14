import Button from '.././Button/';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { ButtonBaseProps } from '../Button/ButtonBase';
import { FC, forwardRef, ReactNode } from 'react';

export interface Props extends ButtonBaseProps {
  href: string;
  children: ReactNode;
}

const MainNavButton: FC<Props> = forwardRef((props, ref) => {
  const router = useRouter();
  const isActive = router.pathname.includes(props.href);
  return (
    <Button
      as="a"
      size="lg"
      aria-current={String(isActive)}
      className={classNames(
        'normal-case text-white hover:opacity-100 focus:opacity-100',
        isActive ? 'opacity-100' : 'opacity-60',
      )}
      {...props}
      ref={ref}
    />
  );
});

MainNavButton.displayName = 'MainNavButton';

export default MainNavButton;
