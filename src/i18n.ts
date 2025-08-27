import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'ko',
  fallbackLng: 'en',
  resources: {
    ko: {
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
            '진단 결과를 바탕으로 생성된 개인 맞춤형 정착 가이드를 확인해보세요.',
          categories: {
            administration: {
              title: '나만의 행정 로드맵',
              description:
                '비자, 건강 보험 및 등록에 대한 단계별 가이드를 받으세요.',
            },
            travel: {
              title: '낯선 한국, 나만의 아지트로 만들기',
              description:
                '관광객이 아닌 현지인으로 거듭나기 위한 필수 미션을 하나씩 완료해보세요.',
            },
            language: {
              title: '안녕하세요! 한국어와 친해지기',
              description:
                '한글부터 시작해 자연스러운 대화까지, 차근차근 따라오면 한국어 실력이 쑥쑥 늘 거예요.',
            },
            career: {
              title: '글로벌 인재를 위한 K-커리어',
              description:
                '당신의 전문성을 한국에서 펼칠 수 있도록, 취업의 모든 단계를 함께 준비해 드립니다.',
            },
          },
          stepFeedback: {
            title: '{{stepTitle}} 단계를 완료했어요!',
            description: '이 단계에 대한 피드백을 남겨주세요.',
            bad: '별로예요',
            good: '좋아요',
          },
          milestoneFeedback: {
            button: '피드백만 남겨도 포인트가 쏙! 📝🎁',
            title: '소중한 의견을 듣고 싶어요!',
            description: '마일스톤에 대한 피드백을 남겨주세요.',
            placeholder:
              '로드맵 내용, 전문성, 유용성 등을 강조해서 작성하면 좋아요.',
          },
          progress: '로드맵 완주까지 {{progress}}% 남았어요!',
        },
        guide: {
          title: '나의 정착 가이드',
          description:
            '낯선 곳에서의 시작, 가이드의 자격은 블록체인에 맡겨두세요. 검증된 전문가의 프로필을 둘러보고 가장 끌리는 사람과 새로운 여정을 시작해봐요.',
          matchingCount: '{{ guideExpCount }}회 매칭 경력',
          location: '활동 지역',
          specialty: '전문 분야',
          language: '가능 언어',
          matchingExpertise: '가이드 매칭 경력',
          matchingUnit: '{{ guideExpCount }}회',
          rating: {
            title: '가이드 평가 기준',
            description:
              '아래 기준에 따라 평가해주세요. 예비 가이드는 최소 10개의 피드백 항목, <strong>4.0 이상</strong>의 평균 점수, 그리고 <strong>기준별 최소 3.0점</strong>이 필요합니다.',
            criteria: ['마일스톤 제목과 예비 가이드가 제공한 피드백'],
          },
          status: {
            title: '가이드 상태 레벨',
            description:
              '가이드님의 상태는 받은 평가 수와 피드백의 질에 따라 결정됩니다. 정식 가이드가 되려면 충분한 평가를 받고 모든 기준에서 높은 점수를 유지하세요.',
            steps: {
              inProgress: {
                label: 'In progress',
                requirements: ['아직 충족된 특정 요구 사항이 없습니다.'],
              },
              almost: {
                label: 'Almost',
                requirements: [
                  '총 10회 이상의 평가와 모든 피드백에 1회 이상의 평가가 있어야 합니다.',
                  '기준별 평균이 3.0 미만이거나 전체 평균이 4.0 미만입니다.',
                ],
              },
              formalGuide: {
                label: 'Formal guide',
                requirements: [
                  '총 10회 이상의 평가와 모든 피드백에 1회 이상의 평가가 있어야 합니다.',
                  '기준별 평균이 3.0 이상이고 전체 평균이 4.0 이상입니다.',
                ],
              },
            },
          },
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
    en: {
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
              title: 'Making Korea Your Own Sanctuary',
              description:
                'Complete these essential missions one by one to transform from a tourist into a true local!',
            },
            language: {
              title: 'Befriending Korean',
              description:
                'From the Korean alphabet, Hangeul, to natural conversations, your Korean skills will improve by leaps and bounds if you follow along step-by-step.',
            },
            career: {
              title: 'K-Career Guide for Global Talent',
              description:
                "We'll guide you through every step of the job-seeking process to help you build your professional career in Korea.",
            },
          },
          stepFeedback: {
            title: 'Step {{stepTitle}} Completed!',
            description: 'Please leave feedback for this step.',
            bad: 'Not good',
            good: 'Good',
          },
          milestoneFeedback: {
            button: 'Leave Feedback for Rewards! 📝🎁',
            title: 'Give us your valuable feedback!',
            description: 'Please leave feedback for the milestone.',
            placeholder:
              'It’s great to highlight the content, expertise, and usefulness of the roadmap.',
          },
          progress: "You're {{progress}}% closer to completing the roadmap!",
        },
        guide: {
          title: 'My Settlement Guide',
          description:
            'Starting anew in a foreign land? Leave the qualifications of your guide to the blockchain. Browse profiles of verified experts and embark on a new journey with the one that resonates most with you.',
          matchingCount: '{{ guideExpCount }} times matched experience',
          location: 'Location',
          specialty: 'Specialty',
          language: 'Language',
          matchingExpertise: 'Matching Expertise',
          matchingUnit: '{{ guideExpCount }} times',
          rating: {
            title: 'Guide Rating Criteria',
            description:
              'Please evaluate based on the criteria below. Prospective guides need at least 10 feedback entries, an average score of <strong>4.0+</strong>, and a minimum of <strong>3.0 per criterion</strong> for promotion.',
            criteria: ['Milestone title and the feedback given by a pre-guide'],
          },
          status: {
            title: 'Guide Status Levels',
            description:
              "Your status is determined by the number of ratings you've received and the quality of your feedback. To reach Formal Guide, earn enough ratings and maintain high scores across all criteria.",
            steps: {
              inProgress: {
                label: 'In Progress',
                requirements: ['No specific requirements met yet.'],
              },
              almost: {
                label: 'Almost',
                requirements: [
                  'At least 10 total ratings and every feedback has 1+ rating.',
                  'Average per criterion is below 3.0 or overall average is below 4.0.',
                ],
              },
              formalGuide: {
                label: 'Formal guide',
                requirements: [
                  'At least 10 total ratings and every feedback has 1+ rating.',
                  'Average per criterion ≥ 3.0 and overall average ≥ 4.0.',
                ],
              },
            },
          },
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
    zh: {
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
              title: '打造你的韩国专属天地',
              description:
                '请逐一完成这些必要任务，从一名游客蜕变为真正的当地人！',
            },
            language: {
              title: '与韩语交朋友',
              description:
                '从韩文字母入门，到进行自然的会话，只要您循序渐进地学习，韩语实力就会飞速提升。',
            },
            career: {
              title: '全球英才K-职场指南',
              description:
                '我们将与您一起准备求职的每一步，助您在韩国尽情施展专业才能。',
            },
          },
          stepFeedback: {
            title: '步骤 {{stepTitle}} 完成！',
            description: '请为此步骤留下反馈。',
            bad: '不好',
            good: '好',
          },
          milestoneFeedback: {
            button: '留下奖励反馈！ 📝🎁',
            title: '我们想听取您的宝贵意见！',
            description: '请为里程碑留下反馈。',
            placeholder: '强调路线图的内容、专业性和实用性是很好的。',
          },
          progress: '您距离完成路线图还有 {{progress}}%！',
        },
        guide: {
          title: '我的定居指南',
          description:
            '在异国他乡重新开始？将您的指南资格交给区块链。浏览经过验证的专家的个人资料，并与最能引起您共鸣的人一起踏上新的旅程。',
          matchingCount: '{{ guideExpCount }}次匹配经验',
          location: '活动地点',
          specialty: '专业领域',
          language: '可用语言',
          matchingExpertise: '匹配专业',
          matchingUnit: '{{ guideExpCount }}次',
          ratings: {
            title: '指南评分',
            description: '请根据以下标准对指南进行评分。',
            criteria: [
              '内容的准确性和相关性',
              '提供的信息的清晰度和可理解性',
              '对用户问题的响应速度和有效性',
            ],
          },
          status: {
            title: '指南状态级别',
            description:
              '您的状态由您收到的评分数量和反馈质量决定。要达到正式指南，请获得足够的评分并在所有标准上保持高分。',
            steps: {
              inProgress: {
                label: 'In progress',
                requirements: ['尚未满足任何具体要求。'],
              },
              almost: {
                label: 'Almost',
                requirements: [
                  '总评分至少10次，每个反馈都有1次以上的评分。',
                  '每个标准的平均值低于3.0或总体平均值低于4.0。',
                ],
              },
              formalGuide: {
                label: 'Formal guide',
                requirements: [
                  '总评分至少10次，每个反馈都有1次以上的评分。',
                  '每个标准的平均值≥3.0且总体平均值≥4.0。',
                ],
              },
            },
          },
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
    vi: {
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
              title: 'Biến Hàn Quốc xa lạ thành chốn riêng của bạn',
              description:
                'Trở thành người bản xứ, không còn là du khách! Hãy hoàn thành từng nhiệm vụ để bắt đầu hành trình của bạn.',
            },
            language: {
              title: 'Kết bạn với tiếng Hàn',
              description:
                'Bắt đầu từ bảng chữ cái Hangeul đến giao tiếp tự nhiên, chỉ cần bạn kiên trì học theo từng bước, trình độ tiếng Hàn của bạn sẽ tiến bộ vượt bậc.',
            },
            career: {
              title: 'Cẩm nang sự nghiệp K cho nhân tài toàn cầu',
              description:
                'Chúng tôi sẽ đồng hành cùng bạn trong mọi giai đoạn tìm việc, giúp bạn phát huy tối đa năng lực chuyên môn tại Hàn Quốc.',
            },
          },
          stepFeedback: {
            title: 'Bước {{stepTitle}} đã hoàn thành!',
            description: 'Vui lòng để lại phản hồi cho bước này.',
            bad: 'Không tốt',
            good: 'Tốt',
          },
          milestoneFeedback: {
            button: 'Để lại phản hồi cho phần thưởng! 📝🎁',
            title: 'Vui lòng để lại phản hồi quý giá của bạn!',
            description: 'Vui lòng để lại phản hồi cho cột mốc.',
            placeholder:
              'Nên làm nổi bật nội dung, chuyên môn và tính hữu ích của lộ trình.',
          },
          progress: 'Bạn còn {{progress}}% nữa là hoàn thành lộ trình!',
        },
        guide: {
          title: 'Hướng dẫn định cư của tôi',
          description:
            'Bắt đầu lại ở một vùng đất xa lạ? Hãy để các tiêu chuẩn của hướng dẫn viên của bạn cho blockchain. Duyệt qua hồ sơ của các chuyên gia đã được xác minh và bắt đầu một hành trình mới với người mà bạn cảm thấy đồng điệu nhất.',
          matchingCount: '{{ guideExpCount }} lần kinh nghiệm ghép đôi',
          location: 'Khu vực hoạt động',
          specialty: 'Chuyên môn',
          language: 'Ngôn ngữ',
          matchingExpertise: 'Kinh nghiệm ghép đôi',
          matchingUnit: '{{ guideExpCount }} lần',
          ratings: {
            title: 'Tiêu chí đánh giá hướng dẫn',
            description:
              'Vui lòng đánh giá dựa trên các tiêu chí dưới đây. Hướng dẫn viên tiềm năng cần ít nhất 10 mục phản hồi, điểm trung bình <strong>4.0+</strong>, và tối thiểu <strong>3.0 cho mỗi tiêu chí</strong> để được thăng chức.',
            criteria: [
              'Tiêu đề cột mốc và phản hồi từ hướng dẫn viên tiềm năng',
            ],
          },
          status: {
            title: 'Cấp độ trạng thái hướng dẫn',
            description:
              'Trạng thái của bạn được xác định bởi số lượng đánh giá bạn nhận được và chất lượng phản hồi của bạn. Để đạt được Hướng dẫn chính thức, hãy nhận đủ đánh giá và duy trì điểm cao trên tất cả các tiêu chí.',
            steps: {
              inProgress: {
                label: 'In progress',
                requirements: ['Chưa đáp ứng yêu cầu cụ thể nào.'],
              },
              almost: {
                label: 'Almost',
                requirements: [
                  'Tổng cộng ít nhất 10 đánh giá và mọi phản hồi đều có từ 1 đánh giá trở lên.',
                  'Trung bình mỗi tiêu chí dưới 3.0 hoặc trung bình tổng thể dưới 4.0.',
                ],
              },
              formalGuide: {
                label: 'Formal guide',
                requirements: [
                  'Tổng cộng ít nhất 10 đánh giá và mọi phản hồi đều có từ 1 đánh giá trở lên.',
                  'Trung bình mỗi tiêu chí ≥ 3.0 và trung bình tổng thể ≥ 4.0.',
                ],
              },
            },
          },
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
