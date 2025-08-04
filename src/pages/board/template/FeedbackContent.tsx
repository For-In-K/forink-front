interface FeedbackContentProps {
  content: string;
}

const FeedbackContent = ({ content }: FeedbackContentProps) => {
  return (
    <div className="text-text-muted bg-surface/50 text-body rounded-md p-5 font-sans leading-loose">
      {content}
    </div>
  );
};

export default FeedbackContent;
