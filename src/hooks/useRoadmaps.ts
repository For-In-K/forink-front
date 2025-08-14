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

export const useCreateRoadmaps = () => {
  return useMutation({
    mutationFn: createRoadmaps,
    onSuccess: () => {
      toast.success('사용자 전용 로드맵이 생성되었어요');
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });
};

export const useRoadmapTypes = () => {
  return useQuery({
    queryKey: ['roadmapTypes'],
    queryFn: getRoadmapTypes,
  });
};

export const useRoadmapsOnType = (roadmapType?: string) => {
  return useQuery({
    queryKey: ['roadmapsOnType', roadmapType],
    queryFn: () => getRoadmapsOnType,
    enabled: !!roadmapType,
  });
};

const useRoadmaps = (roadmapType?: string) => {
  const { mutate: createRoadmapsRequest } = useCreateRoadmaps();
  const { data: roadmapTypes, isLoading: isRoadmapTypesLoading } =
    useRoadmapTypes();
  const { data: roadmapsOnType, isLoading: isRoadmapsOnTypeLoading } =
    useRoadmapsOnType(roadmapType);

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
