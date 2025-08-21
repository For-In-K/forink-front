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
    <div className="flex w-full flex-col items-center justify-start gap-4 sm:flex-row sm:flex-wrap sm:gap-6 md:gap-10">
      {options.map((option) => {
        const isSelected = option.answerId === selectedId;
        return (
          <button
            key={option.answerId}
            onClick={() => handleSelect(option)}
            type="button"
            className={`border-primary/40 md:text-title2 w-full min-w-24 rounded-full border px-4 py-3 text-sm font-medium transition sm:w-auto sm:min-w-32 sm:text-base ${
              isSelected
                ? 'bg-primary text-white'
                : 'text-text-muted hover:bg-white-hover bg-white'
            }`}
          >
            <span className="truncate">{option.answer}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ButtonInput;
