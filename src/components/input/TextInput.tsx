import { useState } from 'react';

interface TextInputProps {
  placeholder?: string;
  value: string | null;
  onType: (value: string) => void;
}

const TextInput = ({ placeholder, value, onType }: TextInputProps) => {
  return (
    <div className="flex w-full items-start justify-start">
      <input
        placeholder={placeholder}
        className="border-primary focus:border-primary focus:ring-primary/20 w-full rounded-lg border px-4 py-3 text-sm text-black focus:ring-2 focus:outline-none sm:text-base md:py-2"
        value={value ?? ''}
        onChange={(e) => onType(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
