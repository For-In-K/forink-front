interface ProgressbarProps {
  progress: number;
  showNumber?: boolean;
}

const Progressbar = ({ progress, showNumber = false }: ProgressbarProps) => {
  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="flex w-full items-center space-x-4 px-2">
      <div
        className="bg-surface h-2 flex-1 overflow-hidden rounded-full"
        role="progressbar"
        aria-valuenow={safeProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full opacity-60 transition-all duration-500 ease-in-out"
          style={{
            width: `${safeProgress}%`,
            background: `linear-gradient(to right, var(--color-primary), var(--color-secondary))`,
          }}
        />
      </div>

      {showNumber && (
        <span className="text-text-muted text-body min-w-[2.5rem] text-right font-mono">
          {Math.round(safeProgress)}%
        </span>
      )}
    </div>
  );
};

export default Progressbar;
