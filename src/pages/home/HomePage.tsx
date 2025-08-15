import { useQuery } from '@tanstack/react-query';

import { supportInfo } from '@mocks/data/home';
import useAuth from '@hooks/useAuth';
import { getSupportInfo, SupportInfoResponse } from '@apis/home';
import SupportCard from './SupportCard';
import SupportSkeleton from './SupportSkeleton';

const HomePage = () => {
  const { isSignedIn } = useAuth();

  // const { supportInfo: supportInfo, isLoading, isError } = useQuery({
  //   queryKey: ['supportInfo'],
  //   queryFn: getSupportInfo,
  //   enabled: isSignedIn,
  //   staleTime: 1000 * 60, // 1분
  //   refetchOnWindowFocus: false,
  // });

  return (
    <main>
      <header className="mb-8">
        <p className="text-title2 sm:text-title1 font-semibold">
          도움말 & 가이드
        </p>
        <p className="text-text-muted mt-1 text-sm">
          최신 문서와 자주 묻는 질문을 모았습니다. 필요하면 개별 기사로
          이동하세요.
        </p>
      </header>
      {/* 
        {isError && (
          <div className="rounded-md border border-red-200 bg-red-50 p-4 text-red-700">
            콘텐츠를 불러오는 중 오류가 발생했습니다.
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <SupportSkeleton key={i} />
              ))
            : supportInfo?.map((card, idx) => <SupportCard key={idx} card={card} />)}
        </div>
      */}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {supportInfo?.map((card, idx) => (
          <SupportCard key={idx} card={card} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
