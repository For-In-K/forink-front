import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@assets/icons/google.svg?react';

const SocialSigninButton = () => {
  const navigate = useNavigate();
  const BUTTON_TEXT = 'Sign in with Google';

  const handleSignin = () => {
    console.log('signin clicked');
    navigate('/');
  };

  return (
    <button
      onClick={handleSignin}
      className="text-md md:text-title2 flex items-center justify-center border border-[#747775] bg-white px-5 py-3 font-sans font-medium text-[#1F1F1F]"
    >
      <GoogleIcon className="size-5" />
      <span>{BUTTON_TEXT}</span>
    </button>
  );
};

export default SocialSigninButton;
