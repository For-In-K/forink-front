import { useState } from 'react';
import type { Option } from '@src/types/exams';

interface ScaleInputProps {
  options: Option[];
  onChange: (value: Option) => void;
}

const ScaleInput = ({ options, onChange }: ScaleInputProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (option: Option) => {
    setSelected(option.answerId);
    onChange(option);
  };

  return (
    <div className="flex items-center gap-5">
      {options.map((option, index) => {
        const value = index + 1;
        const isSelected = value === selected;
        return (
          <div className="group relative inline-block" key={option.answerId}>
            <button
              onClick={() => handleSelect(option)}
              className={`border-primary size-10 rounded-full border-2 text-sm transition ${isSelected ? 'bg-primary text-white' : 'hover:bg-white-hover bg-white text-black'} `}
            >
              {value}
            </button>
            <div className="bg-primary/60 pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max -translate-x-1/2 translate-y-2 scale-95 rounded px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
              {option.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScaleInput;
