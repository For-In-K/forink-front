import type { Answer, Option } from '@src/types/exam';

import DropdownInput from '@src/components/input/DropdownInput';
import ButtonInput from '@src/components/input/ButtonInput';
import ScaleInput from '@src/components/input/ScaleInput';

interface QuestionInputProps {
  options: Answer;
  onChange: (value: Option) => void;
}

const QuestionInput = ({ options, onChange }: QuestionInputProps) => {
  let component;

  switch (options.mode) {
    case 'Dropdown':
      component = (
        <DropdownInput options={options.options} onChange={onChange} />
      );
      break;
    case 'Button':
      component = <ButtonInput options={options.options} onChange={onChange} />;
      break;
    case 'Scale':
      component = <ScaleInput options={options.options} onChange={onChange} />;
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
