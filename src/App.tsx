import MainRoutes from '@routes/MainRoutes';
import { initAuth } from '@hooks/initAuth';

const App = () => {
  initAuth();

  return <MainRoutes />;
};

export default App;
