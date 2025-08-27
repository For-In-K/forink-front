import React from 'react';

import { RoadmapSpecialTypeButtonInfo } from '../RoadmapTypeSelectorPage';

interface RoadmapSpecialTypeButtonProps {
  roadmapTypeButtonInfo: RoadmapSpecialTypeButtonInfo;
  hoveredType: string | null;
  onSelect: (type: string) => void;
  onHover: (type: string | null) => void;
}

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
        isHovered ? 'bg-blue-300 blur-xs filter' : 'bg-blue-400'
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
          className={`absolute inset-0 bg-gradient-to-r ${isHovered ? 'from-blue-300' : 'from-blue-400'} to-white/10`}
        />
      </div>
    </button>
  );
};

export default RoadmapSpecialTypeButton;
