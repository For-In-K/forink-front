interface FeedbackTitleProps {
  title: string;
}

const FeedbackTitle = ({ title }: FeedbackTitleProps) => {
  return (
    <p className="text-title2 font-bold text-black">
      Rate this feedback on&nbsp;
      <span className="text-primary">'{title}'</span> subroadmap.
    </p>
  );
};

export default FeedbackTitle;
