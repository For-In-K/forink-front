import axios from 'axios';
import { toast } from 'react-toastify';

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const TRANSLATION_URL = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;

export const fetchTranslation = async (
  text: string,
  targetLanguage: string
) => {
  if (!text || !targetLanguage) {
    return text;
  }

  try {
    const response = await axios.post(TRANSLATION_URL, {
      q: text,
      target: targetLanguage,
    });

    return response.data.data.translations[0].translatedText;
  } catch {
    throw new Error('Translation API error');
  }
};
