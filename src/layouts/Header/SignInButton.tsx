import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import useAuth from '@hooks/useAuth';
import { LogIn, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SignInButton = () => {
  const { t } = useTranslation();
  const { isSignedIn, signOut } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (isSignedIn) {
      signOut();
      toast.success('로그아웃 되었어요');
      navigate('/');
    } else {
      navigate('/signin');
    }
  };

  return (
    <button
      className="bg-primary hover:bg-primary-hover flex min-w-auto items-center justify-center p-2 px-4 text-xs text-nowrap text-white md:text-sm"
      onClick={handleClick}
    >
      {isSignedIn ? (
        <LogOut className="mr-2 hidden size-4 lg:inline-block" />
      ) : (
        <LogIn className="mr-2 hidden size-4 lg:inline-block" />
      )}
      <span className="inline-block">
        {isSignedIn ? t('signout') : t('signin')}
      </span>
    </button>
  );
};

export default SignInButton;
