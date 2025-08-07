import { Outlet } from 'react-router-dom';

const Container = () => {
  return (
    <>
      <div className="container mx-auto mt-[var(--height-min-header)] w-full px-10 py-25 md:mt-[var(--height-header)] md:py-30">
        <Outlet />
      </div>
    </>
  );
};

export default Container;
