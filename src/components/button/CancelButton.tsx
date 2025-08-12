interface CancelButtonProps {
  className?: string;
  onClick: () => void;
}

const CancelButton = ({ className, onClick }: CancelButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} sm:text-body bg-danger hover:bg-danger-hover border border-white/60 p-2 px-4 py-2 text-sm text-white transition-colors duration-200`}
    >
      Cancel
    </button>
  );
};

export default CancelButton;
