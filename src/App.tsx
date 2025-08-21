import MainRoutes from '@routes/MainRoutes';
import { initAuth } from '@hooks/initAuth';
import CustomToastContainer from '@components/toast/CustomToastContainer';

const App = () => {
  initAuth();

  return (
    <>
      <MainRoutes />
      <CustomToastContainer />
    </>
  );
};

export default App;
