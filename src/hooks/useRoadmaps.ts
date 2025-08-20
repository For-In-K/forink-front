import { useQuery, useQueryClient } from '@tanstack/react-query';
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

export const useRoadmapTypes = (p0?: { enabled: boolean }) => {
  return useQuery({
    queryKey: ['roadmapTypes'],
    queryFn: getRoadmapTypes,
    enabled: p0?.enabled,
  });
};

export const useRoadmapsOnType = (
  roadmapType?: string,
  p0?: { enabled: boolean }
) => {
  return useQuery({
    queryKey: ['roadmapsOnType', roadmapType],
    queryFn: () => getRoadmapsOnType(roadmapType!),
    enabled: !!roadmapType && p0?.enabled,
  });
};

export const useRoadmapStepDetail = (stepContentId: number) => {
  return useQuery({
    queryKey: ['roadmapStepDetail', stepContentId],
    queryFn: () => getRoadmapStepDetail(stepContentId!),
    enabled: !!stepContentId,
  });
};

export const useUpdateRoadmapStepDetailCheck = (stepContentId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateRoadmapStepDetailCheck,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['roadmapStepDetail', stepContentId],
      });
      toast.success('체크리스트가 업데이트 되었어요');
    },
    onError: () => {
      toast.error('체크리스트 업데이트에 실패했어요');
    },
  });
};

export const useSubmitRoadmapFeedbackOnSubroadmap = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: submitRoadmapFeedbackOnSubroadmap,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['memberInformation'] });
      toast.success('피드백이 제출되었어요');
    },
    onError: () => {
      toast.error('피드백 제출에 실패했어요');
    },
  });
};

export const useSubmitRoadmapFeedbackOnStepDetail = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: submitRoadmapFeedbackOnStepDetail,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['memberInformation'] });
      toast.success('피드백이 제출되었어요');
    },
    onError: () => {
      toast.error('피드백 제출에 실패했어요');
    },
  });
};
