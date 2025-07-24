import { Outlet } from 'react-router-dom';

const SideLayout = () => {
  return (
    <>
      <div className="bg-logo-pattern bg-background flex h-full min-h-screen w-full min-w-xs items-center justify-center bg-position-[-10rem_-10rem] bg-no-repeat">
        <Outlet />
      </div>
    </>
  );
};

export default SideLayout;
