import { useState } from 'react';
import type { Option } from 'types/exams';

interface ScaleInputProps {
  options: Option[];
  onSubmit: (value: Option) => void;
}

const ScaleInput = ({ options, onSubmit }: ScaleInputProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (option: Option) => {
    setSelected(option.answerId);
    onSubmit(option);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5">
      {options.map((option, index) => {
        const value = index + 1;
        const isSelected = option.answerId === selected;
        return (
          <div className="group relative inline-block" key={option.answerId}>
            <button
              onClick={() => handleSelect(option)}
              className={`md:text-title2 size-10 rounded-full text-sm font-semibold transition sm:size-11 sm:text-base md:size-12 ${
                isSelected
                  ? 'bg-primary text-white'
                  : 'bg-primary/10 text-primary hover:bg-primary/40 hover:text-white'
              }`}
            >
              {value}
            </button>
            <div className="bg-primary/60 pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-max -translate-x-1/2 translate-y-2 scale-95 rounded px-2 py-1 text-xs text-white opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 sm:text-sm">
              {option.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScaleInput;
