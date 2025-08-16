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
    <main>
      <header className="mb-8">
        <p className="text-title2 text-text-muted font-semibold">
          나의 정착 로드맵
        </p>
        <p className="mt-1 text-sm text-slate-500">
          진단 결과를 바탕으로 생성된 개인 맞춤형 정착 가이드예요.
        </p>
      </header>
      <div className="flex flex-col items-center gap-6">
        {roadmapTypes.map((category: RoadmapTypeDetail) => {
          const roadmapType = category.roadmapType;
          const title = capitalizeFirstLetter(category.roadmapType);
          const progress = category.progressRatio;
          const roadmapTypeInfo: RoadmapTypeButtonInfo = {
            type: roadmapType,
            title: t(`roadmap.categories.${roadmapType.toLowerCase()}.title`, {
              defaultValue: title,
            }),
            description: t(
              `roadmap.categories.${roadmapType.toLowerCase()}.description`,
              {
                defaultValue: '',
              }
            ),
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
    </main>
  );
};

export default RoadmapTypeSelector;
