import { useQuery } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import {
  createRoadmaps,
  getRoadmapTypes,
  getRoadmapsOnType,
  getRoadmapStepDetail,
  updateRoadmapStepDetailCheck,
  submitRoadmapFeedbackOnSubroadmap,
  submitRoadmapFeedbackOnStepDetail,
} from '@apis/roadmaps';

const useRoadmaps = (roadmapType?: string) => {
  const { mutate: createRoadmapsRequest } = useMutation({
    mutationFn: createRoadmaps,
    onSuccess: () => {
      toast.success('사용자 전용 로드맵이 생성되었어요');
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });

  const { data: roadmapTypes, isLoading: isRoadmapTypesLoading } = useQuery({
    queryKey: ['roadmapTypes'],
    queryFn: getRoadmapTypes,
  });

  const { data: roadmapsOnType, isLoading: isRoadmapsOnTypeLoading } = useQuery(
    {
      queryKey: ['roadmapsOnType', roadmapType],
      queryFn: () => getRoadmapsOnType,
    }
  );

  return {
    createRoadmapsRequest,
    roadmapTypes: {
      data: roadmapTypes,
      isLoading: isRoadmapTypesLoading,
    },
    roadmapsOnType: {
      data: roadmapsOnType,
      isLoading: isRoadmapsOnTypeLoading,
    },
  };
};

export default useRoadmaps;
