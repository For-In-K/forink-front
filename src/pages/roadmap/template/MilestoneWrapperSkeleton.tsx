const MilestoneWrapperSkeleton = () => {
  return (
    <div style={{ width: '100%', height: '1000px' }} className="relative">
      <div className="h-full w-full animate-pulse rounded-lg bg-gray-100">
        <div className="relative h-full w-full overflow-hidden">
          <div
            className="absolute flex items-center justify-center"
            style={{ left: '100px', top: '50px' }}
          >
            <div className="h-16 w-48 animate-pulse rounded-lg bg-gray-200"></div>
          </div>

          <div
            className="absolute flex items-center justify-center"
            style={{ left: '500px', top: '230px' }}
          >
            <div className="h-16 w-48 animate-pulse rounded-lg bg-gray-200"></div>
          </div>

          <div
            className="absolute flex items-center justify-center"
            style={{ left: '100px', top: '410px' }}
          >
            <div className="h-16 w-48 animate-pulse rounded-lg bg-gray-200"></div>
          </div>

          <div
            className="absolute flex items-center justify-center"
            style={{ left: '500px', top: '590px' }}
          >
            <div className="h-16 w-48 animate-pulse rounded-lg bg-gray-200"></div>
          </div>

          <div
            className="absolute h-1 w-32 animate-pulse rounded bg-gray-300"
            style={{ left: '350px', top: '58px' }}
          ></div>
          <div
            className="absolute h-1 w-32 animate-pulse rounded bg-gray-300"
            style={{ left: '350px', top: '418px' }}
          ></div>
        </div>

        <div className="absolute bottom-4 left-4 flex flex-col gap-2">
          <div className="h-8 w-8 animate-pulse rounded bg-gray-300"></div>
          <div className="h-8 w-8 animate-pulse rounded bg-gray-300"></div>
          <div className="h-8 w-8 animate-pulse rounded bg-gray-300"></div>
          <div className="h-8 w-8 animate-pulse rounded bg-gray-300"></div>
        </div>

        <div className="absolute right-4 bottom-4 h-24 w-32 animate-pulse rounded bg-gray-300"></div>
      </div>
    </div>
  );
};

export default MilestoneWrapperSkeleton;
