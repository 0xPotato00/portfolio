import { Transition } from '@headlessui/react';
import classNames from 'classnames';
import { ComponentProps, FC, useEffect, useState } from 'react';

export interface Props extends ComponentProps<'div'> {
  enterFrom?: 'top' | 'right' | 'bottom' | 'left';
}

const BaseBackgroundNode: FC<Props> = ({ children, className, enterFrom = 'left' }) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const delay = 100;
    const timeout = setTimeout(() => {
      setIsShowing(true);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Transition
      show={isShowing}
      enter="transition ease-in-out duration-200 transform"
      enterFrom={classNames({
        '-translate-y-full': enterFrom === 'top',
        'translate-x-full': enterFrom === 'right',
        'translate-y-full': enterFrom === 'bottom',
        '-translate-x-full': enterFrom === 'left',
      })}
      enterTo={classNames({
        'translate-y-0': ['top', 'bottom'].includes(enterFrom),
        'translate-x-0': ['right', 'left'].includes(enterFrom),
      })}
      leave="transition ease-in-out duration-200 transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
      className={classNames('absolute z-10', className)}
    >
      {children}
    </Transition>
  );
};

export default BaseBackgroundNode;
