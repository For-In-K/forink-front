import useGuides from '@hooks/useGuides';
import StatusUnit from './StatusUnit';

const PreGuideStatusWrapper = () => {
  const { preGuideRatings } = useGuides();

  return (
    <>
      {preGuideRatings.map((rating) => (
        <StatusUnit key={rating.ratingId} rating={rating} />
      ))}
    </>
  );
};

export default PreGuideStatusWrapper;
