import { useState } from 'react';
import type { Option } from 'types/exams';

interface ButtonInputProps {
  options: Option[];
  onSubmit: (value: Option) => void;
}

const ButtonInput = ({ options, onSubmit }: ButtonInputProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleSelect = (option: Option) => {
    setSelectedId(option.answerId);
    onSubmit(option);
  };

  return (
    <div className="flex items-center justify-center gap-10">
      {options.map((option) => {
        const isSelected = option.answerId === selectedId;
        return (
          <button
            key={option.answerId}
            onClick={() => handleSelect(option)}
            type="button"
            className={`border-primary text-title2 min-w-32 rounded-full border-2 px-4 py-2 transition ${
              isSelected
                ? 'bg-primary text-white'
                : 'text-primary hover:bg-white-hover bg-white'
            } `}
          >
            {option.answer}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonInput;
