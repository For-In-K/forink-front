import { useEffect, useState, useCallback } from 'react';
import ChatHeader from './ChatHeader';
import ChatLog from './ChatLog';
import ChatInput from './ChatInput';
import useChatBot from '@hooks/useChatBot';
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

const ChatWindow = ({ bottom = 96 }: { bottom?: number }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatId, setChatId] = useState<number | null>(null);

  const { createChatBot, isCreating, exchangeChatMessage, isExchanging } =
    useChatBot();
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
          pushMessage('bot', '응답을 받지 못했습니다. 다시 시도해 주세요.'),
      });
    },
    [exchangeChatMessage, pushMessage]
  );

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim()) return;
      pushMessage('user', text);

      if (chatId && chatId >= 1) {
        sendWithChatId(chatId, text);
        return;
      }

      createChatBot(undefined, {
        onSuccess: (data: CreateChatBotResponse | any) => {
          const id = data?.chatId ?? data?.data?.chatId ?? null;
          if (id && Number(id) >= 1) {
            const numericId = Number(id);
            setChatId(numericId);
            try {
              localStorage.setItem(STORAGE_KEY, String(numericId));
            } catch {}
            sendWithChatId(numericId, text);
          } else {
            pushMessage('bot', '챗봇 생성에 실패했습니다.');
          }
        },
        onError: () => pushMessage('bot', '챗봇 생성에 실패했습니다.'),
      });
    },
    [chatId, createChatBot, pushMessage, sendWithChatId]
  );

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && Number(stored) >= 1) {
        setChatId(Number(stored));
        return;
      }
    } catch {}

    createChatBot(undefined, {
      onSuccess: (data: CreateChatBotResponse | any) => {
        const id = data?.chatId ?? data?.data?.chatId ?? null;
        if (id && Number(id) >= 1) {
          const numericId = Number(id);
          setChatId(numericId);
          try {
            localStorage.setItem(STORAGE_KEY, String(numericId));
          } catch {}
        }
      },
    });
  }, []);

  return (
    <div
      className="fixed right-4 flex w-[360px] flex-col items-center rounded-xl bg-white shadow-lg"
      style={{
        top: `calc(var(--height-min-header) + 20px)`,
        bottom: `${bottom}px`,
        maxHeight: `calc(100vh - var(--height-min-header) - ${bottom}px)`,
        zIndex: 50,
      }}
    >
      <ChatHeader chatId={chatId} isBusy={isBusy} />
      <div className="w-full border-t border-gray-200" />
      <div className="flex h-full min-h-0 w-full flex-col justify-between gap-2 p-3">
        <ChatLog messages={messages} loading={isBusy} />
        <ChatInput onSend={sendMessage} disabled={isBusy} />
      </div>
    </div>
  );
};

export default ChatWindow;
