import { useParams } from 'react-router-dom';
import RoadmapHeader from './template/RoadmapHeader';
import StepWrapper from './template/step/StepWrapper';

const RoadmapStepDetail = () => {
  const { roadmapType, roadmapId } = useParams();

  if (!(roadmapType && roadmapId)) {
    return <div>Cannot load roadmap step.</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-10">
        <RoadmapHeader
          headerType="detail"
          roadmapType={roadmapType}
          roadmapId={Number(roadmapId)}
        />
        <StepWrapper roadmapId={Number(roadmapId)} />
      </div>
    </>
  );
};

export default RoadmapStepDetail;
