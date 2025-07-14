import { Outlet } from 'react-router-dom';

const Container = () => {
  return (
    <div className="container sm:px-8 sm:pt-4 md:px-20 md:pt-6">
      <Outlet />
    </div>
  );
};

export default Container;
