import { useState, useEffect } from 'react';
import {
  BookOpen,
  Award,
  CheckCircle,
  Circle,
  Lock,
  Unlock,
} from 'lucide-react';
import { toast } from 'react-toastify';

const languageRoadmap = {
  title: '한국어 학습 경로',
  subtitle: '단계별로 차근차근 따라오면서 한국어 실력을 쌓아보세요!',
  emoji: '📚',
  sections: [
    {
      id: 'basics',
      title: '한글 마스터 (왕초보 탈출)',
      description: '한국의 기본기를 다져보세요',
      total: 3,
      completed: 0,
      steps: [
        {
          id: 'hangul-basics',
          title: '자음과 모음 익히기',
          description:
            '가나다라... 노래로 즐겁게 익히고 기본 글자 만들어보기! 방탄소년단 노래 속 한국어도 읽어보세요!',
          completed: false,
        },
        {
          id: 'simple-words',
          title: '내 이름 한글로 써보기',
          description:
            '가장 간단한 방법은 한국 친구에게 써달라고 하는 거죠! 혹은 인터넷 변환기로 바꿔보고 의미까지 물어보는 게 좋아요.',
          completed: false,
        },
        {
          id: 'basic-reading',
          title: '읽거나 간단 없이세게',
          description:
            '마가, 운동, 축구 등 기본적인 단어들을 정확히 발음하면서 말하며 연습!',
          completed: false,
        },
      ],
    },
    {
      id: 'basic-korean',
      title: '생존 한국어 (기초 다지기)',
      description: '일상생활에 꼭 필요한 기본 한국어',
      total: 3,
      completed: 0,
      steps: [
        {
          id: 'greetings',
          title: '인사와 기본 표현',
          description: '안녕하세요, 감사합니다, 죄송합니다 등 기본 인사말',
          completed: false,
        },
        {
          id: 'numbers-time',
          title: '숫자와 시간 표현',
          description: '가격 묻기, 시간 말하기, 전화번호 등 일상 필수 숫자',
          completed: false,
        },
        {
          id: 'shopping-food',
          title: '쇼핑과 음식 주문',
          description: '마트에서 계산하기, 식당에서 주문하기 등 생활 한국어',
          completed: false,
        },
      ],
    },
    {
      id: 'intermediate',
      title: '레벨 업! (실전 회화)',
      description: '실제 상황에서 응용하고 증급',
      total: 4,
      completed: 0,
      steps: [
        {
          id: 'directions',
          title: '길 묻기와 대답하기',
          description: '지하철역, 버스정류장에서 길을 묻고 답할 수 있어요',
          completed: false,
        },
        {
          id: 'phone-calls',
          title: '전화로 예약하기',
          description: '병원, 미용실 예약부터 배달 주문까지',
          completed: false,
        },
        {
          id: 'work-korean',
          title: '직장에서 쓰는 한국어',
          description: '회사에서 자주 쓰는 표현과 이메일 작성법',
          completed: false,
        },
        {
          id: 'social-situations',
          title: '사회적 상황 대화',
          description: '동료들과의 대화, 모임에서의 소통 등',
          completed: false,
        },
      ],
    },
  ],
};

interface LanguageLevelCardProps {
  level: string;
  title: string;
  description: string;
  steps: Array<{
    id: string;
    title: string;
    description: string;
    completed: boolean;
  }>;
  completed: number;
  total: number;
  isUnlocked: boolean;
  onStepToggle: (stepId: string) => void;
}

const LanguageLevelCard = ({
  level,
  title,
  description,
  steps,
  completed,
  total,
  isUnlocked,
  onStepToggle,
}: LanguageLevelCardProps) => {
  return (
    <div
      className={`rounded-2xl border p-6 transition-all duration-300 ${
        isUnlocked
          ? 'border-emerald-200 bg-white shadow-sm hover:shadow-md'
          : 'border-gray-200 bg-gray-50 opacity-70'
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full ${
              isUnlocked ? 'bg-emerald-100' : 'bg-gray-200'
            }`}
          >
            {isUnlocked ? (
              <Unlock
                className={`h-6 w-6 ${completed === total ? 'text-emerald-600' : 'text-emerald-500'}`}
              />
            ) : (
              <Lock className="h-6 w-6 text-gray-400" />
            )}
          </div>
          <div>
            <h3
              className={`text-lg font-bold ${isUnlocked ? 'text-emerald-700' : 'text-gray-500'}`}
            >
              {level}: {title}
            </h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
        <div className="text-right">
          <span
            className={`text-sm font-medium ${isUnlocked ? 'text-emerald-600' : 'text-gray-400'}`}
          >
            {completed}/{total}
          </span>
          <div className="text-xs text-gray-500">완료</div>
        </div>
      </div>

      <div className="mb-4">
        <div className="h-2 w-full rounded-full bg-gray-200">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              isUnlocked ? 'bg-emerald-400' : 'bg-gray-300'
            }`}
            style={{ width: `${total > 0 ? (completed / total) * 100 : 0}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-start space-x-3 rounded-lg p-3 transition-all duration-200 ${
              isUnlocked
                ? 'cursor-pointer hover:bg-gray-50'
                : 'cursor-not-allowed'
            }`}
            onClick={() => isUnlocked && onStepToggle(step.id)}
          >
            <div className="mt-0.5">
              {step.completed ? (
                <CheckCircle className="h-5 w-5 text-emerald-500" />
              ) : (
                <Circle
                  className={`h-5 w-5 ${isUnlocked ? 'text-gray-400' : 'text-gray-300'}`}
                />
              )}
            </div>
            <div className="flex-1">
              <h4
                className={`text-sm font-medium ${
                  isUnlocked ? 'text-gray-800' : 'text-gray-500'
                }`}
              >
                {step.title}
              </h4>
              <p
                className={`mt-1 text-xs ${
                  isUnlocked ? 'text-gray-600' : 'text-gray-400'
                }`}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LANGUAGE_ROADMAP_STORAGE_KEY = 'language-roadmap-progress';

const loadProgressFromStorage = () => {
  try {
    const stored = localStorage.getItem(LANGUAGE_ROADMAP_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    toast.error('데이터를 불러오는 중 오류가 발생했어요');
    return null;
  }
};

const saveProgressToStorage = (roadmapData: any) => {
  try {
    localStorage.setItem(
      LANGUAGE_ROADMAP_STORAGE_KEY,
      JSON.stringify(roadmapData)
    );
  } catch (error) {
    toast.error('데이터를 저장하는 중 오류가 발생했어요');
  }
};

const LanguageRoadmapPage = () => {
  const [roadmap, setRoadmap] = useState(() => {
    const savedProgress = loadProgressFromStorage();
    if (savedProgress) {
      return {
        ...languageRoadmap,
        sections: languageRoadmap.sections.map((section) => {
          const savedSection = savedProgress.sections?.find(
            (s: any) => s.id === section.id
          );
          if (savedSection) {
            return {
              ...section,
              completed: savedSection.completed,
              steps: section.steps.map((step) => {
                const savedStep = savedSection.steps?.find(
                  (st: any) => st.id === step.id
                );
                return savedStep
                  ? { ...step, completed: savedStep.completed }
                  : step;
              }),
            };
          }
          return section;
        }),
      };
    }
    return languageRoadmap;
  });

  useEffect(() => {
    saveProgressToStorage(roadmap);
  }, [roadmap]);

  const handleStepToggle = (sectionId: string, stepId: string) => {
    setRoadmap((prev) => ({
      ...prev,
      sections: prev.sections.map((section) => {
        if (section.id === sectionId) {
          const updatedSteps = section.steps.map((step) =>
            step.id === stepId ? { ...step, completed: !step.completed } : step
          );
          const completedCount = updatedSteps.filter(
            (step) => step.completed
          ).length;

          return {
            ...section,
            steps: updatedSteps,
            completed: completedCount,
          };
        }
        return section;
      }),
    }));
  };

  const totalSteps = roadmap.sections.reduce(
    (acc, section) => acc + section.total,
    0
  );
  const completedSteps = roadmap.sections.reduce(
    (acc, section) => acc + section.completed,
    0
  );

  const isLevelUnlocked = (index: number) => {
    if (index === 0) return true;
    const previousSection = roadmap.sections[index - 1];
    return previousSection.completed === previousSection.total;
  };

  const overallProgress =
    totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0;
  const currentLevel = roadmap.sections.findIndex(
    (section) => section.completed < section.total
  );
  const completedLevels = roadmap.sections.filter(
    (section) => section.completed === section.total
  ).length;

  return (
    <div>
      <div className="flex w-full flex-col gap-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-emerald-200 bg-white/80 p-6 shadow-lg backdrop-blur-sm md:col-span-2">
            <div className="mb-4 flex items-center space-x-3">
              <BookOpen className="h-6 w-6 text-emerald-600" />
              <h2 className="text-xl font-bold text-gray-800">학습 진행도</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-700">
                  전체 진행도
                </span>
                <span className="text-2xl font-bold text-emerald-600">
                  {Math.round(overallProgress)}%
                </span>
              </div>
              <div className="h-4 w-full rounded-full bg-gray-200">
                <div
                  className="h-4 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 shadow-sm transition-all duration-700"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs font-medium text-gray-500">
                <span>
                  {completedSteps}/{totalSteps} 학습 완료
                </span>
                <span>
                  {completedLevels}/{roadmap.sections.length} 레벨 완료
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-white/80 p-6 shadow-md backdrop-blur-sm">
            <div className="mb-4 flex items-center space-x-3">
              <Award className="h-6 w-6 text-yellow-500" />
              <h2 className="text-lg font-bold text-gray-800">현재 레벨</h2>
            </div>
            <div className="text-center">
              {currentLevel === -1 ? (
                <>
                  <div className="mb-3 text-3xl font-bold text-yellow-500">
                    완료!
                  </div>
                  <div className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                    모든 레벨 완료
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-3 text-3xl font-bold text-emerald-600">
                    레벨 {currentLevel + 1}
                  </div>
                  <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
                    {roadmap.sections[currentLevel]?.title}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h2 className="mb-3 text-2xl font-bold text-gray-800">
              한국어 학습 경로
            </h2>
            <p className="mx-auto max-w-2xl text-base text-gray-600">
              단계별로 차근차근 따라오면서 한국어 실력을 쌓아보세요!
            </p>
          </div>

          {roadmap.sections.map((section, index) => {
            const isUnlocked = isLevelUnlocked(index);
            const levelNumber = index + 1;

            return (
              <div key={section.id} className="relative">
                {index < roadmap.sections.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 z-0 h-8 w-0.5 -translate-x-1/2 transform bg-gradient-to-b from-emerald-300 to-transparent" />
                )}

                <div className="relative z-1">
                  <LanguageLevelCard
                    level={`레벨 ${levelNumber}`}
                    title={section.title}
                    description={section.description}
                    steps={section.steps}
                    completed={section.completed}
                    total={section.total}
                    isUnlocked={isUnlocked}
                    onStepToggle={(stepId) =>
                      handleStepToggle(section.id, stepId)
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 shadow-lg">
          <h3 className="mb-5 flex items-center text-xl font-bold text-gray-800">
            💡 학습 팁
          </h3>
          <div className="grid gap-5 text-gray-700 md:grid-cols-2">
            <div className="rounded-lg bg-white/60 p-3">
              <strong className="text-blue-700">매일 조금씩:</strong> 하루
              15분이라도 꾸준히 학습하는 것이 중요해요.
            </div>
            <div className="rounded-lg bg-white/60 p-3">
              <strong className="text-blue-700">실전 연습:</strong> 배운 표현을
              실제 상황에서 사용해보세요.
            </div>
            <div className="rounded-lg bg-white/60 p-3">
              <strong className="text-blue-700">반복 학습:</strong> 어려운
              부분은 여러 번 돌아가서 복습하세요.
            </div>
            <div className="rounded-lg bg-white/60 p-3">
              <strong className="text-blue-700">문화 이해:</strong> 언어와 함께
              한국 문화도 함께 배워보세요.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageRoadmapPage;
