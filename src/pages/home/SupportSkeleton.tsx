const SupportSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="mb-3 h-40 w-full rounded-lg bg-gray-200" />
      <div className="h-4 w-3/4 rounded bg-gray-200" />
      <div className="mt-2 h-3 w-full rounded bg-gray-200" />
      <div className="mt-2 h-3 w-11/12 rounded bg-gray-200" />
      <div className="mt-4 flex items-center justify-between">
        <div className="h-8 w-24 rounded-full bg-gray-200" />
        <div className="h-6 w-6 rounded-full bg-gray-200" />
      </div>
    </div>
  );
};

export default SupportSkeleton;
