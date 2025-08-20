const RatingUnitSkeleton = () => {
  return (
    <div className="border-primary/50 flex w-full flex-col justify-center gap-5 rounded-xl border bg-white p-8">
      <div className="space-y-4">
        <div className="h-7 w-3/4 animate-pulse rounded bg-gray-200"></div>
        <div className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
          <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>
          <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200"></div>
        </div>
      </div>

      <div className="bg-surface/50 flex flex-col items-center gap-6 rounded-md p-5 md:items-end">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-start gap-6 md:flex-row md:items-center"
          >
            <div className="text-text-muted h-5 w-40 animate-pulse rounded bg-gray-200"></div>

            <div className="flex gap-3">
              {[...Array(5)].map((_, scoreIndex) => (
                <div
                  key={scoreIndex}
                  className="h-8 w-8 animate-pulse rounded-full bg-gray-200"
                ></div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-4 flex flex-col gap-4 md:flex-row">
          <div className="h-10 w-16 animate-pulse rounded bg-gray-200"></div>
          <div className="h-10 w-20 animate-pulse rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default RatingUnitSkeleton;
