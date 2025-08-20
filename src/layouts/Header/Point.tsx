import { useMemberInformation } from '@hooks/useMembers';

const Point = () => {
  const { data } = useMemberInformation();

  return (
    data && (
      <div className="text-accent hidden items-center gap-1 rounded-full border border-amber-200 bg-amber-50 p-1 px-3 sm:flex">
        <span>{data.point} Points</span>
      </div>
    )
  );
};

export default Point;
