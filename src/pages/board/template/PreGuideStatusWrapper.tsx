import { usePreGuideRatings } from '@hooks/useGuides';
import StatusUnit from './StatusUnit';

const PreGuideStatusWrapper = () => {
  const { data: preGuideRatings = [] } = usePreGuideRatings();
  return (
    <>
      {preGuideRatings.map((rating) => (
        <StatusUnit key={rating.ratingId} rating={rating} />
      ))}
    </>
  );
};

export default PreGuideStatusWrapper;
