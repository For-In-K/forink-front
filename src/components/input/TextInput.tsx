import type { Option } from 'types/exams';

interface TextInputProps {
  placeholder?: string;
  onChange: (value: Option) => void;
}

const TextInput = ({ placeholder }: TextInputProps) => {
  return (
    <input
      placeholder={placeholder}
      className="border-primary text-text-muted rounded-lg border-2 px-4 py-2"
    />
  );
};

export default TextInput;
