import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getRoadmapTypes } from '@apis/roadmaps';
import { capitalizeFirstLetter } from '@utils/chars';
import type { RoadmapTypeDetail } from 'types/roadmaps';
import RoadmapTypeButton from './template/RoadmapTypeButton';

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

  const { data: roadmapTypes = [] } = useQuery<RoadmapTypeDetail[]>({
    queryKey: ['roadmapTypes'],
    queryFn: getRoadmapTypes,
    refetchOnWindowFocus: false,
  });

  const handleRoadmapTypeSelect = (roadmapType: string) => {
    navigate(`/roadmap/${roadmapType}`);
  };

  const handleHover = (type: string | null) => {
    setHoveredType(type);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {roadmapTypes.map((category: RoadmapTypeDetail) => {
        const roadmapType = category.roadmapType.toLowerCase();
        const title = capitalizeFirstLetter(category.roadmapType);
        const progress = category.progressRatio;

        const roadmapTypeInfo: RoadmapTypeButtonInfo = {
          type: roadmapType,
          title: t(`roadmap.categories.${roadmapType}.title`, {
            defaultValue: title,
          }),
          description: t(`roadmap.categories.${roadmapType}.description`, {
            defaultValue: '',
          }),
          progress: progress,
        };

        return (
          <RoadmapTypeButton
            key={category.roadmapType}
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
