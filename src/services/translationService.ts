import axios from 'axios';

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const TRANSLATION_URL = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;

export const fetchTranslation = async (
  texts: string[],
  targetLanguage: string
) => {
  if (!texts || !targetLanguage) {
    return texts.map((text) => text);
  }

  try {
    const response = await axios.post(TRANSLATION_URL, {
      q: texts,
      target: targetLanguage,
    });

    return response.data.data.translations.map(
      (translation: { translatedText: string }) => translation.translatedText
    );
  } catch {
    throw new Error('Translation API error');
  }
};
