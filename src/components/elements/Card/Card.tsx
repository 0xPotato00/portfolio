import React from 'react';
import CardImage from './CardImage';
import CardBio from './CardBio';

interface CardProps {
  pictureUrl: string;
  bio: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ pictureUrl, bio }) => {
  return (
    <div className="flex flex-col justify-between mx-1 ">
      <CardImage pictureUrl={pictureUrl} />
      <CardBio bio={bio} title="Tourmaline" />
    </div>
  );
};

export default Card;
