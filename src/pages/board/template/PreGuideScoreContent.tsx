import { StatusUnitProps } from './StatusUnit';

const RatingCountText = ({ count }: { count: number }) => {
  return (
    <p>
      This feedback has been rated for&nbsp;
      <span className="text-primary font-bold">{count} time(s).</span>
    </p>
  );
};

const PreGuideScoreContent = ({ rating }: StatusUnitProps) => {
  const highlight = 'Average';
  const scores = {
    Average: rating.allAvgScore,
    Expertise: rating.expertiseAvgScore,
    Helpfulness: rating.helpAvgScore,
    Recommendability: rating.recommendAvgScore,
  };

  return (
    <div className="text-text-muted text-body flex flex-col gap-6 rounded-md px-6 py-4 leading-loose">
      <RatingCountText count={rating.ratingCount} />
      <div className="flex flex-col items-start justify-between gap-2">
        <div className="flex flex-wrap gap-3">
          {Object.entries(scores).map(([label, score]) => (
            <span
              key={label}
              className={`flex items-center rounded-full px-4 py-2 text-sm font-medium transition ${
                label === highlight
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-primary/10 text-primary'
              }`}
            >
              {label}: {score?.toFixed(1)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreGuideScoreContent;
