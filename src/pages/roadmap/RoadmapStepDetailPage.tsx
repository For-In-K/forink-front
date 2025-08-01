import { useParams } from 'react-router-dom';

const RoadmapStepDetail = () => {
  const { stepNumber } = useParams();
  return <>로드맵 스텝 상세입니다.</>;
};

export default RoadmapStepDetail;
