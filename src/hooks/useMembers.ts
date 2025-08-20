import { useQuery } from '@tanstack/react-query';
import { getMemberInformation } from '@apis/members';

export const useMemberInformation = () => {
  return useQuery({
    queryKey: ['memberInformation'],
    queryFn: getMemberInformation,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: false,
  });
};
