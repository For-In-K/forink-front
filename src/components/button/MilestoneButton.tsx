import { Check, Hourglass } from 'lucide-react';
import { Handle, Position } from 'reactflow';

interface MilestoneProps {
  title: string;
  statusType: 'COMPLETED' | 'IN_PROGRESS';
  onClick?: () => void;
}

const MilestoneButton = ({ title, statusType, onClick }: MilestoneProps) => {
  const color = statusType === 'COMPLETED' ? 'bg-secondary' : 'bg-gray-400';

  return (
    <div className="relative">
      <Handle
        type="target"
        position={Position.Top}
        id="top"
        style={{
          background: 'transparent',
          border: 'none',
          width: 1,
          height: 1,
          top: -5,
        }}
      />

      <div
        className={`absolute right-0 z-10 flex size-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white ${color}`}
      >
        {statusType === 'COMPLETED' ? (
          <Check size={18} />
        ) : (
          <Hourglass size={18} />
        )}
      </div>

      <button
        className="text-title2 hover:bg-white-hover border-border relative flex min-w-[200px] items-center justify-center rounded-xl border-2 bg-white p-5 text-center font-semibold shadow-md transition-all duration-200 hover:shadow-lg"
        onClick={onClick}
      >
        {title}
      </button>

      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        style={{
          background: 'transparent',
          border: 'none',
          width: 1,
          height: 1,
          bottom: -5,
        }}
      />
    </div>
  );
};

export default MilestoneButton;
