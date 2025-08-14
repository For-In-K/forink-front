import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { createChatBot, exchangeChatMessage } from '@apis/chat';

export const useCreateChatBot = () => {
  return useMutation({
    mutationFn: createChatBot,
    onSuccess: () => toast.success('챗봇 Fori가 생성되었어요!'),
    onError: () => toast.error('챗봇 Fori 생성에 실패했어요'),
  });
};

export const useExchangeChatMessage = () => {
  return useMutation({
    mutationFn: exchangeChatMessage,
    onSuccess: () => toast.success('메시지가 성공적으로 교환되었어요!'),
    onError: () => toast.error('메시지 교환에 실패했어요'),
  });
};

const useChatBot = () => {
  const { mutate: createChatBot } = useCreateChatBot();
  const { mutate: exchangeChatMessage } = useExchangeChatMessage();

  return {
    createChatBot,
    exchangeChatMessage,
  };
};

export default useChatBot;
