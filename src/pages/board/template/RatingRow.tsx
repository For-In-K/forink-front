interface RatingRowProps {
  label: string;
  value: number | null;
  onChange: (value: number) => void;
}

const RatingRow = ({ label, value, onChange }: RatingRowProps) => {
  return (
    <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
      <span className="w-40 font-semibold">{label}</span>
      <div className="flex gap-3">
        {[1, 2, 3, 4, 5].map((score) => {
          const isSelected = value === score;
          return (
            <button
              key={score}
              type="button"
              onClick={() => onChange(score)}
              className={`flex h-8 w-8 items-center justify-center rounded-full border transition ${
                isSelected
                  ? 'bg-secondary text-white'
                  : 'bg-secondary/10 hover:bg-secondary/40 text-secondary border-transparent hover:text-white'
              }`}
            >
              {score}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RatingRow;
