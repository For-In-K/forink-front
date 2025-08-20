import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import {
  getGuideProfiles,
  getPreGuideFeedbacks,
  postRatingsOnFeedback,
  getPreGuideRatings,
  getPreGuideStatus,
} from '@apis/guides';
import { toast } from 'react-toastify';

export const useGuideProfiles = () => {
  return useQuery({
    queryKey: ['guideProfiles'],
    queryFn: getGuideProfiles,
  });
};

export const usePreGuideFeedbacks = () => {
  return useQuery({
    queryKey: ['preGuideFeedbacks'],
    queryFn: getPreGuideFeedbacks,
  });
};

export const usePreGuideRatings = () => {
  return useQuery({
    queryKey: ['preGuideRatings'],
    queryFn: getPreGuideRatings,
  });
};

export const usePreGuideStatus = () => {
  return useQuery({
    queryKey: ['preGuideRateStatus'],
    queryFn: getPreGuideStatus,
  });
};

export const useSubmitRatings = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postRatingsOnFeedback,
    onSuccess: () => {
      toast.success('평가가 성공적으로 제출되었어요');
      queryClient.invalidateQueries({ queryKey: ['preGuideFeedbacks'] });
    },
    onError: () => toast.error('평가 제출에 실패했어요'),
  });
};
