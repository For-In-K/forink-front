import Header from './Header/Header';
import Container from './Container';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <>
      <div className="bg-cloud-pattern bg-background flex min-h-screen w-full min-w-xs flex-col bg-top">
        <Header />
        <Container />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
