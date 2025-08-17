import { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import Typing from '@components/status/Typing';
import Logo from '@assets/logo/logo.svg';

import { chatBotInit } from '@constants/chat';

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
  const INITIAL_MENT =
    '안녕하세요! 👋 도우미 Fori예요.\n한국 생활과 행정 절차에 대해 궁금한 점이 있으면 언제든 물어보세요.';
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  return (
    <div ref={wrapRef} className="min-h-0 flex-1 overflow-auto px-2">
      <div className="mb-3 flex items-start gap-2">
        <img src={Logo} alt="Fori Logo" className="h-8 w-8" />
        <div className="border-border flex flex-col gap-2 rounded-tl-sm rounded-tr-2xl rounded-br-2xl rounded-bl-2xl border bg-white p-3 text-sm shadow-sm">
          <p className="whitespace-pre-line">{chatBotInit.initialMent}</p>
          {chatBotInit.faqButtonText.map((text, index) => (
            <button
              key={index}
              className="hover:bg-white-hover border-primary text-primary inline w-fit rounded-md border bg-white p-1.5 text-left text-xs font-medium"
            >
              {text}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {messages.map((m) => (
          <ChatMessage key={m.id} message={m} />
        ))}

        {loading && (
          <div className="rounded-xl p-3">
            <Typing />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatLog;
