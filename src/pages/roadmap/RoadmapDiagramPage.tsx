import { useParams } from 'react-router-dom';
import RoadmapHeader from './template/RoadmapHeader';
import MilestoneWrapper from './template/MilestoneWrapper';

const RoadmapDiagram = () => {
  const { roadmapType } = useParams();
  if (!roadmapType) {
    return <div>Cannot load roadmap progress.</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-10">
        <RoadmapHeader headerType="milestone" roadmapType={roadmapType} />
        <MilestoneWrapper roadmapType={roadmapType} />
      </div>
    </>
  );
};

export default RoadmapDiagram;
