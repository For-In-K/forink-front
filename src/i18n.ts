import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        greeting: 'Welcome',
        signin: 'Sign in',
        signout: 'Sign out',
      },
    },
    ko: {
      translation: {
        greeting: '안녕하세요',
        signin: '로그인',
        signout: '로그아웃',
      },
    },
  },
});

export default i18n;
