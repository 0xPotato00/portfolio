import { FC } from 'react';

export interface CardBioProps {
  bio: string;
  title: string;
}

const CardBio: FC<CardBioProps> = ({ bio, title }) => {
  return (
    <div className="nm-flat-gray-200-lg rounded-lg p-8 text-center max-w-sm w-full">
      <h2 className="text-l font-bold leading-tight mb-2 text-red-300 ">{title}</h2>
      <p className="text-sm text-cyan-800 leading-2 tracking-tight font-light">
        Tourmaline is a gemstone that is akin to granite in structure and is acknowledged for its magical powers. This gemstone
        has a unique quality of creating an amount of electrical charge and can give out negative charge.
      </p>
    </div>
  );
};

export default CardBio;
