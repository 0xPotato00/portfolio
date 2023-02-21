import React from 'react';
import CardBase from './CardBase';
import CardImage from './CardImage';
import CardBio from './CardBio';

interface CardProps {
  pictureUrl: string;
  bio: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ pictureUrl, bio }) => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row justify-center items-center rounded-xl">
        <CardImage pictureUrl={pictureUrl} />
      </div>
      <div>
        <CardBio bio={bio} title="Tourmaline" />
      </div>
    </div>
  );
};

export default Card;
