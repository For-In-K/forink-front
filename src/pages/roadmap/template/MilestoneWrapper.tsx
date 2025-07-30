import { useNavigate } from 'react-router-dom';
import MilestoneButton from '@src/components/status/MilestoneButton';
import { subroadmaps } from '@src/mocks/data/roadmaps';

interface MilestoneWrapperProps {
  roadmapType: string;
}

const MilestoneWrapper = ({ roadmapType }: MilestoneWrapperProps) => {
  const navigate = useNavigate();

  const handleMilestoneSelect = (roadmapId: number) => {
    navigate(`/roadmap/${roadmapType}/${roadmapId}`);
  };

  return (
    <>
      <div className="">
        {subroadmaps.map((subroadmap) => {
          return (
            <MilestoneButton
              key={subroadmap.roadmapId}
              title={subroadmap.title}
              statusType={subroadmap.statusType}
              onClick={() => handleMilestoneSelect(subroadmap.roadmapId)}
            />
          );
        })}
      </div>
    </>
  );
};

export default MilestoneWrapper;
