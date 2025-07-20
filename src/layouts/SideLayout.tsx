import { Outlet } from 'react-router-dom';

const SideLayout = () => {
  return (
    <>
      <div className="bg-logoPattern flex min-h-screen w-full flex-col items-center justify-center bg-background bg-[position:-10rem_-10rem] bg-no-repeat">
        <Outlet />
      </div>
    </>
  );
};

export default SideLayout;
