interface MilestoneProps {
  title: string;
  statusType: 'COMPLETED' | 'IN_PROGRESS';
  onClick?: () => void;
}

const MilestoneButton = ({ title, statusType, onClick }: MilestoneProps) => {
  const lineColor =
    statusType === 'COMPLETED' ? 'border-secondary' : 'border-border';

  return (
    <>
      <button
        className={`text-title2 hover:bg-white-hover flex size-40 items-center justify-center rounded-full border-8 bg-white p-3 text-center font-semibold ${lineColor}`}
        onClick={onClick}
      >
        {title}
      </button>
    </>
  );
};

export default MilestoneButton;
