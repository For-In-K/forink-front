import { GuideFeedback } from 'types/guides';
import GuideRatingContent from './GuideRatingContent';
import GuideRatingForm from './GuideRatingForm';

interface RatingUnitProps {
  feedback: GuideFeedback;
}

const RatingUnit = ({ feedback }: RatingUnitProps) => {
  return (
    <div className="border-primary flex w-full flex-col justify-center gap-5 rounded-xl border bg-white p-8 md:px-15 md:py-10">
      <GuideRatingContent
        feedbackTitle={feedback.feedbackTitle}
        feedbackContent={feedback.feedbackContent}
      />
      <GuideRatingForm />
    </div>
  );
};

export default RatingUnit;
