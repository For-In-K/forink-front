import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { VALID_ROADMAP_TYPES } from 'types/roadmaps';
import RoadmapHeader from './template/RoadmapHeader';
import MilestoneWrapper from './template/milestone/MilestoneWrapper';

const RoadmapDiagram = () => {
  const navigate = useNavigate();
  const { roadmapType } = useParams<{ roadmapType: string }>();

  const isValidType = roadmapType && VALID_ROADMAP_TYPES.includes(roadmapType);

  useEffect(() => {
    if (!isValidType) {
      toast.error('유효하지 않은 로드맵 타입입니다.');
      navigate('/');
    }
  }, [isValidType, navigate]);

  if (!isValidType) return null;

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
