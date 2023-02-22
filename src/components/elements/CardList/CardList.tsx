import { WithContainer } from '@/components/elements/WithContainer';
import { FC } from 'react';
import Card from '../Card/Card';

export interface CardListProps {
  children?: React.ReactNode;
}

const CardList: FC<CardListProps> = ({ children }) => {
  return (
    <div className="flex justify-evenly items-center align-center mt-5">
      <Card bio="hahahah" pictureUrl="/4.JPEG" />
      <Card bio="hahahah" pictureUrl="/4.JPEG" />
      <Card bio="hahahah" pictureUrl="/4.JPEG" />
    </div>
  );
};

export default CardList;
