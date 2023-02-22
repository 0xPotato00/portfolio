import { FC } from 'react';
import Card from '../Card/Card';

export interface CardListProps {
  children?: React.ReactNode;
}

const CardList: FC<CardListProps> = ({ children }) => {
  return (
    <div className="flex flex-wrap justify-evenly items-center align-center mt-5 ">
      <Card bio="hahahah" pictureUrl="/3.JPG" />
      <Card bio="hahahah" pictureUrl="/5.JPEG" />
      <Card bio="hahahah" pictureUrl="/7.JPEG" />
      <Card bio="hahahah" pictureUrl="/11.JPG" />
      <Card bio="hahahah" pictureUrl="/12.JPEG" />
      <Card bio="hahahah" pictureUrl="/13.JPG" />
      <Card bio="hahahah" pictureUrl="/3.JPG" />
      <Card bio="hahahah" pictureUrl="/5.JPEG" />
      <Card bio="hahahah" pictureUrl="/7.JPEG" />
      <Card bio="hahahah" pictureUrl="/11.JPG" />
      <Card bio="hahahah" pictureUrl="/12.JPEG" />
      <Card bio="hahahah" pictureUrl="/13.JPG" />
    </div>
  );
};

export default CardList;
