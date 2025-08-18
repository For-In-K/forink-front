import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const HomeServiceSign = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="h-sign to-primary w-full bg-gradient-to-b from-blue-600">
      <div className="container mx-auto flex h-full flex-col justify-around gap-8 p-12 text-center">
        <p className="font-mono text-6xl font-bold text-white">ForinK</p>
        <div className="flex flex-col gap-3">
          <p className="text-base text-slate-50">{t('slogan')}</p>
          <p className="text-xs text-slate-200">{t('sloganDescription')}</p>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/signin')}
            className="bg-accent hover:bg-accent-hover flex items-center justify-center gap-1 rounded-md p-2 text-xs font-medium text-white"
          >
            {t('home.startExam')} <ArrowRight className="ml-1" size={12} />
          </button>
          <button
            onClick={() => navigate('/signin')}
            className="hover:border-white-hover hover:text-white-hover rounded-md border p-2 px-6 text-xs font-medium text-white"
          >
            {t('home.findGuide')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceSign;
