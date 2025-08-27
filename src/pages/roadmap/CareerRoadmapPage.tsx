import { useState, useEffect } from 'react';
import {
  Briefcase,
  Target,
  TrendingUp,
  Calendar,
  CheckCircle,
  Circle,
  Clock,
} from 'lucide-react';

import { toast } from 'react-toastify';

const careerRoadmap = {
  title: '커리어 타임라인',
  subtitle: '단계별로 체계적으로 한국에서의 커리어를 쌓아가세요.',
  emoji: '💼',
  sections: [
    {
      id: 'preparation',
      title: '취업 준비 (기초 공사)',
      description: '한국 취업의 기본기를 단단하게 세우세요.',
      total: 3,
      completed: 0,
      priority: 'High Priority',
      time: '2-4주',
      steps: [
        {
          id: 'visa-check',
          title: '취업 가능 비자(VISA) 확인하기',
          description:
            '현재 보유한 비자로 취업이 가능한지 확인하고, 필요시 비자 변경 절차를 알아보세요.',
          tip: '정부 공식 웹사이트인 ‘하이코리아(HiKorea)’에서 체류 자격별 취업 활동 허용 범위를 정확하게 확인할 수 있습니다.',
          completed: false,
        },
        {
          id: 'korean-resume',
          title: '한국식 이력서 및 자기소개서(자소서) 작성하기',
          description:
            '한국 기업 문화에 맞는 형식과 내용으로 이력서와 자기소개서를 작성하여 본인의 강점을 어필하세요.',
          tip: '직무와 관련된 경험을 중심으로, 구체적인 성과를 수치(%, 개수 등)로 표현하면 신뢰도를 높일 수 있습니다. 이력서에 증명사진을 포함하는 경우가 많으니 미리 준비해두세요.',
          completed: false,
        },
        {
          id: 'job-platforms',
          title: '주요 구직 플랫폼 가입 및 프로필 등록하기',
          description:
            '잡코리아, 사람인, 링크드인 등 주요 채용 사이트에 가입하고 프로필을 완성도 높게 작성하세요.',
          tip: '잡코리아/사람인은 국내 기업 채용에, 링크드인은 외국계 기업이나 경력직에 강점이 있어요. IT 직군이라면 ‘원티드(Wanted)’나 ‘프로그래머스’도 확인해보세요.',
          completed: false,
        },
      ],
    },
    {
      id: 'job-search',
      title: '실전 구직 활동 (도약)',
      description: '본격적인 구직 활동을 시작하여 좋은 기회를 잡으세요.',
      total: 3,
      completed: 0,
      priority: 'Medium Priority',
      time: '1-3개월',
      steps: [
        {
          id: 'job-research',
          title: '관심 기업 리스트업 및 채용 공고 분석하기',
          description:
            '본인의 역량과 커리어 목표에 맞는 기업들을 찾고, 채용 공고의 자격 요건과 직무 내용을 꼼꼼히 분석하세요.',
          tip: '기업의 홈페이지, 최신 뉴스, 재무 정보 등을 통해 기업의 비전과 성장 가능성을 파악하면 지원할 기업을 선택하는 데 도움이 됩니다.',
          completed: false,
        },
        {
          id: 'networking',
          title: '업계 네트워킹 활동 참여하기',
          description:
            '관심 산업의 세미나, 컨퍼런스, 온라인 커뮤니티 등 네트워킹 이벤트에 참석하여 인맥을 넓히고 정보를 얻으세요.',
          tip: '링크드인이나 페이스북 그룹, ‘이벤터스’나 ‘온오프믹스’ 같은 플랫폼에서 다양한 업계 행사 정보를 찾아볼 수 있습니다.',
          completed: false,
        },
        {
          id: 'interview-prep',
          title: '면접 준비 및 스킬 연습하기',
          description:
            '자주 나오는 면접 질문에 대한 답변을 미리 준비하고, 실전처럼 말하는 연습을 통해 자신감을 키우세요.',
          tip: '‘1분 자기소개’, ‘지원 동기’, ‘자신의 장단점’, ‘마지막 할 말’은 거의 모든 면접에서 나오는 필수 질문이니 반드시 준비하세요.',
          completed: false,
        },
      ],
    },
    {
      id: 'career-growth',
      title: '성공적인 직장 생활 (안착)',
      description: '한국 직장 문화에 잘 적응하고 동료들과 협력하며 성장하세요.',
      total: 3,
      completed: 0,
      priority: 'Medium Priority',
      time: '지속적',
      steps: [
        {
          id: 'company-culture',
          title: '한국의 직장 문화 이해 및 적응하기',
          description:
            '직급 체계, 보고 라인, 회식 문화 등 한국 기업의 조직 문화를 이해하고 동료들과 긍정적인 관계를 형성하세요.',
          tip: '한국에서는 보통 직급이 높은 사람에게 먼저 인사하고 존댓말을 사용해요. 동료들과의 점심 식사나 티타임은 비공식적인 소통의 좋은 기회가 될 수 있습니다.',
          completed: false,
        },
        {
          id: 'skill-development',
          title: '지속적인 역량 개발 및 학습하기',
          description:
            '업무 관련 최신 트렌드를 익히고, 온/오프라인 교육을 통해 직무에 필요한 스킬을 지속적으로 발전시키세요.',
          tip: '정부에서 지원하는 ‘국민내일배움카드’ 제도를 활용하면 다양한 훈련 과정을 저렴하게 수강할 수 있습니다. 외국인도 조건에 따라 신청 가능해요.',
          completed: false,
        },
        {
          id: 'performance-review',
          title: '성과 관리 및 커리어 목표 설정하기',
          description:
            '정기적으로 본인의 업무 성과를 돌아보고, 상사와의 면담을 통해 피드백을 받으며 다음 커리어 목표를 구체화하세요.',
          tip: '본인의 업무 성과를 구체적인 데이터나 사례로 정리해두면 연말 평가나 연봉 협상 시 유용하게 활용할 수 있습니다.',
          completed: false,
        },
      ],
    },
  ],
};

interface CareerTimelineStepProps {
  id: string;
  title: string;
  description: string;
  priority: string;
  time: string;
  steps: Array<{
    id: string;
    title: string;
    description: string;
    completed: boolean;
  }>;
  completed: number;
  total: number;
  isActive: boolean;
  onStepToggle: (stepId: string) => void;
}

const CareerTimelineStep = ({
  id,
  title,
  description,
  priority,
  time,
  steps,
  completed,
  total,
  isActive,
  onStepToggle,
}: CareerTimelineStepProps) => {
  const isCompleted = completed === total;

  const priorityColors = {
    'High Priority': 'bg-red-100 text-red-700',
    'Medium Priority': 'bg-yellow-100 text-yellow-700',
    'Low Priority': 'bg-green-100 text-green-700',
  };

  return (
    <div className="relative">
      <div className="absolute top-12 left-4 h-full w-0.5 bg-gray-200 sm:top-16 sm:left-6" />
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full border-2 sm:h-12 sm:w-12 ${
            isCompleted
              ? 'border-purple-500 bg-purple-500'
              : isActive
                ? 'border-purple-500 bg-white'
                : 'border-gray-300 bg-white'
          }`}
        >
          {isCompleted ? (
            <CheckCircle className="h-4 w-4 text-white sm:h-6 sm:w-6" />
          ) : (
            <Circle
              className={`h-4 w-4 sm:h-6 sm:w-6 ${isActive ? 'text-purple-500' : 'text-gray-400'}`}
            />
          )}
        </div>

        <div className="flex-1 pb-6 sm:pb-8">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-3 flex flex-col gap-2 sm:mb-4 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
                {title}
              </h3>
              <div className="flex items-center justify-between sm:block sm:text-right">
                <span className="text-sm font-medium text-gray-600">
                  {completed}/{total} 완료
                </span>
              </div>
            </div>

            <p className="mb-3 text-sm text-gray-600 sm:mb-4">{description}</p>

            <div className="mb-3 flex flex-wrap items-center gap-2 sm:mb-4">
              <span
                className={`rounded-full px-2 py-1 text-xs font-medium ${
                  priorityColors[priority as keyof typeof priorityColors] ||
                  priorityColors['Medium Priority']
                }`}
              >
                {priority}
              </span>
              <span className="flex items-center space-x-1 text-xs text-gray-500">
                <Clock className="h-3 w-3" />
                <span>{time}</span>
              </span>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex cursor-pointer items-start space-x-3 rounded-lg p-2 transition-colors hover:bg-gray-50 active:bg-gray-100"
                  onClick={() => onStepToggle(step.id)}
                >
                  <div className="mt-0.5">
                    {step.completed ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <Circle className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-800">
                      {step.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CAREER_ROADMAP_STORAGE_KEY = 'career-roadmap-progress';

const loadProgressFromStorage = () => {
  try {
    const stored = localStorage.getItem(CAREER_ROADMAP_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    toast.error('데이터를 불러오는 중 오류가 발생했어요');
    return null;
  }
};

const saveProgressToStorage = (roadmapData: any) => {
  try {
    localStorage.setItem(
      CAREER_ROADMAP_STORAGE_KEY,
      JSON.stringify(roadmapData)
    );
  } catch (error) {
    toast.error('데이터를 저장하는 중 오류가 발생했어요');
  }
};

const CareerRoadmapPage = () => {
  const [roadmap, setRoadmap] = useState(() => {
    const savedProgress = loadProgressFromStorage();
    if (savedProgress) {
      return {
        ...careerRoadmap,
        sections: careerRoadmap.sections.map((section) => {
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
    return careerRoadmap;
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

  const currentPhase = roadmap.sections.findIndex(
    (section) => section.completed < section.total
  );

  const overallProgress =
    totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0;
  const completedPhases = roadmap.sections.filter(
    (section) => section.completed === section.total
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 grid gap-4 sm:mb-8 sm:gap-6 md:grid-cols-4">
          <div className="col-span-full rounded-2xl border border-purple-200 bg-white/80 p-4 shadow-lg backdrop-blur-sm sm:p-6 md:col-span-2">
            <div className="mb-3 flex items-center space-x-2 sm:mb-4 sm:space-x-3">
              <Target className="h-5 w-5 text-purple-600 sm:h-6 sm:w-6" />
              <h2 className="text-lg font-bold text-gray-800 sm:text-xl">
                커리어 진행도
              </h2>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-gray-700 sm:text-lg">
                  전체 완료율
                </span>
                <span className="text-xl font-bold text-purple-600 sm:text-2xl">
                  {Math.round(overallProgress)}%
                </span>
              </div>
              <div className="h-3 w-full rounded-full bg-gray-200 sm:h-4">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-sm transition-all duration-700 sm:h-4"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
              <div className="text-xs font-medium text-gray-500">
                {completedSteps}/{totalSteps} 단계 완료
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-purple-200 bg-white/80 p-4 shadow-lg backdrop-blur-sm sm:p-6">
            <div className="mb-3 flex items-center space-x-2 sm:mb-4 sm:space-x-3">
              <Calendar className="h-5 w-5 text-blue-500 sm:h-6 sm:w-6" />
              <h2 className="text-base font-bold text-gray-800 sm:text-lg">
                현재 단계
              </h2>
            </div>
            <div className="text-center">
              {currentPhase === -1 ? (
                <>
                  <div className="mb-2 text-2xl font-bold text-green-600 sm:mb-3 sm:text-3xl">
                    완료!
                  </div>
                  <div className="inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 sm:px-3">
                    모든 단계 완료
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-2 text-2xl font-bold text-purple-600 sm:mb-3 sm:text-3xl">
                    {currentPhase + 1}단계
                  </div>
                  <div className="inline-block rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800 sm:px-3">
                    <span className="hidden sm:inline">
                      {roadmap.sections[currentPhase]?.title}
                    </span>
                    <span className="sm:hidden">진행 중</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-purple-200 bg-white/80 p-4 shadow-lg backdrop-blur-sm sm:p-6">
            <div className="mb-3 flex items-center space-x-2 sm:mb-4 sm:space-x-3">
              <TrendingUp className="h-5 w-5 text-green-500 sm:h-6 sm:w-6" />
              <h2 className="text-base font-bold text-gray-800 sm:text-lg">
                완료한 단계
              </h2>
            </div>
            <div className="text-center">
              <div className="mb-2 text-2xl font-bold text-green-600 sm:mb-3 sm:text-3xl">
                {completedPhases}
              </div>
              <div className="text-xs text-gray-500">
                / {roadmap.sections.length} 단계
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
          <div className="border-b border-gray-200 p-4 sm:p-6">
            <div className="mb-2 flex items-center space-x-2 sm:space-x-3">
              <Briefcase className="h-5 w-5 text-purple-600 sm:h-6 sm:w-6" />
              <h2 className="text-lg font-bold text-gray-800 sm:text-xl">
                커리어 타임라인
              </h2>
            </div>
            <p className="text-sm text-gray-600 sm:text-base">
              단계별로 체계적으로 한국에서의 커리어를 쌓아가세요
            </p>
          </div>
          <div className="p-4 sm:p-6">
            <div className="space-y-6 sm:space-y-8">
              {roadmap.sections.map((section, index) => {
                const isActive = index === currentPhase;

                return (
                  <CareerTimelineStep
                    key={section.id}
                    id={section.id}
                    title={section.title}
                    description={section.description}
                    priority={section.priority}
                    time={section.time}
                    completed={section.completed}
                    total={section.total}
                    isActive={isActive}
                    steps={section.steps}
                    onStepToggle={(stepId) =>
                      handleStepToggle(section.id, stepId)
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 p-4 shadow-lg sm:p-6">
            <h3 className="mb-3 flex items-center text-base font-semibold text-blue-800 sm:mb-4 sm:text-lg">
              💼 커리어 성공 팁
            </h3>
            <ul className="space-y-1.5 text-xs text-blue-700 sm:space-y-2 sm:text-sm">
              <li>• 한국 비즈니스 문화를 이해하고 적응하세요</li>
              <li>• 지속적인 네트워킹으로 인맥을 확장하세요</li>
              <li>• 업계 트렌드를 파악하고 스킬을 업데이트하세요</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-green-100 p-4 shadow-lg sm:p-6">
            <h3 className="mb-3 flex items-center text-base font-semibold text-green-800 sm:mb-4 sm:text-lg">
              🎯 면접 준비 핵심
            </h3>
            <ul className="space-y-1.5 text-xs text-green-700 sm:space-y-2 sm:text-sm">
              <li>• 1분 자기소개는 완벽하게 준비하세요</li>
              <li>• 지원 동기를 구체적으로 설명할 수 있어야 해요</li>
              <li>• 한국어 비즈니스 용어를 익혀두세요</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerRoadmapPage;
