import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'eng',
  fallbackLng: 'eng',
  resources: {
    eng: {
      translation: {
        greeting: 'Welcome',
        signin: 'Sign in',
        signout: 'Sign out',
        submit: 'Submit',
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
    kor: {
      translation: {
        greeting: '안녕하세요',
        signin: '로그인',
        signout: '로그아웃',
        submit: '제출',
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
    chi: {
      translation: {
        greeting: '欢迎',
        signin: '登录',
        signout: '登出',
        submit: '提交',
        roadmap: {
          categories: {
            ADMINISTRATION: {
              description: '获取有关签证、健康保险和注册的逐步指南。',
            },
            TRAVEL: {
              description: '在定居之前，发现必要的地方和提示。',
            },
            CAREER: {
              description: '通过资源和指导在韩国建立你的职业生涯。',
            },
          },
        },
      },
    },
    vie: {
      translation: {
        greeting: 'Chào mừng',
        signin: 'Đăng nhập',
        signout: 'Đăng xuất',
        submit: 'Gửi đi',
        roadmap: {
          categories: {
            ADMINISTRATION: {
              description:
                'Nhận hướng dẫn từng bước về visa, bảo hiểm y tế và đăng ký.',
            },
            TRAVEL: {
              description:
                'Khám phá những nơi cần thiết và mẹo trước khi định cư.',
            },
            CAREER: {
              description:
                'Xây dựng con đường sự nghiệp của bạn tại Hàn Quốc với các tài nguyên và hướng dẫn.',
            },
          },
        },
      },
    },
  },
});

export default i18n;
