import React from 'react';
import Progressbar from '@components/status/Progressbar';
import { RoadmapTypeButtonInfo } from '../RoadmapTypeSelectorPage';

interface RoadmapTypeButtonProps {
  roadmapTypeButtonInfo: RoadmapTypeButtonInfo;
  hoveredType: string | null;
  onSelect: (type: string) => void;
  onHover: (type: string | null) => void;
}

const RoadmapTypeButton = ({
  roadmapTypeButtonInfo,
  hoveredType,
  onSelect,
  onHover,
}: RoadmapTypeButtonProps) => {
  const isHovered = hoveredType && hoveredType !== roadmapTypeButtonInfo.type;

  return (
    <button
      type="button"
      onClick={() => onSelect(roadmapTypeButtonInfo.type)}
      onMouseEnter={() => onHover(roadmapTypeButtonInfo.type)}
      onMouseLeave={() => onHover(null)}
      className={`flex w-full max-w-2xl min-w-0 flex-col items-start gap-1 rounded-3xl px-6 py-4 shadow-md transition-all duration-300 hover:scale-105 ${
        isHovered ? 'bg-blue-300 blur-xs filter' : 'bg-blue-400'
      } md:h-42 md:px-10 md:py-6`}
    >
      <p className="text-title3 md:text-title2 lg:text-title1 text-left font-bold text-white">
        {roadmapTypeButtonInfo.title}
      </p>
      <p className="line-clamp-2 h-12 text-left text-xs text-blue-100 md:h-16 md:text-sm">
        {roadmapTypeButtonInfo.description}
      </p>
      <div className="my-1 flex w-full items-center gap-2">
        <Progressbar
          totalSize={100}
          currentSize={roadmapTypeButtonInfo.progress}
          showNumber="percent"
        />
      </div>
    </button>
  );
};

export default RoadmapTypeButton;
