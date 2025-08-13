import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { createRoadmaps } from '@apis/roadmaps';

const useRoadmaps = () => {
  const { mutate: createRoadmapsRequest } = useMutation({
    mutationFn: createRoadmaps,
    onSuccess: () => {
      toast.success('사용자 전용 로드맵이 생성되었어요');
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });

  return {
    createRoadmapsRequest,
  };
};

export default useRoadmaps;
