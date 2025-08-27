import { useTranslation } from 'react-i18next';
import { useRoadmapTypes, useRoadmapsOnType } from '@hooks/useRoadmaps';

import Progressbar from '@components/status/Progressbar';
import type { RoadmapTypeDetail } from 'types/roadmaps';
import { capitalizeFirstLetter } from '@utils/chars';

import { ChevronRight } from 'lucide-react';

interface RoadmapHeaderProps {
  headerType: 'milestone' | 'detail';
  roadmapType: string;
  roadmapId?: number;
}

const getProgressRatio = (roadmapTypes: RoadmapTypeDetail[], type: string) => {
  const roadmapTypeStd = type.toUpperCase();
  const roadmapItem = roadmapTypes.find(
    (item: RoadmapTypeDetail) => item.roadmapType === roadmapTypeStd
  );
  return roadmapItem ? roadmapItem.progressRatio : 0;
};

const RoadmapHeader = ({
  headerType,
  roadmapType,
  roadmapId,
}: RoadmapHeaderProps) => {
  const { t } = useTranslation();

  const { data: roadmapTypes = [] } = useRoadmapTypes();
  const { data: roadmapsOnType } = useRoadmapsOnType(roadmapType);

  const headerRatio = getProgressRatio(roadmapTypes, roadmapType);
  const milestoneTitle = Array.isArray(roadmapsOnType)
    ? roadmapsOnType.find((roadmap) => roadmap.roadmapId === roadmapId)?.title
    : undefined;

  return (
    <>
      {headerType === 'milestone' && (
        <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-around md:gap-20">
          <div className="text-text-muted text-title2 font-bold">
            {capitalizeFirstLetter(roadmapType)}
          </div>
          <div className="flex min-h-10 w-full flex-1 flex-col justify-between md:w-auto">
            <span className="text-text-muted text-sm font-medium">
              {t('roadmap.progress', { progress: headerRatio })}
            </span>
            <Progressbar ratio={headerRatio} />
          </div>
        </div>
      )}
      {headerType === 'detail' && milestoneTitle && (
        <div className="flex h-10 items-center gap-5 md:justify-start md:gap-8">
          <div className="text-text-muted/50 text-title2 font-bold">
            {capitalizeFirstLetter(roadmapType)}
          </div>
          <div className="rounded-full bg-slate-200 p-0.5">
            <ChevronRight className="text-text-muted h-5 w-5" />
          </div>
          <div className="text-body text-text-muted truncate font-bold">
            {capitalizeFirstLetter(milestoneTitle)}
          </div>
        </div>
      )}
    </>
  );
};

export default RoadmapHeader;
