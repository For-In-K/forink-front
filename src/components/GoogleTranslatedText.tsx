import { useTranslationQuery } from '@hooks/useTranslation';

const GoogleTranslatedText = (text: string, { originalLang = 'kor' } = {}) => {
  const { data, isLoading, isError } = useTranslationQuery(text, {
    originalLang,
  });

  return data;
};
