interface QuestionTitleProps {
  title: string;
  description?: string;
}

const QuestionTitle = ({ title, description }: QuestionTitleProps) => {
  return (
    <div className="flex h-full w-full flex-col justify-start gap-3 break-words sm:gap-4 md:gap-5">
      <p className="lg:text-title1 text-lg leading-tight font-semibold sm:text-xl md:text-2xl">
        {title}
      </p>
      {description && (
        <p className="text-text-muted md:text-body text-sm leading-relaxed sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
};

export default QuestionTitle;
