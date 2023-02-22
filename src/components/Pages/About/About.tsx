import CardList from '@/components/elements/CardList';
import WithContainer from '@/components/elements/WithContainer';

const About: React.FC = () => {
  console.log('About page rendered');
  return (
    <WithContainer>
      <div className="bg-gray-100">
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-light font-sans text-green-600 font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
              Welcome To Gems Parlor
            </h1>

            <p className="mt-4 text-lg text-gray-500 font-serif ">
              We offer a wide selection of fine jewelry, gems, and diamonds to suit your style and budget.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Our Products</h2>

          <div className="mt-6">
            <p className="text-lg text-gray-500">Check back soon for our latest selection of fine jewelry and gems.</p>
          </div>
          <CardList />
        </div>
      </div>
    </WithContainer>
  );
};

export default About;
