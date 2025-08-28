import { ToastContainer } from 'react-toastify';
import './CustomToastContainer.css';

const CustomToastContainer = () => {
  return (
    <ToastContainer
      className={'custom-toast-container'}
      position="top-center"
      autoClose={500}
      hideProgressBar={false}
      closeOnClick
      closeButton={false}
      pauseOnHover
      theme="light"
    />
  );
};

export default CustomToastContainer;
