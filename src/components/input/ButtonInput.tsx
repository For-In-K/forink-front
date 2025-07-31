import type { Option } from 'types/exams';

interface ButtonInputProps {
  options: Option[];
  onChange: (value: Option) => void;
}

const ButtonInput = ({ options, onChange }: ButtonInputProps) => {
  const handleSelect = (option: Option) => {
    onChange(option);
  };

  return (
    <div className="flex items-center justify-center gap-10">
      {options.map((option, index) => (
        <button
          key={index}
          className="border-primary text-primary hover:bg-white-hover text-title2 min-w-32 rounded-full border-2 px-4 py-2"
          onClick={() => handleSelect(option)}
        >
          {option.answer}
        </button>
      ))}
    </div>
  );
};

export default ButtonInput;
