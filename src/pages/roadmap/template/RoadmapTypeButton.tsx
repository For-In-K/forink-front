import React from 'react';
import Progressbar from '@components/status/Progressbar';

interface RoadmapTypeButtonProps {
  type: string;
  title: string;
  description: string;
  progress: number;
  hoveredType: string | null;
  onSelect: (type: string) => void;
  onHover: (type: string | null) => void;
}

const RoadmapTypeButton = ({
  type,
  title,
  description,
  progress,
  hoveredType,
  onSelect,
  onHover,
}: RoadmapTypeButtonProps) => {
  const isHovered = hoveredType && hoveredType !== type;

  return (
    <button
      type="button"
      onClick={() => onSelect(type)}
      onMouseEnter={() => onHover(type)}
      onMouseLeave={() => onHover(null)}
      className={`flex h-42 w-full max-w-2xl flex-col items-start gap-1 rounded-3xl px-10 py-6 text-white shadow-md transition-all duration-300 hover:scale-105 hover:text-white ${
        isHovered ? 'bg-primary/50 blur-xs filter' : 'bg-primary/75'
      }`}
    >
      <span className="text-title1 w-full text-left font-bold">{title}</span>
      <span className="text-body h-16 w-full text-left">{description}</span>
      <div className="my-1 flex w-full items-center gap-2">
        <Progressbar
          totalSize={100}
          currentSize={progress}
          showNumber="percent"
        />
      </div>
    </button>
  );
};

export default RoadmapTypeButton;
