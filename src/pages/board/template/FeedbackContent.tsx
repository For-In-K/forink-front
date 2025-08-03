interface FeedbackContentProps {
  content: string;
}

const FeedbackContent = ({ content }: FeedbackContentProps) => {
  return (
    <div className="text-text-muted bg-surface text-body rounded-md p-5 font-sans leading-loose">
      {content}
    </div>
  );
};

export default FeedbackContent;
