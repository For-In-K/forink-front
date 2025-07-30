import { roadmapTypes } from '@src/mocks/data/roadmaps';
import Progressbar from '@src/components/status/Progressbar';
import { capitalizeFirstLetter } from '@src/utils/chars';

interface RoadmapHeaderType {
  roadmapType: string;
}

const getProgressRatio = (type: string) => {
  const roadmapTypeStd = type.toUpperCase();
  const roadmapItem = roadmapTypes.find((item) => item.type === roadmapTypeStd);
  return roadmapItem ? roadmapItem.progressRatio : 0;
};

const RoadmapHeader = ({ roadmapType }: RoadmapHeaderType) => {
  const headerRatio = getProgressRatio(roadmapType);

  return (
    <>
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
    </>
  );
};

export default RoadmapHeader;
