import { Outlet } from 'react-router-dom';

const Container = () => {
  return (
    <>
      <div className="container mx-auto w-full p-10 md:py-16">
        <Outlet />
      </div>
    </>
  );
};

export default Container;
