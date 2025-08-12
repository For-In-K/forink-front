import { ToastContainer } from 'react-toastify';
import './CustomToastContainer.css';

const CustomToastContainer = () => {
  return (
    <ToastContainer
      className={'custom-toast-container'}
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      theme="light"
    />
  );
};

export default CustomToastContainer;
