import { useTranslationQuery } from '@hooks/useTranslation';

const GoogleTranslatedText = ({
  text,
  originalLang = 'ko',
}: {
  text: string;
  originalLang?: string;
}) => {
  const { translatedText, isLoading, isError } = useTranslationQuery(text, {
    originalLang,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error occurred</span>;
  }

  return translatedText;
};

export default GoogleTranslatedText;
