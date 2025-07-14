import Container from './Container';
import Header from './Header';

const MainLayout = () => {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col">
        <Header />
        <div>
          <Container />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
