import { FC } from 'react';

export interface CardBioProps {
  bio: string;
  title: string;
}

const CardBio: FC<CardBioProps> = ({ bio, title }) => {
  return (
    <div className="nm-flat-gray-200-lg rounded-lg p-8 text-center max-w-sm w-full">
      <h2 className="text-2xl font-bold leading-tight mb-4">{title}</h2>
      <p>
        Tourmaline is a gemstone that is akin to granite in structure and is acknowledged for its magical powers. This gemstone
        has a unique quality of creating an amount of electrical charge and can give out negative charge.
      </p>
      <a
        href="#"
        className="rounded-full bg-green-500 shadow-gray-200 leading-5 px-8 py-4 uppercase font-bold tracking-widest text-white inline-block mt-4"
      >
        Find out more
      </a>
    </div>
  );
};

export default CardBio;
