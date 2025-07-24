import { useTranslation } from 'react-i18next';
import { LogIn } from 'lucide-react';

const SignInButton = () => {
  const { t } = useTranslation();

  return (
    <>
      <button className="bg-primary hover:bg-primary-hover min-w-auto px-6 py-1 text-white">
        <LogIn className="inline-block sm:hidden" />
        <p className="hidden sm:inline-block">{t('signin')}</p>
      </button>
    </>
  );
};

export default SignInButton;
