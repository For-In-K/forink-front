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

const useGuides = () => {
  const queryClient = useQueryClient();

  const { data: guideProfiles = [], isLoading: isGuideProfilesLoading } =
    useQuery({
      queryKey: ['guideProfiles'],
      queryFn: getGuideProfiles,
    });

  const {
    data: preGuideFeedbacks = [],
    isLoading: isPreGuideFeedbacksLoading,
  } = useQuery({
    queryKey: ['preGuideFeedbacks'],
    queryFn: getPreGuideFeedbacks,
  });

  const { mutate: submitRatings } = useMutation({
    mutationFn: postRatingsOnFeedback,
    onSuccess: () => {
      toast.success('평가가 성공적으로 제출되었어요');
      queryClient.invalidateQueries({ queryKey: ['preGuideFeedbacks'] });
    },
    onError: (error) => toast.error('평가 제출에 실패했어요'),
  });

  const { data: preGuideRatings = [], isLoading: isPreGuideRatingsLoading } =
    useQuery({
      queryKey: ['preGuideRatings'],
      queryFn: getPreGuideRatings,
    });

  const { data: preGuideRateStatus, isLoading: isPreGuideRateStatusLoading } =
    useQuery({
      queryKey: ['preGuideRateStatus'],
      queryFn: getPreGuideStatus,
    });

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
