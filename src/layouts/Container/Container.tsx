import { Outlet } from 'react-router-dom';

const Container = () => {
  return (
    <>
      <div className="container mx-auto w-full p-4 sm:p-6">
        <Outlet />
      </div>
    </>
  );
};

export default Container;
