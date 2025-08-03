import RatingUnit from './RatingUnit';
import { preGuideFeedbacks } from '@mocks/data/guides';

const RatingWrapper = () => {
  return preGuideFeedbacks.map((feedback) => (
    <RatingUnit key={feedback.feedbackId} feedback={feedback} />
  ));
};

export default RatingWrapper;
