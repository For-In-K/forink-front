import { useQuery } from '@tanstack/react-query';

import { getSupportInfo } from '@apis/home';
import SupportCard from './SupportCard';
import SupportSkeleton from './SupportSkeleton';
import BasicInfoCard from './info/BasicInfoCard';
import BasicInfoWrapper from './info/BasicInfoWrapper';

const HomePage = () => {
  const {
    data: supportInfo,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['supportInfo'],
    queryFn: getSupportInfo,
  });

  return (
    <main>
      <header className="mb-8">
        <p className="text-title2 font-semibold">ForinK의 최신 문서</p>
        <p className="text-text-muted mt-1 text-sm">
          AI 기능 도입으로 최신 문서를 확인할 수 있어요. 링크를 클릭하여 자세한
          정보를 확인해보세요.
        </p>
      </header>

      {isError && (
        <div className="rounded-md border border-red-200 bg-red-50 p-4 text-red-700">
          콘텐츠를 불러오는 중 오류가 발생했습니다.
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => <SupportSkeleton key={i} />)
          : supportInfo?.map((card, idx) => (
              <SupportCard key={idx} card={card} />
            ))}
      </div>
      <div className="h-header" />
      <BasicInfoWrapper />
    </main>
  );
};

export default HomePage;
