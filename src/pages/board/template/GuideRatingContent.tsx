import { GuideFeedback } from 'types/guides';
import { FeedbackTitleOnRating } from './FeedbackTitle';
import FeedbackContent from './FeedbackContent';

interface GuideRatingContentProps {
  feedbackTitle: string;
  feedbackContent: string;
}

const GuideRatingContent = ({
  feedbackTitle,
  feedbackContent,
}: GuideRatingContentProps) => {
  return (
    <>
      <FeedbackTitleOnRating title={feedbackTitle} />
      <FeedbackContent content={feedbackContent} />
    </>
  );
};

export default GuideRatingContent;
