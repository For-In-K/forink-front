import QuestionTitle from './QuestionTitle';
import QuestionInput from './QuestionInput';

const Question = () => {
  return (
    <>
      <div className="flex h-full w-full flex-col gap-10 px-20 py-15">
        <div className="flex-1">
          <QuestionTitle
            title="Hi, Jiyeon. Which role do you want to play in ForinK?"
            description="One role per account"
          />
        </div>
        <div className="flex-1">
          <QuestionInput />
        </div>
      </div>
    </>
  );
};
export default Question;
