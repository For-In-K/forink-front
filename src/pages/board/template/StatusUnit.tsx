import { GuideFeedbackRating } from 'types/guides';
import { FeedbackTitleOnStatus } from './FeedbackTitle';
import PreGuideScoreContent from './PreGuideScoreContent';

export interface StatusUnitProps {
  rating: GuideFeedbackRating;
}

const StatusUnit = ({ rating }: StatusUnitProps) => {
  return (
    <div className="border-primary/30 flex w-full flex-col justify-center gap-5 rounded-xl border bg-white p-8">
      <FeedbackTitleOnStatus title={rating.feedbackTitle} />
      <PreGuideScoreContent rating={rating} />
    </div>
  );
};

export default StatusUnit;
