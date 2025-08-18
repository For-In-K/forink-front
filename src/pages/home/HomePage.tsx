import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { getSupportInfo } from '@apis/home';
import SupportCard from './SupportCard';
import SupportSkeleton from './SupportSkeleton';
import BasicInfoCard from './info/BasicInfoCard';
import BasicInfoWrapper from './info/BasicInfoWrapper';

const HomePage = () => {
  const { t } = useTranslation();

  const {
    data: supportInfo,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['supportInfo'],
    queryFn: getSupportInfo,
  });

  return (
    <main>
      <header className="mb-8">
        <p className="text-title2 font-semibold">{t('home.aiDocsTitle')}</p>
        <p className="text-text-muted mt-1 text-sm">
          {t('home.aiDocsDescription')}
        </p>
      </header>

      {isError && (
        <div className="rounded-md border border-red-200 bg-red-50 p-4 text-red-700">
          {t('error.loading')}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => <SupportSkeleton key={i} />)
          : supportInfo?.map((card, idx) => (
              <SupportCard key={idx} card={card} />
            ))}
      </div>
      <div className="h-min-header" />
      <BasicInfoWrapper />
    </main>
  );
};

export default HomePage;
