import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import useAuth from '@hooks/useAuth';
import { useRoadmapTypes } from '@hooks/useRoadmaps';
import { guideRoadmapTypes } from '@constants/guides';
import { capitalizeFirstLetter } from '@utils/chars';
import type { RoadmapTypeDetail } from 'types/roadmaps';
import RoadmapTypeButton from './template/RoadmapTypeButton';
import RoadmapTypeButtonSkeleton from './template/RoadmapTypeButtonSkeleton';

export interface RoadmapTypeButtonInfo {
  type: string;
  title: string;
  description: string;
  progress: number;
}

const RoadmapTypeSelector = () => {
  const { isUser, isPreGuide } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [hoveredType, setHoveredType] = useState<string | null>(null);

  const { data: userRoadmapTypes, isLoading: isUserRoadmapTypesLoading } =
    useRoadmapTypes({ enabled: isUser });

  const getRoadmapTypes = () => {
    if (isUser) {
      return { data: userRoadmapTypes, isLoading: isUserRoadmapTypesLoading };
    } else if (isPreGuide) {
      return { data: guideRoadmapTypes, isLoading: false };
    }
    return { data: [], isLoading: false };
  };

  const { data: roadmapTypes, isLoading: isRoadmapTypesLoading } =
    getRoadmapTypes();

  const handleRoadmapTypeSelect = (roadmapType: string) => {
    navigate(`/roadmap/${roadmapType}`);
  };

  const handleHover = (type: string | null) => {
    setHoveredType(type);
  };

  const roadmapTypesList: RoadmapTypeDetail[] = roadmapTypes ?? [];

  return (
    <main>
      <header className="mb-8">
        <p className="text-title2 text-text-muted font-semibold">
          {t('roadmap.title')}
        </p>
        <p className="mt-1 text-sm text-slate-500">
          {t('roadmap.description')}
        </p>
      </header>

      <div className="flex flex-col items-center gap-6">
        {isRoadmapTypesLoading && (
          <>
            {Array.from({ length: 6 }).map((_, index) => (
              <RoadmapTypeButtonSkeleton key={index} />
            ))}
          </>
        )}

        {!isRoadmapTypesLoading && roadmapTypesList.length === 0 && (
          <div className="w-full rounded-md border border-amber-200 bg-amber-50 p-4 text-amber-700">
            아직 생성된 로드맵이 없어요.
          </div>
        )}

        {!isRoadmapTypesLoading &&
          roadmapTypesList.map((category: RoadmapTypeDetail) => {
            const roadmapType = category.roadmapType;
            const title = capitalizeFirstLetter(category.roadmapType);
            const progress = category.progressRatio;
            const roadmapTypeInfo: RoadmapTypeButtonInfo = {
              type: roadmapType,
              title: t(
                `roadmap.categories.${roadmapType.toLowerCase()}.title`,
                {
                  defaultValue: title,
                }
              ),
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
