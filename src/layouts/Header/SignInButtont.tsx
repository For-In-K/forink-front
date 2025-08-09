import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import useAuth from '@hooks/useAuth';
import { LogIn, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SignInButtonProps {
  signedIn?: boolean;
  onClick?: () => void;
}

const SignInButton = ({ signedIn = false, onClick }: SignInButtonProps) => {
  const { t } = useTranslation();
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (signedIn) {
      signOut();
      toast.success('로그아웃 되었어요');
      navigate('/');
    } else {
      navigate('/signin');
    }
  };

  return (
    <button
      className="bg-primary hover:bg-primary-hover flex min-w-auto items-center justify-center p-2 px-4 text-xs text-white sm:text-sm"
      onClick={handleClick}
    >
      {signedIn ? (
        <LogOut className="inline-block sm:hidden" />
      ) : (
        <LogIn className="inline-block sm:hidden" />
      )}
      <span className="hidden sm:inline-block">
        {signedIn ? t('signout') : t('signin')}
      </span>
    </button>
  );
};

export default SignInButton;
