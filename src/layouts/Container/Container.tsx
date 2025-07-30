import { Outlet } from 'react-router-dom';

const Container = () => {
  return (
    <>
      <div className="container mx-auto w-full px-10 py-25 md:py-30">
        <Outlet />
      </div>
    </>
  );
};

export default Container;
