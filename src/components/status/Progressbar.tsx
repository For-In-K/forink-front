interface ProgressbarProps {
  ratio?: number;
  totalSize?: number;
  currentSize?: number;
  showNumber?: 'fraction' | 'percent' | false;
}

const Progressbar = ({
  ratio,
  totalSize,
  currentSize,
  showNumber = false,
}: ProgressbarProps) => {
  const calculatedRatio =
    typeof ratio === 'number'
      ? ratio
      : totalSize && currentSize
        ? (currentSize / totalSize) * 100
        : 0;

  const safeProgress = Math.min(100, Math.max(0, calculatedRatio));

  const renderNumber = () => {
    if (
      showNumber === 'fraction' &&
      typeof currentSize === 'number' &&
      typeof totalSize === 'number'
    ) {
      return `${currentSize}/${totalSize}`;
    }
    if (showNumber === 'percent') {
      return `${Math.round(safeProgress)}%`;
    }
    return null;
  };

  const numberColor =
    showNumber === 'fraction' ? 'text-text-muted' : 'text-white';

  return (
    <div className="flex w-full items-center gap-3">
      <div
        className="h-2.5 flex-1 overflow-hidden rounded-full bg-blue-100"
        role="progressbar"
        aria-valuenow={safeProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="from-primary to-secondary h-full rounded-full bg-gradient-to-r opacity-60 transition-all duration-500 ease-in-out"
          style={{ width: `${safeProgress}%` }}
        />
      </div>

      {showNumber && (
        <span
          className={`text-text-muted text-body min-w-[2.5rem] text-right font-mono ${numberColor}`}
        >
          {renderNumber()}
        </span>
      )}
    </div>
  );
};

export default Progressbar;
