import { useMemo, useState } from 'react';
import type { Option } from 'types/exams';
import { ChevronDown, Check, X } from 'lucide-react';

interface MultiSelectInputProps {
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void; // string으로 전달
}

const MultiSelectInput = ({
  options,
  placeholder = 'Languages',
  onChange,
}: MultiSelectInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option[]>([]);

  const filteredOptions = useMemo(() => {
    return options.filter(
      (opt) => !selected.some((sel) => sel.answerId === opt.answerId)
    );
  }, [options, selected]);

  const handleSelect = (option: Option) => {
    const newSelected = [...selected, option];
    setSelected(newSelected);
    onChange(newSelected.map((o) => o.answer).join(','));
    setIsOpen(false);
  };

  const handleRemove = (optionId: number) => {
    const newSelected = selected.filter((opt) => opt.answerId !== optionId);
    setSelected(newSelected);
    onChange(newSelected.map((o) => o.answer).join(','));
  };

  return (
    <div className="flex w-full flex-col items-start justify-between gap-5">
      <div className="relative flex" style={{ minWidth: 'max-content' }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="border-primary/40 text-text-muted hover:bg-white-hover flex w-55 items-center justify-between rounded-full border bg-white px-5 py-2 transition"
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className="truncate">{placeholder}</span>
          <ChevronDown className="ml-2 h-4 w-4 flex-shrink-0" />
        </button>

        {isOpen && (
          <ul
            role="listbox"
            aria-multiselectable="true"
            className="border-primary/40 absolute z-10 mt-14 max-h-60 w-full min-w-max overflow-y-auto rounded-xl border bg-white shadow-lg [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-blue-300 [&::-webkit-scrollbar-track]:bg-none"
          >
            {filteredOptions.map((option) => (
              <li
                key={option.answerId}
                onClick={() => handleSelect(option)}
                className="hover:bg-white-hover flex cursor-pointer items-center justify-between px-4 py-2 hover:rounded-lg"
                role="option"
                aria-selected={false}
              >
                <span className="w-full truncate">{option.answer}</span>
                {selected.some((sel) => sel.answerId === option.answerId) && (
                  <Check className="text-accent h-4 w-4" />
                )}
              </li>
            ))}
            {filteredOptions.length === 0 && (
              <li className="px-4 py-2 text-sm text-gray-500">
                No results found
              </li>
            )}
          </ul>
        )}
      </div>
      <div className="flex flex-wrap justify-start gap-2">
        {selected.map((opt) => (
          <div
            key={opt.answerId}
            className="bg-primary text-md flex w-25 items-center justify-between rounded-full px-3 py-1 text-white"
          >
            <span className="truncate">{opt.answer}</span>
            <button
              onClick={() => handleRemove(opt.answerId)}
              className="rounded-full bg-white/90 p-0.5 focus:outline-none"
              aria-label={`Remove ${opt.answer}`}
            >
              <X className="text-primary h-3 w-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectInput;
