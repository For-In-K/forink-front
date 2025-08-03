import { GuideFeedback } from 'types/guides';
import FeedbackTitle from './FeedbackTitle';
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
      <FeedbackTitle title={feedbackTitle} />
      <FeedbackContent content={feedbackContent} />
    </>
  );
};

export default GuideRatingContent;
