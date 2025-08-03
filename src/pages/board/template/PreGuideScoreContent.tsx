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
  return (
    <div className="text-text-muted bg-background text-body flex flex-col gap-5 rounded-md p-5 leading-loose">
      <RatingCountText count={rating.rateCount} />
      <div className="flex flex-col items-start justify-between gap-2">
        <div className="bg-primary rounded-full px-4 py-1 text-white">
          Average: {rating.averageScore}
        </div>
        <div className="flex w-full items-center gap-2">
          <div className="bg-primary/10 text-primary truncate rounded-full px-4 py-1">
            Expertise: {rating.expertiseScore}
          </div>
          <div className="bg-primary/10 text-primary truncate rounded-full px-4 py-1">
            Helpfulness: {rating.helpScore}
          </div>
          <div className="bg-primary/10 text-primary truncate rounded-full px-4 py-1">
            Recommendability: {rating.recommendScore}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreGuideScoreContent;
