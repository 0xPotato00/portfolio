import { FC } from 'react';

interface CardBaseProps {
  children: React.ReactNode;
}

const CardBase: FC<CardBaseProps> = ({ children }) => {
  return <div className="flex flex-row justify-center align-center ">{children}</div>;
};

export default CardBase;
