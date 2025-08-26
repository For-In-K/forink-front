import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTranslationQuery } from '@hooks/useTranslation';

import BasicInfoCard from './BasicInfoCard';
import { serviceList } from '@constants/home';

const BasicInfoWrapper = () => {
  const { t } = useTranslation();

  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const textsToTranslate = useMemo(() => {
    return serviceList.flatMap((service) => [
      service.title,
      service.when,
      service.summary,
      service.tag,
    ]);
  }, [serviceList]);

  const { translatedTexts, isLoading: isTranslating } =
    useTranslationQuery(textsToTranslate);

  const translatedServiceList = useMemo(() => {
    if (!translatedTexts) return serviceList;

    return serviceList.map((service, idx) => ({
      ...service,
      title: translatedTexts[idx * 4],
      when: translatedTexts[idx * 4 + 1],
      summary: translatedTexts[idx * 4 + 2],
      tag: translatedTexts[idx * 4 + 3],
    }));
  }, [serviceList, translatedTexts]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setFocusedIndex((prev) => (prev + 1) % translatedServiceList.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, translatedServiceList.length]);

  return (
    <div>
      <header className="mb-8">
        <p className="text-text-muted text-title2 font-semibold">
          {t('home.importantDocsTitle')}
        </p>
        <p className="mt-1 text-sm text-slate-500">
          {t('home.importantDocsDescription')}
        </p>
      </header>
      <div className="flex gap-2 overflow-x-scroll">
        {translatedServiceList.map((service, index) => (
          <BasicInfoCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default BasicInfoWrapper;
