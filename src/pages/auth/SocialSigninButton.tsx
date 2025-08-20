import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@assets/icons/google.svg?react';
import { toast } from 'react-toastify';

const SocialSigninButton = () => {
  const BUTTON_TEXT = 'Sign in with Google';
  const GOOGLE_OAUTH_URL = `${import.meta.env.VITE_API_BASE_URL}/oauth/google`;

  const handleSignin = async () => {
    try {
      window.location.href = GOOGLE_OAUTH_URL;
    } catch (error) {
      toast.error('로그인 화면 연결에 실패했어요');
    }
  };

  return (
    <button
      onClick={handleSignin}
      className="text-md md:text-title2 hover:bg-white-hover flex items-center justify-center gap-3 border border-[#747775] bg-white px-5 py-3 font-sans font-medium text-[#1F1F1F]"
    >
      <GoogleIcon className="size-5" />
      <span>{BUTTON_TEXT}</span>
    </button>
  );
};

export default SocialSigninButton;
