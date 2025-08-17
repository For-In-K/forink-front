import { Check, Hourglass } from 'lucide-react';

interface MilestoneProps {
  title: string;
  statusType: 'COMPLETED' | 'IN_PROGRESS';
  onClick?: () => void;
}

const MilestoneButton = ({ title, statusType, onClick }: MilestoneProps) => {
  const color = statusType === 'COMPLETED' ? 'bg-secondary' : 'bg-gray-400';

  return (
    <div>
      <div
        className={`absolute right-0 z-1 flex size-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white ${color}`}
      >
        {statusType === 'COMPLETED' ? (
          <Check size={18} />
        ) : (
          <Hourglass size={18} />
        )}
      </div>
      <button
        className="text-title2 hover:bg-white-hover border-border relative flex items-center justify-center rounded-xl border-2 bg-white p-5 text-center font-semibold shadow-md"
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default MilestoneButton;
