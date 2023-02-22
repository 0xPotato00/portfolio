import Image from 'next/image';
import { FC } from 'react';

interface CardImageProps {
  pictureUrl: string;
  width?: number;
}

const CardImage: FC<CardImageProps> = ({ pictureUrl }) => {
  return (
    <div className="bg shadow-inner flex flex-row justify-center">
      <img src={pictureUrl} className="rounded-full w-96 h-96" />
    </div>
  );
};

export default CardImage;
