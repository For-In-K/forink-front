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
        roadmap: {
          categories: {
            ADMINISTRATION: {
              description:
                'Get step-by-step guidance for visas, health insurance, and registration.',
            },
            TRAVEL: {
              description:
                'Discover essential places and tips before settling down.',
            },
            CAREER: {
              description:
                'Build your career path in Korea with resources and guidance.',
            },
          },
        },
      },
    },
    ko: {
      translation: {
        greeting: '안녕하세요',
        signin: '로그인',
        signout: '로그아웃',
        roadmap: {
          categories: {
            ADMINISTRATION: {
              description:
                '비자, 건강 보험 및 등록에 대한 단계별 가이드를 받으세요.',
            },
            TRAVEL: {
              description: '정착하기 전에 필수 장소와 팁을 알아보세요.',
            },
            CAREER: {
              description:
                '한국에서 경력 경로를 구축할 수 있는 리소스와 가이드를 제공해요.',
            },
          },
        },
      },
    },
  },
});

export default i18n;
