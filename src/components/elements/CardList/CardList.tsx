import { FC } from 'react';
import Card from '../Card/Card';
const cardList = [
  {
    pictureUrl: '/3.JPG',
    bio: 'Tourmaline is a gemstone that is akin to granite in structure and is acknowledged for its magical powers. This gemstone has a unique quality of creating an amount of electrical charge and can give out negative charge',
  },
  {
    pictureUrl: '/5.JPEG',
    bio: 'Tourmaline is a gemstone that is akin to granite in structure and is acknowledged for its magical powers. This gemstone has a unique quality of creating an amount of electrical charge and can give out negative charge',
  },
];

export interface CardListProps {
  children?: React.ReactNode;
}

const CardList: FC<CardListProps> = ({ children }) => {
  return (
    <div className="flex flex-wrap justify-evenly items-center align-center mt-5 bg-green-100 p-10 ">
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
