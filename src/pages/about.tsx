import { WithContainer } from '@/components/Layout/Layout';

const Home = ({ ...props }) => {
  return (
    <WithContainer>
      <div className="bg-black flex justify-center flex-1">
        <h1 className="text-white bg-lime-700">
          <div className="w-80 animate-spin text-xl flex justify-center align-center">Hello</div>
        </h1>
      </div>
    </WithContainer>
  );
};
export default Home;
