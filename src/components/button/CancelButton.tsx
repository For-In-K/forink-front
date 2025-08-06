interface CancelButtonProps {
  className?: string;
  onClick: () => void;
}

const CancelButton = ({ className, onClick }: CancelButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} text-title2 bg-danger hover:bg-danger-hover w-40 border border-white/60 py-2 text-white transition-colors duration-200`}
    >
      Cancel
    </button>
  );
};

export default CancelButton;
