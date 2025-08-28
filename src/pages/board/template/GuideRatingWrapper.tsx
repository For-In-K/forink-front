import RatingUnit from './RatingUnit';
import { usePreGuideFeedbacks } from '@hooks/useGuides';
import RatingUnitSkeleton from './RatingUnitSkeleton';

import { preGuideFeedbacks } from '@mocks/data/guides';

const RatingWrapper = () => {
  // const {
  //   data: preGuideFeedbacks = [],
  //   isLoading,
  //   isError,
  // } = usePreGuideFeedbacks();

  // if (isError) {
  //   return (
  //     <div className="rounded-md border border-red-200 bg-red-50 p-4 text-red-700">
  //       가이드 평가를 불러오는 데 실패했어요. 나중에 다시 시도해주세요.
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col gap-10">
      {/* {isLoading
        ? Array.from({ length: 6 }).map((_, index) => (
            <RatingUnitSkeleton key={index} />
          ))
        : preGuideFeedbacks.map((feedback) => (
            <RatingUnit key={feedback.feedbackId} feedback={feedback} />
          ))} */}
      {preGuideFeedbacks.map((feedback) => (
        <RatingUnit key={feedback.feedbackId} feedback={feedback} />
      ))}
    </div>
  );
};

export default RatingWrapper;
