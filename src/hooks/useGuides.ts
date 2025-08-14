import { useQuery } from '@tanstack/react-query';
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
      toast.success('Rating submitted successfully!');
    },
    onError: (error) => {
      toast.error(`Failed to submit rating: ${error.message}`);
    },
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
