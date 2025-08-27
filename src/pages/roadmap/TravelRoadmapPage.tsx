import { useState, useEffect } from 'react';
import { Map, Compass, MapPin } from 'lucide-react';
import { toast } from 'react-toastify';

const travelRoadmap = {
  title: '나만의 한국 모험 지도',
  subtitle: '지도의 핀을 클릭해서 각 미션을 완료해보세요!',
  emoji: '🗺️',
  sections: [
    {
      id: 'basics',
      title: '생활 기반 다지기',
      description: '한국 생활의 기본기를 다져보세요.',
      total: 5,
      completed: 0,
      color: 'orange',
      steps: [
        {
          id: 'transport-card',
          title: '교통카드 구매 및 충전하기',
          description:
            '가까운 편의점에서 티머니(T-money)나 캐시비(Cashbee) 카드를 쉽게 구매하고 충전할 수 있어요.',
          tip: '모바일 앱(티머니페이, 삼성페이 등)을 이용하면 실물 카드 없이 스마트폰으로 대중교통을 이용하고 충전도 간편하게 할 수 있어요.',
          completed: false,
        },
        {
          id: 'navigation-apps',
          title: '네이버/카카오맵 설치하고 길찾기 마스터하기',
          description:
            '한국에서는 구글맵보다 두 앱이 훨씬 정확해요. 대중교통 실시간 도착 정보까지 알려주니 필수입니다.',
          tip: '자주 가는 장소나 맛집, 명소를 즐겨찾기 해두면 나만의 지도를 만들 수 있어요. 지하철 노선도를 통해 환승 경로를 미리 파악하는 것도 편리해요.',
          completed: false,
        },
        {
          id: 'community-center',
          title: '가까운 주민센터(행정복지센터) 위치 확인하기',
          description:
            '전입신고, 각종 증명서 발급 등 외국인 등록 후 필요한 행정 업무를 처리하는 곳이에요.',
          tip: '방문 전 ‘정부24’ 웹사이트나 앱에서 필요한 서류가 무엇인지 미리 확인하면 시간을 절약할 수 있어요.',
          completed: false,
        },
        {
          id: 'supermarket',
          title: '대형마트(이마트/롯데마트/홈플러스) 방문하기',
          description:
            '식료품부터 생필품까지 다양한 상품을 저렴하게 구매할 수 있는 곳이에요. 한국의 다채로운 식재료를 구경해보세요.',
          tip: '저녁 늦은 시간에 방문하면 신선식품(초밥, 샐러드, 반찬 등)을 할인된 가격에 구매할 수 있는 ‘마감 세일’을 활용해보세요!',
          completed: false,
        },
        {
          id: 'sim-card',
          title: '한국 유심(USIM) 또는 이심(eSIM) 개통하기',
          description:
            '공항이나 시내 통신사 대리점에서 쉽게 개통할 수 있어요. 한국에서는 본인 인증에 휴대폰 번호가 필수적입니다.',
          tip: '단기 여행이라면 선불 유심을, 장기 체류라면 통신사 약정 요금제를 알아보세요. ‘알뜰폰’ 요금제를 이용하면 더 저렴합니다.',
          completed: false,
        },
      ],
    },
    {
      id: 'culture',
      title: '진짜 한국 문화 체험하기',
      description: '책에서만 보던 한국 문화를 직접 경험해보세요.',
      total: 5,
      completed: 0,
      color: 'green',
      steps: [
        {
          id: 'traditional-market',
          title: '전통시장 방문해서 길거리 음식 맛보기',
          description:
            '활기 넘치는 시장에서 떡볶이, 튀김, 김밥 등 맛있는 길거리 음식을 즐겨보세요. 저렴한 가격은 덤이에요!',
          tip: '서울 광장시장의 빈대떡, 부산 부평깡통시장의 유부주머니가 유명해요. 현금만 받는 가게도 있으니 약간의 현금을 챙겨가세요.',
          completed: false,
        },
        {
          id: 'hanbok-palace',
          title: '한복 입고 고궁(경복궁 등) 나들이하기',
          description:
            '고궁 근처에서 한복을 대여해 입고 아름다운 궁궐을 배경으로 인생 사진을 남겨보세요.',
          tip: '한복을 입으면 경복궁, 창덕궁 등 서울의 4대 궁과 종묘, 조선왕릉 입장이 무료입니다!',
          completed: false,
        },
        {
          id: 'jjimjilbang',
          title: '찜질방에서 식혜와 구운 계란 먹기',
          description:
            '뜨끈한 방에서 땀을 빼며 피로를 풀고, 다양한 시설을 즐길 수 있는 한국의 독특한 사우나 문화를 체험해보세요.',
          tip: '수건으로 ‘양머리’를 만들어 쓰는 건 찜질방의 상징과도 같아요. 유튜브에서 양머리 만드는 법을 미리 배워가면 더 재미있을 거예요.',
          completed: false,
        },
        {
          id: 'hangang-chimaek',
          title: '한강 공원에서 치맥 즐기기',
          description:
            '날씨 좋은 저녁, 한강 변에 돗자리를 펴고 앉아 배달 앱으로 치킨과 맥주를 시켜보세요. 서울의 야경과 함께 낭만적인 시간을 보낼 수 있어요.',
          tip: '여의나루역 근처 공원이 가장 유명해요. 치킨 배달 전단지를 나눠주는 곳도 많고, 편의점에서 즉석 라면을 끓여 먹는 것도 특별한 경험입니다.',
          completed: false,
        },
        {
          id: 'noraebang',
          title: '노래방 가서 최신 K-POP 열창하기',
          description:
            '혼자 가도 즐거운 코인 노래방부터 친구들과 함께 가는 일반 노래방까지, 한국인의 대표적인 여가 활동을 즐겨보세요.',
          tip: '노래방 리모컨에서 ‘인기차트’를 누르면 요즘 한국에서 가장 인기 있는 곡들을 확인할 수 있어요. 점수를 잘 받으면 서비스 시간을 더 주기도 해요!',
          completed: false,
        },
      ],
    },
    {
      id: 'exploration',
      title: '대한민국 둘러보기',
      description: '서울을 벗어나 한국의 아름다운 곳들을 여행해보세요.',
      total: 4,
      completed: 0,
      color: 'blue',
      steps: [
        {
          id: 'ktx-travel',
          title: 'KTX/SRT 예매하고 당일치기 여행 떠나기',
          description:
            '한국의 빠른 고속철도를 이용해 서울에서 부산까지 2시간 반 만에 도착할 수 있어요. 앱(코레일톡, SRT)으로 쉽게 예매하세요.',
          tip: '미리 예매할수록 할인율이 높은 좌석을 구할 수 있어요. 창가 쪽 좌석을 선택하면 한국의 다채로운 풍경을 감상하며 여행할 수 있습니다.',
          completed: false,
        },
        {
          id: 'historic-cities',
          title: '역사 도시 방문하기 (경주, 전주 등)',
          description:
            '신라의 수도였던 경주에서 불국사와 석굴암을, 조선의 정취가 가득한 전주에서 한옥마을과 비빔밥의 맛을 느껴보세요.',
          tip: '경주에서는 자전거를 빌려 시내 유적지를 둘러보는 것을 추천해요. 전주 한옥마을에서는 한복을 입고 고즈넉한 골목길을 걸어보세요.',
          completed: false,
        },
        {
          id: 'beach-visit',
          title: '특색있는 바다 보러 가기',
          description:
            '깨끗하고 푸른 동해(강릉, 속초), 갯벌 체험이 가능한 서해(태안, 보령), 아름다운 섬들이 많은 남해(여수, 통영)는 각기 다른 매력을 가지고 있어요.',
          tip: '여름에는 부산 해운대나 강릉 경포대 해수욕장이 인기 명소입니다. 겨울 바다 역시 특유의 낭만적인 분위기를 느낄 수 있어 좋아요.',
          completed: false,
        },
        {
          id: 'jeju-island',
          title: '제주도 여행하기',
          description:
            '화산 활동으로 만들어진 독특한 자연 경관과 에메랄드빛 바다를 자랑하는 한국 최대의 섬입니다. 비행기로 1시간이면 도착해요.',
          tip: '렌터카를 빌려 해안도로를 따라 드라이브하는 것을 추천해요. 동쪽은 일출, 서쪽은 일몰 명소가 많으니 숙소 위치를 정할 때 참고하세요.',
          completed: false,
        },
      ],
    },
  ],
};

interface TravelMapStepProps {
  id: string;
  title: string;
  description: string;
  tip: string;
  completed: boolean;
  position: { x: number; y: number };
  onToggle: (stepId: string) => void;
}

const TravelMapStep = ({
  id,
  title,
  description,
  tip,
  completed,
  position,
  onToggle,
}: TravelMapStepProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const isTopHalf = position.y < 40;
  const isLeftEdge = position.x < 25;
  const isRightEdge = position.x > 75;

  const getTooltipPositionClass = () => {
    let positionClass = '';

    if (isTopHalf) {
      positionClass += 'top-full mt-3 ';
    } else {
      positionClass += 'bottom-full mb-3 ';
    }

    if (isLeftEdge) {
      positionClass += 'left-0 ';
    } else if (isRightEdge) {
      positionClass += 'right-0 ';
    } else {
      positionClass += 'left-1/2 -translate-x-1/2 ';
    }

    return positionClass;
  };

  const getArrowPositionClass = () => {
    let arrowClass = 'absolute h-0 w-0 border-4 border-transparent ';

    if (isTopHalf) {
      arrowClass += 'bottom-full border-b-white ';
    } else {
      arrowClass += 'top-full border-t-white ';
    }

    if (isLeftEdge) {
      arrowClass += 'left-4 ';
    } else if (isRightEdge) {
      arrowClass += 'right-4 ';
    } else {
      arrowClass += 'left-1/2 -translate-x-1/2 ';
    }

    return arrowClass;
  };

  return (
    <div
      className="group absolute -translate-x-1/2 -translate-y-1/2 transform cursor-pointer"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        zIndex: isHovered ? 50 : 10,
      }}
      onClick={() => onToggle(id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative h-10 w-10 rounded-full border-2 shadow-lg transition-all duration-300 ${
          completed
            ? 'scale-110 border-orange-600 bg-orange-500'
            : 'border-orange-400 bg-white hover:scale-105'
        }`}
      >
        <MapPin
          className={`absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transform ${
            completed ? 'text-white' : 'text-orange-500'
          }`}
        />
      </div>

      <div
        className={`pointer-events-none absolute transition-all duration-300 ${
          isHovered ? 'visible opacity-100' : 'invisible opacity-0'
        } ${getTooltipPositionClass()}`}
        style={{ zIndex: 100 }}
      >
        <div className="w-80 max-w-sm rounded-lg border border-gray-100 bg-white p-4 shadow-2xl">
          <h4 className="mb-2 text-sm font-semibold text-gray-800">{title}</h4>
          <p className="mb-3 text-xs leading-relaxed text-gray-600">
            {description}
          </p>
          <div className="rounded-sm border border-orange-100 bg-orange-50 p-2.5">
            <p className="text-xs leading-relaxed text-orange-700">💡 {tip}</p>
          </div>

          <div className={getArrowPositionClass()} />
        </div>
      </div>
    </div>
  );
};

const TRAVEL_ROADMAP_STORAGE_KEY = 'travel-roadmap-progress';

const loadProgressFromStorage = () => {
  try {
    const stored = localStorage.getItem(TRAVEL_ROADMAP_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    toast.error('데이터를 불러오는 중 오류가 발생했어요');
    return null;
  }
};

const saveProgressToStorage = (roadmapData: any) => {
  try {
    localStorage.setItem(
      TRAVEL_ROADMAP_STORAGE_KEY,
      JSON.stringify(roadmapData)
    );
  } catch (error) {
    toast.error('데이터를 저장하는 중 오류가 발생했어요');
  }
};

const TravelRoadmapPage = () => {
  const [roadmap, setRoadmap] = useState(() => {
    const savedProgress = loadProgressFromStorage();
    if (savedProgress) {
      return {
        ...travelRoadmap,
        sections: travelRoadmap.sections.map((section) => {
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
    return travelRoadmap;
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

  const getStepPositions = () => {
    const positions = [
      // STEP 1: 생활 기반 다지기 (좌측 영역, 5개)
      { x: 12, y: 28 }, // 교통카드 구매 및 충전하기
      { x: 23, y: 22 }, // 네이버/카카오맵 설치하고 길찾기 마스터하기
      { x: 18, y: 38 }, // 가까운 주민센터(행정복지센터) 위치 확인하기
      { x: 28, y: 45 }, // 대형마트(이마트/롯데마트/홈플러스) 방문하기
      { x: 15, y: 55 }, // 한국 유심(USIM) 또는 이심(eSIM) 개통하기

      // STEP 2: 진짜 한국 문화 체험하기 (중앙 영역, 5개)
      { x: 42, y: 25 }, // 전통시장 방문해서 길거리 음식 맛보기
      { x: 55, y: 18 }, // 한복 입고 고궁(경복궁 등) 나들이하기
      { x: 38, y: 42 }, // 찜질방에서 식혜와 구운 계란 먹기
      { x: 52, y: 38 }, // 한강 공원에서 치맥 즐기기
      { x: 45, y: 58 }, // 노래방 가서 최신 K-POP 열창하기

      // STEP 3: 대한민국 둘러보기 (우측 영역, 4개)
      { x: 72, y: 32 }, // KTX/SRT 예매하고 당일치기 여행 떠나기
      { x: 85, y: 28 }, // 역사 도시 방문하기 (경주, 전주 등)
      { x: 78, y: 48 }, // 특색있는 바다 보러 가기
      { x: 88, y: 65 }, // 제주도 여행하기
    ];
    return positions;
  };

  const allSteps = roadmap.sections.flatMap((section) =>
    section.steps.map((step) => ({ ...step, sectionId: section.id }))
  );
  const positions = getStepPositions();

  return (
    <div className="flex w-full flex-col gap-10">
      <div>
        <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full">
              <Compass className="text-sm text-orange-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">여행 진행 상황</h2>
          </div>
          <div className="mb-4 flex items-center justify-between">
            <span className="text-lg font-medium text-gray-700">
              전체 진행도
            </span>
            <span className="text-lg font-bold text-orange-600">
              {completedSteps}/{totalSteps} 완료
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-100">
            <div
              className="h-2 rounded-full bg-orange-400 transition-all duration-500"
              style={{
                width: `${totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0}%`,
              }}
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm">
          <div className="border-b border-orange-100 bg-white p-6">
            <div className="mb-2 flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100">
                <Map className="h-4 w-4 text-orange-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">
                {roadmap.title}
              </h2>
            </div>
            <p className="text-gray-600">{roadmap.subtitle}</p>
          </div>
          <div className="p-0">
            <div className="relative h-[500px] overflow-hidden bg-gradient-to-br from-blue-50/50 via-green-50/50 to-yellow-50/50">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-8 left-8 h-16 w-16 rounded-full bg-orange-300" />
                <div className="absolute top-20 right-16 h-12 w-12 rounded-full bg-orange-200" />
                <div className="absolute bottom-16 left-20 h-8 w-8 rounded-full bg-orange-400" />
                <div className="absolute right-12 bottom-12 h-20 w-20 rounded-full bg-orange-100" />
              </div>

              {allSteps.map((step, index) => (
                <TravelMapStep
                  key={step.id}
                  {...step}
                  position={positions[index] || { x: 50, y: 50 }}
                  onToggle={(stepId) =>
                    handleStepToggle(step.sectionId, stepId)
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {roadmap.sections.map((section, index) => (
            <div
              key={section.id}
              className="rounded-xl border border-orange-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-bold text-orange-600">
                  STEP {index + 1}: {section.title}
                </h3>
                <span className="text-sm font-medium text-gray-500">
                  {section.completed}/{section.total}
                </span>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                {section.description}
              </p>
              <div className="h-2 w-full rounded-full bg-gray-100">
                <div
                  className="h-2 rounded-full bg-orange-400 transition-all duration-500"
                  style={{
                    width: `${section.total > 0 ? (section.completed / section.total) * 100 : 0}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelRoadmapPage;
