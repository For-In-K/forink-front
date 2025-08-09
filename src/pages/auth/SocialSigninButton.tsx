import { useNavigate } from 'react-router-dom';
import { getOauthUrl } from '@apis/oauth';
import GoogleIcon from '@assets/icons/google.svg?react';
import { toast } from 'react-toastify';

const SocialSigninButton = () => {
  const BUTTON_TEXT = 'Sign in with Google';

  const handleSignin = async () => {
    try {
      const { url } = await getOauthUrl();
      window.location.href = url;
    } catch (error) {
      toast.error('로그인 화면 연결에 실패했어요');
    }
  };

  return (
    <button
      onClick={handleSignin}
      className="text-md md:text-title2 hover:bg-white-hover flex items-center justify-center border border-[#747775] bg-white px-5 py-3 font-sans font-medium text-[#1F1F1F]"
    >
      <GoogleIcon className="size-5" />
      <span>{BUTTON_TEXT}</span>
    </button>
  );
};

export default SocialSigninButton;
