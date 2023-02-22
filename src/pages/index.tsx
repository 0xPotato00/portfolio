import CardList from '@/components/elements/CardList';
import WithContainer from '@/components/elements/WithContainer';
import { homeBio } from '@/utils/contants';
import Image from 'next/image';

const Home = ({ ...props }) => {
  return (
    <WithContainer className="mt-6">
      <div className="bg-blue-100 shadow-2xl bg-clip-content rounded-t-xl flex flex-row justify-evenly items-center">
        <div className="max-w-7xl mx-auto px-4 sm:py-24 sm:px-6 lg:px-8 md:w-6/12 py-10 px-12">
          <h1 className="lg:text-4xl font-extrabold text-blue-900 mb-4 ">{homeBio.header}</h1>
          <p className="lg:text-xl  font-sans text-gray-800 font-light lg:mt-8 ">{homeBio.about}</p>
        </div>
        <div className="w-6/12 flex justify-center lg:w-80 lg:h-80 mx-auto">
          <Image src="/cave.png" alt="cave" width={500} height={500} className="rounded-t-full opacity-90 md:block hidden" />
        </div>
      </div>

      <div className="shadow-2xl bg-clip-content rounded-b-xl flex flex-row justify-evenly items-center mt-10">
        <CardList />
      </div>
    </WithContainer>
  );
};
export default Home;
