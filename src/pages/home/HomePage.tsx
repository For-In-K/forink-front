import useAuth from '@hooks/useAuth';

const HomePage = () => {
  const { isSignedIn } = useAuth();

  return <div>Home Page</div>;
};

export default HomePage;
