import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'kor',
  fallbackLng: 'eng',
  resources: {
    eng: {
      translation: {
        nav: {
          home: 'Home',
          roadmap: 'Roadmap',
          guide: 'Guide',
          board: 'Board',
        },
        greeting: 'Welcome',
        signin: 'Sign in',
        signout: 'Sign out',
        submit: 'Submit',
        request: 'Request a Guide',
        roadmap: {
          categories: {
            administration: {
              title: 'Administration Roadmap',
              description:
                'Get step-by-step guidance for visas, health insurance, and registration.',
            },
            travel: {
              title: 'Travel Roadmap',
              description:
                'Discover essential places and tips before settling down.',
            },
            language: {
              title: 'Language Roadmap',
              description:
                'Learn the basics of the Korean language to help you settle in.',
            },
            career: {
              title: 'Career Roadmap',
              description:
                'Build your career path in Korea with resources and guidance.',
            },
          },
          stepFeedback: {
            title: 'Step {{stepNumber}} Completed!',
            description: 'Please leave feedback for this step.',
            bad: 'Not good',
            good: 'Good',
          },
          milestoneFeedback: {
            button: 'Leave Feedback for Rewards!',
            title: 'All Steps Completed!',
            description: 'Please leave feedback for the milestone.',
            placeholder:
              'It’s great to highlight the content, expertise, and usefulness of the roadmap.',
          },
        },
      },
    },
    kor: {
      translation: {
        nav: {
          home: '홈',
          roadmap: '로드맵',
          guide: '가이드',
          board: '게시판',
        },
        greeting: '안녕하세요',
        signin: '로그인',
        signout: '로그아웃',
        submit: '제출하기',
        request: '가이드 매칭 요청',
        roadmap: {
          categories: {
            administration: {
              title: '나만의 행정 로드맵',
              description:
                '비자, 건강 보험 및 등록에 대한 단계별 가이드를 받으세요.',
            },
            travel: {
              title: '나만의 여행 로드맵',
              description: '정착하기 전에 필수 장소와 팁을 알아보세요.',
            },
            language: {
              title: '나만의 언어 로드맵',
              description: '한국어의 기초를 배워 정착하는 데 도움을 주세요.',
            },
            career: {
              title: '나만의 경력 로드맵',
              description:
                '한국에서 경력 경로를 구축할 수 있는 리소스와 가이드를 제공해요.',
            },
          },
          stepFeedback: {
            title: '단계 {{stepNumber}} 완료!',
            description: '이 단계에 대한 피드백을 남겨주세요.',
            bad: '별로예요',
            good: '좋아요',
          },
          milestoneFeedback: {
            button: '보상 피드백 남기기',
            title: '모든 단계 완료!',
            description: '마일스톤에 대한 피드백을 남겨주세요.',
            placeholder:
              '로드맵 내용, 전문성, 유용성 등을 강조해서 작성하면 좋아요.',
          },
        },
      },
    },
    chi: {
      translation: {
        nav: {
          home: '首页',
          roadmap: '路线图',
          guide: '指南',
          board: '论坛',
        },
        greeting: '欢迎',
        signin: '登录',
        signout: '登出',
        submit: '提交',
        request: '请求指南',
        roadmap: {
          categories: {
            administration: {
              title: '我的行政路线图',
              description: '获取有关签证、健康保险和注册的逐步指南。',
            },
            travel: {
              title: '我的旅行路线图',
              description: '在定居之前，发现必要的地方和提示。',
            },
            language: {
              title: '我的语言路线图',
              description: '学习韩语基础知识，以帮助您定居。',
            },
            career: {
              title: '我的职业路线图',
              description: '通过资源和指导在韩国建立你的职业生涯。',
            },
          },
          stepFeedback: {
            title: '步骤 {{stepNumber}} 完成！',
            description: '请为此步骤留下反馈。',
            bad: '不好',
            good: '好',
          },
          milestoneFeedback: {
            button: '留下奖励反馈！',
            title: '所有步骤已完成！',
            description: '请为里程碑留下反馈。',
            placeholder: '强调路线图的内容、专业性和实用性是很好的。',
          },
        },
      },
    },
    vie: {
      translation: {
        nav: {
          home: 'Trang chủ',
          roadmap: 'Lộ trình',
          guide: 'Hướng dẫn',
          board: 'Diễn đàn',
        },
        greeting: 'Chào mừng',
        signin: 'Đăng nhập',
        signout: 'Đăng xuất',
        submit: 'Gửi đi',
        request: 'Yêu cầu hướng dẫn',
        roadmap: {
          categories: {
            administration: {
              title: 'Quản trị',
              description:
                'Nhận hướng dẫn từng bước về visa, bảo hiểm y tế và đăng ký.',
            },
            travel: {
              title: 'Du lịch',
              description:
                'Khám phá những nơi cần thiết và mẹo trước khi định cư.',
            },
            language: {
              title: 'Ngôn ngữ',
              description:
                'Học các kiến thức cơ bản về tiếng Hàn để giúp bạn định cư.',
            },
            career: {
              title: 'Nghề nghiệp',
              description:
                'Xây dựng con đường sự nghiệp của bạn tại Hàn Quốc với các tài nguyên và hướng dẫn.',
            },
          },
          stepFeedback: {
            title: 'Bước {{stepNumber}} đã hoàn thành!',
            description: 'Vui lòng để lại phản hồi cho bước này.',
            bad: 'Không tốt',
            good: 'Tốt',
          },
          milestoneFeedback: {
            button: 'Để lại phản hồi cho phần thưởng!',
            title: 'Tất cả các bước đã hoàn thành!',
            description: 'Vui lòng để lại phản hồi cho cột mốc.',
            placeholder:
              'Nên làm nổi bật nội dung, chuyên môn và tính hữu ích của lộ trình.',
          },
        },
      },
    },
  },
});

export default i18n;
