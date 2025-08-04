import { useState } from 'react';
import type { Option } from 'types/exams';
import { ChevronDown, Check } from 'lucide-react';

interface DropdownInputProps {
  options: Option[];
  placeholder?: string;
  onClick: (value: Option) => void;
}

const DropdownInput = ({
  options,
  placeholder = 'Choose one',
  onClick,
}: DropdownInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: Option) => {
    setSelected(option.answer);
    setIsOpen(false);
    onClick(option);
  };

  return (
    <div className="flex items-center">
      <div className="relative" style={{ minWidth: 'max-content' }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="border-primary text-primary hover:bg-white-hover flex w-55 items-center justify-between rounded-full border-2 bg-white px-5 py-2 transition"
          type="button"
        >
          <span className="truncate">{selected || placeholder}</span>
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
    </div>
  );
};

export default DropdownInput;
