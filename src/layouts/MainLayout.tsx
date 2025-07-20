import Header from './Header';
import Container from './Container';

const MainLayout = () => {
  return (
    <>
      <div className="bg-cloud-pattern bg-background flex min-h-screen w-full min-w-xs flex-col bg-center bg-repeat">
        <Header />
        <Container />
      </div>
    </>
  );
};

export default MainLayout;
