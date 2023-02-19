import Image from 'next/image';
import { FC } from 'react';

interface CardImageProps {
  pictureUrl: string;
  width?: number;
}

const CardImage: FC<CardImageProps> = ({ pictureUrl, width }) => {
  return (
    <div className="bg-white rounded-xl shadow-inner">
      <div className="relative rounded-xl overflow-hidden">
        <Image src={pictureUrl} width={300} height={300} className="rounded-xl" alt="lol" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gray-200 rounded-fullshadow-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default CardImage;
