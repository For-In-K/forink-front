import { useState } from 'react';
import type { Option } from '@src/types/exam';
import { ChevronDown, Check } from 'lucide-react';

interface DropdownInputProps {
  options: Option[];
  placeholder?: string;
  onChange: (value: Option) => void;
}

const DropdownInput = ({
  options,
  placeholder = 'Choose one...',
  onChange,
}: DropdownInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: Option) => {
    setSelected(option.answer);
    setIsOpen(false);
    onChange(option);
  };

  console.log(options);

  return (
    <div className="relative" style={{ minWidth: 'max-content' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border-primary text-primary hover:bg-white-hover flex min-w-max items-center justify-between rounded-xl border-2 bg-white px-4 py-2 transition"
        type="button"
      >
        <span className="max-w-xs truncate">{selected || placeholder}</span>
        <ChevronDown className="h-4 w-4 flex-shrink-0" />
      </button>

      {isOpen && (
        <ul className="border-primary absolute z-10 mt-2 max-h-60 w-full min-w-max overflow-y-auto rounded-xl border-2 bg-white shadow-lg [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-blue-500 [&::-webkit-scrollbar-track]:bg-none">
          {options.map((option) => (
            <li
              key={option.answerId}
              onClick={() => handleSelect(option)}
              className="hover:bg-white-hover flex cursor-pointer items-center justify-between px-4 py-2 hover:rounded-lg"
            >
              <span className="w-full truncate">{option.answer}</span>
              {selected === option.answer && (
                <Check className="text-primary h-4 w-4" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownInput;
