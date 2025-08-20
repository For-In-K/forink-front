import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { fetchTranslation } from '@servieces/translationService';

export const useTranslationQuery = (
  texts: string[],
  { originalLang = 'ko' } = {}
) => {
  const { i18n } = useTranslation();
  const targetLanguage = i18n.language;

  const queryKey = ['translation', texts, targetLanguage];

  const enabled = !!texts && targetLanguage !== originalLang;

  const { data, isLoading, isError } = useQuery({
    queryKey: queryKey,
    queryFn: () => fetchTranslation(texts, targetLanguage),
    enabled,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return { translatedTexts: data || texts, isLoading, isError };
};
