import { useMemberInformation } from '@hooks/useMembers';

const Point = () => {
  const { data, isLoading } = useMemberInformation();

  return isLoading ? (
    <div className="text-accent hidden items-center gap-1 rounded-full border border-amber-200 bg-amber-50 p-1 px-3 text-xs md:flex md:text-sm">
      <span>Loading...</span>
    </div>
  ) : (
    data && (
      <div className="text-accent hidden items-center gap-1 rounded-full border border-amber-200 bg-amber-50 p-1 px-3 md:flex">
        <span className="min-w-0 overflow-hidden text-xs text-ellipsis whitespace-nowrap md:text-sm">
          {data.point} Points
        </span>
      </div>
    )
  );
};

export default Point;
