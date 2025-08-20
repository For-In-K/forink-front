import { usePreGuideRatings } from '@hooks/useGuides';
import StatusUnit from './StatusUnit';
import StatusUnitSkeleton from './StatusUnitSkeleton';

const PreGuideStatusWrapper = () => {
  const { data: preGuideRatings, isLoading, isError } = usePreGuideRatings();

  if (isError) {
    return (
      <div className="rounded-md border border-red-200 bg-red-50 p-4 text-red-700">
        아직 등록된 평가가 없어요.
      </div>
    );
  }

  return (
    <>
      {isLoading
        ? Array.from({ length: 3 }).map((_, index) => (
            <StatusUnitSkeleton key={index} />
          ))
        : preGuideRatings &&
          preGuideRatings.map((rating) => (
            <StatusUnit key={rating.ratingId} rating={rating} />
          ))}
    </>
  );
};

export default PreGuideStatusWrapper;
