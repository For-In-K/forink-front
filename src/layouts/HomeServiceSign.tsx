import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { ArrowRight } from 'lucide-react';

const HomeServiceSign = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="h-sign to-primary w-full bg-gradient-to-b from-blue-600">
      <div className="container mx-auto flex h-full flex-col justify-around gap-8 p-4 text-center sm:p-8 md:p-12">
        <p className="font-mono text-4xl font-bold text-white sm:text-6xl">
          ForinK
        </p>
        <div className="flex flex-col gap-3">
          <p className="text-base text-slate-50">{t('slogan')}</p>
          <p className="text-xs text-slate-200">{t('sloganDescription')}</p>
        </div>
        <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <button
            onClick={() => {
              navigate('/signin');
              toast.info('정착 진단을 위해 로그인이 필요해요');
            }}
            className="bg-accent hover:bg-accent-hover flex w-full max-w-xs items-center justify-center gap-1 rounded-md p-2 text-xs font-medium text-white sm:w-auto"
          >
            <span className="truncate">{t('home.startExam')}</span>
            <ArrowRight className="ml-1" size={12} />
          </button>
          <button
            onClick={() => {
              navigate('/signin');
              toast.info('정착 진단을 위해 로그인이 필요해요');
            }}
            className="hover:border-white-hover hover:text-white-hover w-full max-w-xs rounded-md border p-2 px-6 text-xs font-medium text-white sm:w-auto"
          >
            <span className="truncate">{t('home.findGuide')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceSign;
