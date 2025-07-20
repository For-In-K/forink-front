import { Outlet } from 'react-router-dom';

const SideLayout = () => {
  return (
    <>
      <div className="bg-logo-pattern bg-background flex min-h-screen w-full min-w-xs flex-col items-center justify-center bg-position-[-10rem_-10rem] bg-no-repeat">
        <div className="max-h-60 sm:w-2xl lg:w-4xl">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SideLayout;
