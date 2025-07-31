import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { capitalizeFirstLetter } from '@utils/chars';
import type { RoadmapTypeDetail } from 'types/roadmaps';
import RoadmapTypeButton from './template/RoadmapTypeButton';
import { roadmapTypes } from '@mocks/data/roadmaps';

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
        const type = category.type.toLowerCase();
        const progress = category.progressRatio;
        const title = capitalizeFirstLetter(type);
        const description = t(
          `roadmap.categories.${type.toUpperCase()}.description`
        );

        return (
          <RoadmapTypeButton
            key={category.type}
            type={type}
            title={title}
            description={description}
            progress={progress}
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
