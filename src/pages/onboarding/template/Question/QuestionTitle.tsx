interface QuestionTitleProps {
  title: string;
  description?: string;
}

const QuestionTitle = ({ title, description }: QuestionTitleProps) => {
  return (
    <>
      <div className="flex h-full w-full flex-col justify-center gap-5 break-words">
        <p className="text-title1">{title}</p>
        <p className="text-body text-text-muted">{description}</p>
      </div>
    </>
  );
};

export default QuestionTitle;
