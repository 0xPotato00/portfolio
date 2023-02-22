import { FC } from 'react';
import BaseBackgroundNode from './BackgroundBase';

export interface Props {
  children: React.ReactNode;
}

const Background: FC<Props> = ({ children }) => {
  return (
    <>
      <BaseBackgroundNode>{children}</BaseBackgroundNode>
    </>
  );
};

export default Background;
