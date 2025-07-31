import type { Answer, Option } from 'types/exams';

import DropdownInput from '@components/input/DropdownInput';
import ButtonInput from '@components/input/ButtonInput';
import ScaleInput from '@components/input/ScaleInput';

interface QuestionInputProps {
  answer: Answer;
  onChange: (value: Option) => void;
}

const QuestionInput = ({ answer, onChange }: QuestionInputProps) => {
  let component;

  switch (answer.mode) {
    case 'Dropdown':
      component = (
        <DropdownInput options={answer.options} onChange={onChange} />
      );
      break;
    case 'Button':
      component = <ButtonInput options={answer.options} onChange={onChange} />;
      break;
    case 'Scale':
      component = <ScaleInput options={answer.options} onChange={onChange} />;
      break;
    default:
      component = null;
  }

  return (
    <>
      <div className="flex items-center">{component}</div>
    </>
  );
};

export default QuestionInput;
