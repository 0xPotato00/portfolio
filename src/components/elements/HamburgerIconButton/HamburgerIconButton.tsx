
import { Bars2Icon } from '@heroicons/react/24/solid';
import { FC, forwardRef } from 'react';
import ButtonBase from '../Button/ButtonBase';

export interface Props {}

const HambugerMenuIconButton: FC<Props> = forwardRef((props, ref) => {
  return (
    <>
    <ButtonBase as="button" className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <Bars2Icon className="h-5 w-5" />
    </ButtonBase>
    </>
  );
});

HambugerMenuIconButton.displayName = 'HambugerMenuIconButton';

export default HambugerMenuIconButton;
