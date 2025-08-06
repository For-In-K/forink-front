import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { capitalizeFirstLetter } from '@utils/chars';
import type { RoadmapTypeDetail } from 'types/roadmaps';
import RoadmapTypeButton from './template/RoadmapTypeButton';
import { roadmapTypes } from '@mocks/data/roadmaps';

export interface RoadmapTypeButtonInfo {
  type: string;
  title: string;
  description: string;
  progress: number;
}

const RoadmapTypeSelector = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [hoveredType, setHoveredType] = useState<string | null>(null);

  const handleRoadmapTypeSelect = (roadmapType: string) => {
    console.log(`Selected roadmap type: ${roadmapType}`);
    navigate(`/roadmap/${roadmapType}`);
  };

  const handleHover = (type: string | null) => {
    setHoveredType(type);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {roadmapTypes.map((category: RoadmapTypeDetail) => {
        const roadmapTypeInfo: RoadmapTypeButtonInfo = {
          type: category.type,
          title: t(`roadmap.categories.${category.type}.title`, {
            defaultValue: capitalizeFirstLetter(category.type),
          }),
          description: t(`roadmap.categories.${category.type}.description`, {
            defaultValue: '',
          }),
          progress: category.progressRatio,
        };

        return (
          <RoadmapTypeButton
            key={category.type}
            roadmapTypeButtonInfo={roadmapTypeInfo}
            hoveredType={hoveredType}
            onSelect={handleRoadmapTypeSelect}
            onHover={handleHover}
          />
        );
      })}
    </div>
  );
};

export default RoadmapTypeSelector;
