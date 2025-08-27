import React from 'react';

import { RoadmapSpecialTypeButtonInfo } from '../RoadmapTypeSelectorPage';

interface RoadmapSpecialTypeButtonProps {
  roadmapTypeButtonInfo: RoadmapSpecialTypeButtonInfo;
  hoveredType: string | null;
  onSelect: (type: string) => void;
  onHover: (type: string | null) => void;
}

const colorClasses: Record<
  string,
  {
    hover: string;
    normal: string;
    imgHover: string;
    imgNormal: string;
  }
> = {
  TRAVEL: {
    hover: 'bg-amber-400 ',
    normal: 'bg-amber-500',
    imgHover: 'from-amber-400',
    imgNormal: 'from-amber-500',
  },
  LANGUAGE: {
    hover: 'bg-emerald-400 ',
    normal: 'bg-emerald-500',
    imgHover: 'from-emerald-400',
    imgNormal: 'from-emerald-500',
  },
  CAREER: {
    hover: 'bg-purple-400 ',
    normal: 'bg-purple-500',
    imgHover: 'from-purple-400',
    imgNormal: 'from-purple-500',
  },
};

const RoadmapSpecialTypeButton = ({
  roadmapTypeButtonInfo,
  hoveredType,
  onSelect,
  onHover,
}: RoadmapSpecialTypeButtonProps) => {
  const isHovered = hoveredType && hoveredType !== roadmapTypeButtonInfo.type;

  return (
    <button
      type="button"
      onClick={() => onSelect(roadmapTypeButtonInfo.type)}
      onMouseEnter={() => onHover(roadmapTypeButtonInfo.type)}
      onMouseLeave={() => onHover(null)}
      className={`flex min-h-32 w-full max-w-2xl min-w-0 overflow-hidden rounded-3xl shadow-md transition-all duration-300 hover:scale-105 ${
        isHovered
          ? colorClasses[roadmapTypeButtonInfo.type].hover
          : colorClasses[roadmapTypeButtonInfo.type].normal
      } md:h-42`}
    >
      <div className="flex flex-2 flex-col items-start gap-1 px-6 py-4 md:px-10 md:py-6">
        <p className="text-title3 md:text-title2 lg:text-title1 text-left font-bold text-white">
          {roadmapTypeButtonInfo.title}
        </p>
        <p className="line-clamp-2 text-left text-xs text-blue-100 md:text-sm">
          {roadmapTypeButtonInfo.description}
        </p>
      </div>
      <div className="relative min-w-0 flex-1">
        <img
          src={roadmapTypeButtonInfo.thumbnailUrl}
          alt=""
          className="h-full w-full object-cover"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-r ${isHovered ? colorClasses[roadmapTypeButtonInfo.type].imgHover : colorClasses[roadmapTypeButtonInfo.type].imgNormal} to-white/10`}
        />
      </div>
    </button>
  );
};

export default RoadmapSpecialTypeButton;
