import type { StepContent } from 'types/roadmaps';
import CheckButton from '../button/CheckButton';

interface ChecklistUnitProps {
  content: StepContent;
}

const ChecklistUnit = ({ content }: ChecklistUnitProps) => {
  const handleListCheck = () => {};

  return (
    <div className="flex gap-3 md:gap-5">
      <CheckButton isChecked={content.isChecked} onClick={handleListCheck} />
      <p>{content.stepContent}</p>
    </div>
  );
};

export default ChecklistUnit;
