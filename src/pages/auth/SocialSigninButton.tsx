import { useNavigate } from 'react-router-dom';
import { getOauthUrl } from '@apis/oauth';
import GoogleIcon from '@assets/icons/google.svg?react';

const SocialSigninButton = () => {
  const navigate = useNavigate();
  const BUTTON_TEXT = 'Sign in with Google';

  const handleSignin = async () => {
    try {
      const { url } = await getOauthUrl();
      window.location.href = url;
    } catch (error) {
      alert('로그인에 실패했습니다. 다시 시도해주세요.'); // TODO: 토스트로 대체하기
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
