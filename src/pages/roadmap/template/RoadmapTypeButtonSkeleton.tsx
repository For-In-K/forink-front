import React from 'react';

const RoadmapTypeButtonSkeleton = () => {
  return (
    <div className="flex h-42 w-full max-w-2xl animate-pulse flex-col gap-3 rounded-3xl border border-slate-100 bg-white px-10 py-6 shadow-sm">
      <div className="h-6 w-1/3 rounded bg-slate-200" />
      <div className="h-4 w-full max-w-md rounded bg-slate-100" />
      <div className="mt-3 h-10 w-full rounded-lg bg-blue-50" />
    </div>
  );
};

export default RoadmapTypeButtonSkeleton;
