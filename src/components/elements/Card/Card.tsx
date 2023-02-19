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
    <div className="flex flex-col justify-center items-center p-2 rounded-xl shadow-xl">
      <CardImage pictureUrl={pictureUrl} />
      <CardBio bio={bio} title="Tourmaline" />
    </div>
  );
};

export default Card;
