const StatusUnitSkeleton = () => {
  return (
    <div className="border-primary/30 flex w-full flex-col justify-center gap-5 rounded-xl border bg-white p-8">
      <div className="h-7 w-4/5 animate-pulse rounded bg-gray-200"></div>
      <div className="text-text-muted text-body flex flex-col gap-6 rounded-md px-6 py-4 leading-loose">
        <div className="h-5 w-64 animate-pulse rounded bg-gray-200"></div>
        <div className="flex flex-col items-start justify-between gap-2">
          <div className="flex flex-wrap gap-3">
            <div className="h-8 w-20 animate-pulse rounded-full bg-gray-200"></div>
            <div className="h-8 w-24 animate-pulse rounded-full bg-gray-200"></div>
            <div className="h-8 w-28 animate-pulse rounded-full bg-gray-200"></div>
            <div className="h-8 w-32 animate-pulse rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusUnitSkeleton;
