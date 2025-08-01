import { useTranslation } from 'react-i18next';
import { LogIn } from 'lucide-react';

const SignInButton = () => {
  const { t } = useTranslation();

  return (
    <>
      <button className="bg-primary hover:bg-primary-hover flex h-10 min-w-auto items-center px-6 text-white">
        <LogIn className="inline-block sm:hidden" />
        <p className="hidden sm:inline-block">{t('signout')}</p>
      </button>
    </>
  );
};

export default SignInButton;
