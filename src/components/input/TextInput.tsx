import { useState } from 'react';

interface TextInputProps {
  placeholder?: string;
  value: string | null;
  onType: (value: string) => void;
}

const TextInput = ({ placeholder, value, onType }: TextInputProps) => {
  return (
    <div className="flex items-center">
      <input
        placeholder={placeholder}
        className="border-primary rounded-lg border px-4 py-2 text-black"
        value={value ?? ''}
        onChange={(e) => onType(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
