import { guideFeedbackRates } from '@mocks/data/guides';
import StatusUnit from './StatusUnit';

const PreGuideStatusWrapper = () => {
  return (
    <>
      {guideFeedbackRates.map((rating) => (
        <StatusUnit key={rating.rateId} rating={rating} />
      ))}
    </>
  );
};

export default PreGuideStatusWrapper;
