import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useTranslationQuery } from '@hooks/useTranslation';
import { getSupportInfo } from '@apis/home';

import SupportCard from './SupportCard';
import SupportSkeleton from '../SupportSkeleton';

const SupportCardWrapper = () => {
  const { t } = useTranslation();

  const {
    data: supportInfo,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['supportInfo'],
    queryFn: getSupportInfo,
  });

  const textsToTranslate = useMemo(() => {
    if (!supportInfo) return [];
    return supportInfo.flatMap((card) => [card.title, card.summary]);
  }, [supportInfo]);

  const { translatedTexts, isLoading: isTranslating } =
    useTranslationQuery(textsToTranslate);

  const translatedSupportInfo = useMemo(() => {
    if (!supportInfo) return [];
    if (!translatedTexts) return supportInfo;

    return supportInfo.map((card, idx) => ({
      ...card,
      title: translatedTexts[idx * 2],
      summary: translatedTexts[idx * 2 + 1],
    }));
  }, [supportInfo, translatedTexts]);

  return (
    <>
      <header className="mb-8">
        <p className="text-title2 text-text-muted font-semibold">
          {t('home.aiDocsTitle')}
        </p>
        <p className="mt-1 text-sm text-slate-500">
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
          : translatedSupportInfo?.map((card, idx) => (
              <SupportCard key={idx} card={card} />
            ))}
      </div>
    </>
  );
};

export default SupportCardWrapper;
