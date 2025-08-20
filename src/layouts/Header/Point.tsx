import { useMemberInformation } from '@hooks/useMembers';

const Point = () => {
  const { data, isLoading } = useMemberInformation();

  return isLoading ? (
    <div className="text-accent hidden items-center gap-1 rounded-full border border-amber-200 bg-amber-50 p-1 px-3 sm:flex">
      <span>Loading...</span>
    </div>
  ) : (
    data && (
      <div className="text-accent hidden items-center gap-1 rounded-full border border-amber-200 bg-amber-50 p-1 px-3 sm:flex">
        <span>{data.point} Points</span>
      </div>
    )
  );
};

export default Point;
