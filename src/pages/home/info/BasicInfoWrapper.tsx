import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTranslationQuery } from '@hooks/useTranslation';

import BasicInfoCard from './BasicInfoCard';
import { serviceList } from '@constants/home';

const BasicInfoWrapper = () => {
  const { t } = useTranslation();

  const indicatorCount = serviceList.length;
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCount, setVisibleCount] = useState(1);

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
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const getVisibleCards = () => {
    const visibleCards = [];
    const centerIndex = Math.floor(visibleCount / 2);

    for (let i = 0; i < visibleCount; i++) {
      const offset = i - centerIndex;
      const index = (focusedIndex + offset + indicatorCount) % indicatorCount;
      visibleCards.push({
        ...translatedServiceList[index],
        originalIndex: index,
        displayIndex: i,
        isFocused: i === centerIndex,
      });
    }
    return visibleCards;
  };

  const visibleCards = getVisibleCards();

  useEffect(() => {
    if (isAutoPlaying && !isTranslating) {
      const interval = setInterval(() => {
        setFocusedIndex((prevIndex) => (prevIndex + 1) % indicatorCount);
      }, 4500);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isTranslating, indicatorCount]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

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

      <div
        className="relative p-4 md:px-8 lg:px-12"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`flex justify-center gap-2 md:gap-4 lg:gap-6 ${
            visibleCount === 1 ? 'justify-center' : 'justify-between'
          }`}
        >
          {visibleCards.map((service, index) => (
            <BasicInfoCard
              key={`${service.originalIndex}-${focusedIndex}`}
              {...service}
              className={`transition-all duration-500 ease-in-out ${
                service.isFocused
                  ? 'ring-primary z-1 -translate-y-3 scale-105 shadow-lg ring-1'
                  : 'opacity-60 hover:opacity-80'
              } ${
                visibleCount === 1
                  ? 'w-full max-w-sm'
                  : visibleCount === 2
                    ? 'w-full max-w-xs'
                    : 'w-full max-w-xs'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-2 flex items-center justify-center gap-3">
        {Array.from({ length: indicatorCount }).map((_, index) => (
          <button
            onClick={() => {
              setFocusedIndex(index);
            }}
            key={index}
            className={`rounded-full transition-all duration-300 ${
              index === focusedIndex
                ? 'h-2.5 w-6 bg-blue-500'
                : 'h-2 w-2 bg-slate-200 hover:bg-slate-300'
            }`}
          />
        ))}
      </div>

      <div className="mt-2 flex justify-center">
        <div
          className={`animate-pulse text-xs text-slate-400 transition-opacity ${
            isAutoPlaying ? 'opacity-100' : 'opacity-50'
          }`}
        >
          {isAutoPlaying ? '자동 재생 중...' : '마우스를 올리면 일시정지'}
        </div>
      </div>
    </div>
  );
};

export default BasicInfoWrapper;
