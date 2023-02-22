import { FC } from 'react';

export interface CardBioProps {
  bio: string;
  title: string;
}

const CardBio: FC<CardBioProps> = ({ bio, title }) => {
  return (
    <div className="nm-flat-gray-200-lg rounded-lg p-8 text-center max-w-sm w-full">
      <h2 className="text-xl font-normal leading-normal mb-2 tracking-tight  text-black-100 ">{title}</h2>
      <p className="text-md text-gray-800 leading-2 font-light font-sans">{bio}</p>
    </div>
  );
};

export default CardBio;
