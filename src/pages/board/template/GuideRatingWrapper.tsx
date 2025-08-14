import RatingUnit from './RatingUnit';
import useGuides from '@hooks/useGuides';

const RatingWrapper = () => {
  const { preGuideFeedbacks } = useGuides();

  return preGuideFeedbacks.map((feedback) => (
    <RatingUnit key={feedback.feedbackId} feedback={feedback} />
  ));
};

export default RatingWrapper;
