import { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

type Message = {
  id: string;
  role: 'user' | 'bot' | 'system';
  text: string;
  ts: number;
};

const ChatLog = ({
  messages = [],
  loading = false,
}: {
  messages?: Message[];
  loading?: boolean;
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  return (
    <div ref={wrapRef} className="min-h-0 flex-1 overflow-auto px-2">
      <div className="flex flex-col gap-3">
        {messages.map((m) => (
          <ChatMessage key={m.id} message={m} />
        ))}

        {loading && (
          <div className="self-start rounded-md bg-gray-100 p-3 text-black">
            <div className="text-sm">응답 중...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatLog;
