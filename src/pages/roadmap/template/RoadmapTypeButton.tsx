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
      className={`flex h-42 w-full max-w-2xl flex-col items-start gap-1 rounded-3xl px-10 py-6 shadow-md transition-all duration-300 hover:scale-105 ${
        isHovered ? 'bg-blue-300 blur-xs filter' : 'bg-blue-400'
      }`}
    >
      <p className="text-title1 text-left font-bold text-white">
        {roadmapTypeButtonInfo.title}
      </p>
      <p className="text-body h-16 text-left text-blue-100">
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
