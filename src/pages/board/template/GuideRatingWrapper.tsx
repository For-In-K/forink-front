import RatingUnit from './RatingUnit';
import { usePreGuideFeedbacks } from '@hooks/useGuides';

const RatingWrapper = () => {
  const { data: preGuideFeedbacks = [] } = usePreGuideFeedbacks();

  return preGuideFeedbacks.map((feedback) => (
    <RatingUnit key={feedback.feedbackId} feedback={feedback} />
  ));
};

export default RatingWrapper;
