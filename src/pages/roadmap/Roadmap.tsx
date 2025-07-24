import React from 'react';

type RoadmapCategory = {
  id: string;
  title: string;
  description: string;
  progress: number; // 0 ~ 100
  isActive: boolean;
};

const roadmapCategories: RoadmapCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    description: 'Start learning Korean for daily life and survival situations',
    progress: 95,
    isActive: false,
  },
  {
    id: 'administrative',
    title: 'Administrative',
    description:
      'Get step-by-step guidance for visas, health insurance, and registration.',
    progress: 95,
    isActive: true,
  },
  {
    id: 'travel',
    title: 'Travel',
    description: 'Discover essential places and tips before settling down.',
    progress: 95,
    isActive: false,
  },
  {
    id: 'career',
    title: 'Career',
    description: 'Build your career path in Korea with resources and guidance.',
    progress: 50,
    isActive: false,
  },
];

const Roadmap = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-10">
      {roadmapCategories.map((category) => (
        <div
          key={category.id}
          className={`w-[500px] rounded-[20px] px-6 py-5 shadow-md transition-all duration-300 ${category.isActive ? 'bg-[#7BA7FF] text-white' : 'bg-[#7BA7FF88] text-white/70'} `}
        >
          <div className="text-xl font-bold">{category.title}</div>
          <div className="mt-1 text-sm">{category.description}</div>
          <div className="mt-4 flex items-center gap-2">
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/30">
              <div
                className="h-full rounded-full bg-gradient-to-r from-green-400 to-yellow-400"
                style={{ width: `${category.progress}%` }}
              />
            </div>
            <span className="text-sm font-semibold">{category.progress}%</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Roadmap;
