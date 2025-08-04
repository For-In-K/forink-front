interface CancelButtonProps {
  className?: string;
  onClick: () => void;
}

const CancelButton = ({ className, onClick }: CancelButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} border-danger text-danger text-title2 w-40 border py-2 hover:bg-red-50`}
    >
      Cancel
    </button>
  );
};

export default CancelButton;
