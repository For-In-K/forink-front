import { Outlet } from 'react-router-dom';
import CustomToastContainer from '@components/toast/CustomToastContainer';

const SideLayout = () => {
  return (
    <>
      <div className="bg-logo-pattern bg-background flex h-full min-h-screen w-full min-w-xs items-center justify-center bg-position-[-10rem_-10rem] bg-no-repeat p-20">
        <Outlet />
        <CustomToastContainer />
      </div>
    </>
  );
};

export default SideLayout;
