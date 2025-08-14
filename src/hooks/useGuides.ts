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
    onError: (error) => toast.error('평가 제출에 실패했어요'),
  });
};

const useGuides = () => {
  const { data: guideProfiles, isLoading: isGuideProfilesLoading } =
    useGuideProfiles();
  const { data: preGuideFeedbacks, isLoading: isPreGuideFeedbacksLoading } =
    usePreGuideFeedbacks();
  const { data: preGuideRatings, isLoading: isPreGuideRatingsLoading } =
    usePreGuideRatings();
  const { data: preGuideRateStatus, isLoading: isPreGuideRateStatusLoading } =
    usePreGuideStatus();
  const submitRatings = useSubmitRatings();

  return {
    guideProfiles,
    isGuideProfilesLoading,
    preGuideFeedbacks,
    isPreGuideFeedbacksLoading,
    submitRatings,
    preGuideRatings,
    isPreGuideRatingsLoading,
    preGuideRateStatus,
    isPreGuideRateStatusLoading,
  };
};

export default useGuides;
