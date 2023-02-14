import BasicLayout from '@/components/Layout/Layout';

const Home = ({ ...props }) => {
  return (
    <div>
      <BasicLayout {...props}>
        <div className="ml-80 mt-56 w-11/12	">
          <h1 className="text-2xl text-white primary ml-50">
            4
            <b className="bold">
              <div className="animate-spin w-10">0</div>
            </b>
            4
          </h1>
        </div>
        <div className="w-11/12 text-2xl text-white ml-10">
          <div className="white w-10 animate-spin">Work</div> <div className="animate-spin w-1">In</div>{' '}
          <div className="animate-bounce">Progress</div>
        </div>
      </BasicLayout>
    </div>
  );
};
export default Home;
