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
    queryFn: () => getRoadmapsOnType(roadmapType!),
    enabled: !!roadmapType,
  });
};

export const useRoadmapStepDetail = (stepContentId?: number) => {
  return useQuery({
    queryKey: ['roadmapStepDetail', stepContentId],
    queryFn: () => getRoadmapStepDetail(stepContentId!),
    enabled: !!stepContentId,
  });
};

export const useUpdateRoadmapStepDetailCheck = () => {
  return useMutation({
    mutationFn: updateRoadmapStepDetailCheck,
    onSuccess: () => {
      toast.success('체크리스트가 업데이트 되었어요');
    },
    onError: () => {
      toast.error('체크리스트 업데이트에 실패했어요');
    },
  });
};

export const useSubmitRoadmapFeedbackOnSubroadmap = () => {
  return useMutation({
    mutationFn: submitRoadmapFeedbackOnSubroadmap,
    onSuccess: () => {
      toast.success('피드백이 제출되었어요');
    },
    onError: () => {
      toast.error('피드백 제출에 실패했어요');
    },
  });
};

export const useSubmitRoadmapFeedbackOnStepDetail = () => {
  return useMutation({
    mutationFn: submitRoadmapFeedbackOnStepDetail,
    onSuccess: () => {
      toast.success('피드백이 제출되었어요');
    },
    onError: () => {
      toast.error('피드백 제출에 실패했어요');
    },
  });
};

const useRoadmaps = (roadmapType?: string, stepContentId?: number) => {
  const { mutate: createRoadmapsRequest } = useCreateRoadmaps();
  const { data: roadmapTypes, isLoading: isRoadmapTypesLoading } =
    useRoadmapTypes();
  const { data: roadmapsOnType, isLoading: isRoadmapsOnTypeLoading } =
    useRoadmapsOnType(roadmapType);
  const { data: roadmapStepDetail } = useRoadmapStepDetail(stepContentId);
  const { mutate: updateCheck, isSuccess: isUpdateCheckSuccess } =
    useUpdateRoadmapStepDetailCheck();
  const {
    mutate: submitFeedbackOnSubroadmap,
    isSuccess: isSubmitFeedbackOnSubroadmapSuccess,
  } = useSubmitRoadmapFeedbackOnSubroadmap();
  const {
    mutate: submitFeedbackOnStepDetail,
    isSuccess: isSubmitFeedbackOnStepDetailSuccess,
  } = useSubmitRoadmapFeedbackOnStepDetail();

  return {
    createRoadmapsRequest,
    roadmapTypes,
    isRoadmapTypesLoading,
    roadmapsOnType,
    isRoadmapsOnTypeLoading,
    roadmapStepDetail,
    updateCheck,
    isUpdateCheckSuccess,
    submitFeedbackOnSubroadmap,
    isSubmitFeedbackOnSubroadmapSuccess,
    submitFeedbackOnStepDetail,
    isSubmitFeedbackOnStepDetailSuccess,
  };
};

export default useRoadmaps;
