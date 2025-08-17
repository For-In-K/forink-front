import React from 'react';

const ProfileCardSkeleton = () => {
  return (
    <article
      className="flex h-full w-full animate-pulse flex-col justify-between gap-4 rounded-xl bg-white p-4 shadow-sm md:p-6"
      aria-hidden
    >
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-slate-200 md:h-20 md:w-20" />
        <div className="flex-1">
          <div className="mb-2 h-4 w-3/5 rounded bg-slate-200" />
          <div className="h-3 w-1/2 rounded bg-slate-200" />
        </div>
      </div>

      <div className="flex-1">
        <div className="mb-3 h-3 w-2/3 rounded bg-slate-200" />
        <div className="flex flex-wrap gap-2">
          <div className="h-7 w-20 rounded-full bg-slate-200" />
          <div className="h-7 w-16 rounded-full bg-slate-200" />
        </div>
      </div>

      <div className="h-10 w-full rounded-xl bg-slate-200" />
    </article>
  );
};

export default ProfileCardSkeleton;
