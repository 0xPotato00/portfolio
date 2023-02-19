import { WithContainer } from '@/components/Layout/Layout';
import { FC } from 'react';
import Card from '../Card/Card';

export interface CardListProps {
  children?: React.ReactNode;
}

const CardList: FC<CardListProps> = ({ children }) => {
  return (
    <div className="flex justify-evenly items-center">
      <Card bio="hahahah" pictureUrl="/4.JPEG" className="w-30" />
      <Card bio="hahahah" pictureUrl="/4.JPEG" className="w-30" />
      <Card bio="hahahah" pictureUrl="/4.JPEG" className="w-30" />
    </div>
  );
};

export default CardList;
