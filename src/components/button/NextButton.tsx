import { ChevronRight } from 'lucide-react';

interface NextButtonProps {
  onClick: () => void;
}

const NextButton = ({ onClick }: NextButtonProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <button
      className="shimmer-secondary text-title2 hover:bg-secondary-hover relative w-40 p-2 text-white"
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      Next
      <ChevronRight className="absolute top-1/2 right-3 -translate-y-1/2" />
    </button>
  );
};

export default NextButton;
