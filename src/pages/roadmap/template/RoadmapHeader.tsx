import { roadmapTypes } from '@mocks/data/roadmaps';
import Progressbar from '@components/status/Progressbar';
import type { RoadmapTypeDetail } from 'types/roadmaps';
import { capitalizeFirstLetter } from '@utils/chars';

import { subroadmaps } from '@mocks/data/roadmaps';

interface RoadmapHeaderProps {
  headerType: 'milestone' | 'detail';
  roadmapType: string;
  roadmapId?: number;
}

const getProgressRatio = (type: string) => {
  const roadmapTypeStd = type.toUpperCase();
  const roadmapItem = roadmapTypes.find(
    (item: RoadmapTypeDetail) => item.type === roadmapTypeStd
  );
  return roadmapItem ? roadmapItem.progressRatio : 0;
};

const RoadmapHeader = ({
  headerType,
  roadmapType,
  roadmapId,
}: RoadmapHeaderProps) => {
  const headerRatio = getProgressRatio(roadmapType);
  const milestoneTitle = subroadmaps.find(
    (item) => item.roadmapId === roadmapId
  )?.title;

  return (
    <>
      {headerType === 'milestone' && (
        <div className="text-text-muted flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-around md:gap-20">
          <div className="bg-surface text-title2 rounded-full px-6 py-2">
            {capitalizeFirstLetter(roadmapType)}
          </div>
          <div className="flex min-h-10 w-full flex-1 flex-col justify-between md:w-auto">
            <span className="text-body">
              You're {headerRatio}% closer to completing the roadmap!
            </span>
            <Progressbar ratio={headerRatio} />
          </div>
        </div>
      )}
      {headerType === 'detail' && milestoneTitle && (
        <div className="text-text-muted flex gap-5 md:justify-start md:gap-10">
          <div className="bg-surface text-title2 rounded-full px-6 py-2">
            {capitalizeFirstLetter(roadmapType)}
          </div>
          <div className="bg-surface text-title2 truncate rounded-full px-6 py-2">
            {capitalizeFirstLetter(milestoneTitle)}
          </div>
        </div>
      )}
    </>
  );
};

export default RoadmapHeader;
