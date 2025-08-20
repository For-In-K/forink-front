import { useEffect, useState, useCallback } from 'react';
import ChatHeader from './ChatHeader';
import ChatLog from './ChatLog';
import ChatInput from './ChatInput';
import { useExchangeChatMessage } from '@hooks/useChatBot';
import type {
  CreateChatBotResponse,
  GiveChatMessageRequest,
  ReceiveChatMessageResponse,
} from 'types/chat';

type Message = {
  id: string;
  role: 'user' | 'bot' | 'system';
  text: string;
  ts: number;
};

const STORAGE_KEY = 'fori_chatId';

interface ChatWindowProps {
  bottom?: number;
  isCreating?: boolean;
}

const ChatWindow = ({ bottom = 0, isCreating }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatId, setChatId] = useState<number | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  const { mutate: exchangeChatMessage, isPending: isExchanging } =
    useExchangeChatMessage();
  const isBusy = Boolean(isCreating || isExchanging);

  const pushMessage = useCallback((role: Message['role'], text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `${role}-${Date.now()}-${Math.random()}`,
        role,
        text,
        ts: Date.now(),
      },
    ]);
  }, []);

  const sendWithChatId = useCallback(
    (id: number, text: string) => {
      const payload: GiveChatMessageRequest = { message: text };
      exchangeChatMessage({ botId: id, payload } as any, {
        onSuccess: (data: ReceiveChatMessageResponse | any) => {
          const answer =
            (data as ReceiveChatMessageResponse)?.chatAnswer ??
            String(data ?? '');
          pushMessage('bot', answer);
        },
        onError: () =>
          pushMessage('bot', '응답을 받지 못했어요. 다시 시도해 주세요 😢'),
      });
    },
    [exchangeChatMessage, pushMessage]
  );

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim()) return;
      pushMessage('user', text);

      let storedId: number | null = null;
      try {
        const s = localStorage.getItem(STORAGE_KEY);
        if (s && Number(s) >= 1) storedId = Number(s);
      } catch {}

      if (storedId && storedId >= 1) {
        sendWithChatId(storedId, text);
        return;
      }

      pushMessage('bot', '챗봇이 준비되지 않았어요. 다시 열어주세요.');
    },
    [pushMessage, sendWithChatId]
  );

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && Number(stored) >= 1) {
        setChatId(Number(stored));
        setIsActive(true);
      }
    } catch {}

    return () => {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
      setChatId(null);
      setIsActive(false);
    };
  }, [exchangeChatMessage]);

  return (
    <div
      className="fixed right-4 bottom-0 flex min-h-50 flex-col items-center rounded-xl bg-white shadow-lg md:w-[400px]"
      style={{
        top: `calc(var(--height-min-header) + 20px)`,
        maxHeight: `calc(100vh - var(--height-min-header) - ${bottom}px)`,
        zIndex: 50,
      }}
    >
      <ChatHeader chatId={chatId} isBusy={isBusy} isActive={isActive} />
      <div className="w-full border-t border-gray-200" />
      <div className="flex h-full min-h-0 w-full flex-col justify-between gap-3 p-3">
        <ChatLog
          messages={messages}
          loading={isBusy}
          onFaqClick={sendMessage}
        />
        <ChatInput onSend={sendMessage} disabled={isBusy} />
      </div>
    </div>
  );
};

export default ChatWindow;
