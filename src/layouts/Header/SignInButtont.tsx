import { useTranslation } from 'react-i18next';
import { LogIn } from 'lucide-react';

const SignInButton = () => {
  const { t } = useTranslation();

  return (
    <>
      <button className="bg-primary hover:bg-primary-hover flex min-w-auto items-center justify-center p-2 px-4 text-xs text-white sm:text-sm">
        <LogIn className="inline-block sm:hidden" />
        <p className="hidden sm:inline-block">{t('signout')}</p>
      </button>
    </>
  );
};

export default SignInButton;
