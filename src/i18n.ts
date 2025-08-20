import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'kor',
  fallbackLng: 'eng',
  resources: {
    kor: {
      translation: {
        slogan: '외국인을 위한 맞춤형 정착 지원 서비스',
        sloganDescription:
          '한국 생활 적응부터 까다로운 행정 절차까지, 당신의 성공적인 정착을 위한 모든 것을 함께 합니다.',
        nav: {
          home: '홈',
          roadmap: '로드맵',
          guide: '가이드',
          board: '게시판',
        },
        copySuccess: '복사 완료!',
        greeting: 'ForinK에 온 걸 환영해요!',
        greetingUser: '{{username}}님, 안녕하세요!',
        signin: '로그인',
        signout: '로그아웃',
        submit: '제출하기',
        request: '가이드 매칭 요청',
        error: {
          loading: '로딩 중 오류가 발생했어요',
        },
        home: {
          aiDocsTitle: 'ForinK의 최신 문서',
          aiDocsDescription:
            'AI 기능 도입으로 최신 문서를 확인할 수 있어요. 링크를 클릭하여 자세한 정보를 확인해보세요.',
          importantDocsTitle: '중요 행정 정보',
          importantDocsDescription:
            '놓치면 안되는 필수 행정 절차들을 확인하세요.',
          articleButton: '자세히 보기',
          startExam: '정착 진단 시작하기',
          findGuide: '가이드 찾기',
        },
        roadmap: {
          title: '나의 정착 로드맵',
          description:
            '진단 결과를 바탕으로 생성된 개인 맞춤형 정착 가이드예요.',
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
        guide: {
          matchingCount: '{{ guideExpCount }}회 매칭 경력',
          specialty: '전문 분야',
          language: '가능 언어',
          matchingExpertise: '가이드 매칭 경력',
          matchingUnit: '{{ guideExpCount }}회',
        },
        fori: {
          emailInquiry: '이메일 문의',
          emailCopy: '이메일 복사',
          greeting:
            '안녕하세요! 👋 도우미 Fori예요.\n한국 생활과 행정 절차에 대해 궁금한 점이 있으면 언제든 물어보세요.',
          faq1: '비자 연장 방법이 궁금해요.',
          faq2: '외국인등록증 발급은 어떻게 하나요?',
        },
        footer: {
          service: {
            title: '서비스',
            settlementExam: '정착 진단',
            recommendRoadmap: '로드맵 추천',
            matchGuide: '가이드 매칭',
          },
          support: {
            title: '지원',
            help: '도움말',
            contactUs: '문의하기',
            faq: '자주 묻는 질문',
          },
          contact: {
            title: '연락처',
            schedule: '평일 09:00-18:00',
          },
        },
      },
    },
    eng: {
      translation: {
        slogan: 'Tailored Settlement Support for Foreigners',
        sloganDescription:
          'From adapting to life in Korea to navigating complex administrative procedures, we are here to support your successful settlement.',
        nav: {
          home: 'Home',
          roadmap: 'Roadmap',
          guide: 'Guide',
          board: 'Board',
        },
        copySuccess: 'Copy successful!',
        greeting: 'Welcome to ForinK!',
        greetingUser: 'Hello, {{username}}!',
        signin: 'Sign in',
        signout: 'Sign out',
        submit: 'Submit',
        request: 'Request a Guide',
        error: {
          loading: 'An error occurred while loading',
        },
        home: {
          aiDocsTitle: 'Latest Documents with AI',
          aiDocsDescription:
            'Check the latest documents with AI features. Click the link to learn more.',
          importantDocsTitle: 'Important Administrative Information',
          importantDocsDescription:
            'Check essential administrative procedures you must not miss.',
          articleButton: 'Read More',
          startExam: 'Start Settlement Diagnosis',
          findGuide: 'Find a Guide',
        },
        roadmap: {
          title: 'My Settlement Roadmap',
          description:
            'This is your personalized roadmap for settling in Korea, based on your diagnosis results.',
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
        guide: {
          matchingCount: '{{ guideExpCount }} times matched experience',
          specialty: 'Specialty',
          language: 'Language',
          matchingExpertise: 'Matching Expertise',
          matchingUnit: '{{ guideExpCount }} times',
        },
        fori: {
          emailInquiry: 'Email Inquiry',
          emailCopy: 'Copy Email',
          greeting:
            'Hello! 👋 I am Fori, your assistant.\nFeel free to ask me anything about life in Korea and administrative procedures.',
          faq1: 'How do I extend my visa?',
          faq2: 'How do I get a foreigner registration card?',
        },
        footer: {
          service: {
            title: 'Service',
            settlementExam: 'Settlement Diagnosis',
            recommendRoadmap: 'Recommend Roadmap',
            matchGuide: 'Match Guide',
          },
          support: {
            title: 'Support',
            help: 'Help',
            contactUs: 'Contact Us',
            faq: 'FAQ',
          },
          contact: {
            title: 'Contact',
            schedule: 'Weekdays 09:00-18:00',
          },
        },
      },
    },
    chi: {
      translation: {
        slogan: '为外国人量身定制的定居支持服务',
        sloganDescription:
          '从适应韩国生活到应对复杂的行政程序，我们在这里支持您的成功定居。',
        nav: {
          home: '首页',
          roadmap: '路线图',
          guide: '指南',
          board: '论坛',
        },
        copySuccess: '复制成功！',
        greeting: '欢迎!',
        greetingUser: '{{username}}，欢迎！',
        signin: '登录',
        signout: '登出',
        submit: '提交',
        request: '请求指南',
        error: {
          loading: '加载时发生错误',
        },
        home: {
          aiDocsTitle: 'ForinK 最新文档',
          aiDocsDescription: '通过 AI 功能查看最新文档。点击链接了解更多信息。',
          importantDocsTitle: '重要行政信息',
          importantDocsDescription: '查看您必须了解的重要行政程序。',
          articleButton: '阅读更多',
          startExam: '开始定居诊断',
          findGuide: '查找指南',
        },
        roadmap: {
          title: '我的定居路线图',
          description: '这是基于您的诊断结果生成的个性化定居指南。',
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
        guide: {
          matchingCount: '{{ guideExpCount }}次匹配经验',
          specialty: '专业领域',
          language: '可用语言',
          matchingExpertise: '匹配专业',
          matchingUnit: '{{ guideExpCount }}次',
        },
        fori: {
          emailInquiry: '电子邮件咨询',
          emailCopy: '复制电子邮件',
          greeting:
            '你好！👋 我是 Fori，你的助手。\n如果你对韩国生活和行政程序有任何疑问，请随时问我。',
          faq1: '我如何延长我的签证？',
          faq2: '我如何获得外国人注册卡？',
        },
        footer: {
          service: {
            title: '服务',
            settlementExam: '定居诊断',
            recommendRoadmap: '推荐路线图',
            matchGuide: '匹配指南',
          },
          support: {
            title: '支持',
            help: '帮助',
            contactUs: '联系我们',
            faq: '常见问题解答',
          },
          contact: {
            title: '联系方式',
            schedule: '工作日 09:00-18:00',
          },
        },
      },
    },
    vie: {
      translation: {
        slogan: 'Hỗ trợ định cư dành riêng cho người nước ngoài',
        sloganDescription:
          'Từ việc thích nghi với cuộc sống ở Hàn Quốc đến việc điều hướng các thủ tục hành chính phức tạp, chúng tôi ở đây để hỗ trợ bạn định cư thành công.',
        nav: {
          home: 'Trang chủ',
          roadmap: 'Lộ trình',
          guide: 'Hướng dẫn',
          board: 'Diễn đàn',
        },
        copySuccess: 'Sao chép thành công!',
        greeting: 'Chào mừng!',
        greetingUser: 'Xin chào, {{username}}!',
        signin: 'Đăng nhập',
        signout: 'Đăng xuất',
        submit: 'Gửi đi',
        request: 'Yêu cầu hướng dẫn',
        error: {
          loading: 'Đã xảy ra lỗi khi tải',
        },
        home: {
          aiDocsTitle: 'Tài liệu mới nhất của ForinK',
          aiDocsDescription:
            'Xem tài liệu mới nhất với tính năng AI. Nhấp vào liên kết để tìm hiểu thêm.',
          importantDocsTitle: 'Thông tin hành chính quan trọng',
          importantDocsDescription:
            'Xem các thủ tục hành chính thiết yếu mà bạn không nên bỏ lỡ.',
          articleButton: 'Đọc thêm',
          startExam: 'Bắt đầu chẩn đoán định cư',
          findGuide: 'Tìm hướng dẫn',
        },
        roadmap: {
          title: 'Lộ trình định cư của tôi',
          description:
            'Đây là lộ trình cá nhân hóa dành cho bạn để định cư tại Hàn Quốc, dựa trên kết quả chẩn đoán của bạn.',
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
        guide: {
          matchingCount: '{{ guideExpCount }} lần kinh nghiệm ghép đôi',
          specialty: 'Chuyên môn',
          language: 'Ngôn ngữ',
          matchingExpertise: 'Kinh nghiệm ghép đôi',
          matchingUnit: '{{ guideExpCount }} lần',
        },
        fori: {
          emailInquiry: 'Yêu cầu qua email',
          emailCopy: 'Sao chép email',
          greeting:
            'Xin chào! 👋 Tôi là Fori, trợ lý của bạn.\nHãy thoải mái hỏi tôi bất cứ điều gì về cuộc sống ở Hàn Quốc và các thủ tục hành chính.',
          faq1: 'Tôi làm thế nào để gia hạn visa?',
          faq2: 'Tôi làm thế nào để nhận thẻ đăng ký người nước ngoài?',
        },
        footer: {
          service: {
            title: 'Dịch vụ',
            settlementExam: 'Chẩn đoán định cư',
            recommendRoadmap: 'Đề xuất lộ trình',
            matchGuide: 'Khớp hướng dẫn',
          },
          support: {
            title: 'Hỗ trợ',
            help: 'Trợ giúp',
            contactUs: 'Liên hệ với chúng tôi',
            faq: 'Câu hỏi thường gặp',
          },
          contact: {
            title: 'Liên hệ',
            schedule: 'Thứ Hai đến Thứ Sáu 09:00-18:00',
          },
        },
      },
    },
  },
});

export default i18n;
