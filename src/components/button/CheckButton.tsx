import { Check } from 'lucide-react';

interface CheckButtonProps {
  isChecked: boolean;
  onClick: () => void;
}

const CheckButton = ({ isChecked, onClick }: CheckButtonProps) => {
  return (
    <button
      className={`${isChecked ? 'border-primary bg-primary/75' : 'hover:bg-white-hover border-border'} h-full rounded-md border-2`}
      onClick={onClick}
    >
      <Check
        className={`${isChecked ? 'text-white' : 'text-white-hover'} p-1`}
      />
    </button>
  );
};

export default CheckButton;
