import Header from './Header';
import Container from './Container';

const MainLayout = () => {
  return (
    <>
      <div className="bg-cloud-pattern flex min-h-screen w-full flex-col bg-background bg-center bg-repeat">
        <Header />
        <Container />
      </div>
    </>
  );
};

export default MainLayout;
