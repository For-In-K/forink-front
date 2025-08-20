import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { fetchTranslation } from '@servieces/translationService';

export const useTranslationQuery = (
  text: string,
  { originalLang = 'kor' } = {}
) => {
  const { i18n } = useTranslation();
  const targetLanguage = i18n.language;

  const queryKey = ['translation', text, targetLanguage];

  const enabled = !!text && targetLanguage !== originalLang;

  const { data, isLoading, isError } = useQuery({
    queryKey: queryKey,
    queryFn: () => fetchTranslation(text, targetLanguage),
    enabled,
  });

  return { data, isLoading, isError };
};
