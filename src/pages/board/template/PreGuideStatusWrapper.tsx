import { usePreGuideRatings } from '@hooks/useGuides';
import StatusUnit from './StatusUnit';
import { guideFeedbackRates } from '@mocks/data/guides';

const PreGuideStatusWrapper = () => {
  const { data: preGuideRatings = [] } = usePreGuideRatings();
  return (
    // <>
    //   {preGuideRatings.map((rating) => (
    //     <StatusUnit key={rating.ratingId} rating={rating} />
    //   ))}
    // </>
    <>
      {guideFeedbackRates.map((rating) => (
        <StatusUnit key={rating.ratingId} rating={rating} />
      ))}
    </>
  );
};

export default PreGuideStatusWrapper;
