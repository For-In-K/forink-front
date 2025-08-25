import { useTranslation } from 'react-i18next';
import ProfileWrapper from './template/ProfileWrapper';

const GuideProfilePage = () => {
  const { t } = useTranslation();

  return (
    <main>
      <header className="mb-8">
        <p className="text-title2 text-text-muted font-semibold">
          {t('guide.title')}
        </p>
        <p className="mt-1 text-sm text-slate-500">{t('guide.description')}</p>
      </header>
      <ProfileWrapper />
    </main>
  );
};

export default GuideProfilePage;
