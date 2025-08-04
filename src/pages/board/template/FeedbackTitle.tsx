interface FeedbackTitleProps {
  title: string;
}

export const FeedbackTitleOnRating = ({ title }: FeedbackTitleProps) => {
  return (
    <p className="text-title2 font-bold text-black">
      Rate this feedback on&nbsp;
      <span className="text-primary">'{title}'</span> subroadmap.
    </p>
  );
};

export const FeedbackTitleOnStatus = ({ title }: FeedbackTitleProps) => {
  return (
    <p className="text-title2 font-bold text-black">
      Rating result of&nbsp;
      <span className="text-primary">'{title}'</span> subroadmap
    </p>
  );
};
