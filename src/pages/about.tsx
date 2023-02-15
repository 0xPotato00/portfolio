import BasicLayout from '@/components/Layout/Layout';

const Home = ({ ...props }) => {
  return (
    <div>
      <BasicLayout {...props}>
        <div className="ml-80 mt-56 w-11/12	">
          <h1 className="text-2xl text-white primary ml-50">
            4
            <b className="bold">
              <div className="animate-spin w-10">000000</div>
            </b>
            4
          </h1>
        </div>
      </BasicLayout>
    </div>
  );
};
export default Home;
