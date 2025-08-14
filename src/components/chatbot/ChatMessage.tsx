import React from 'react';

const ChatMessage = ({
  message,
}: {
  message: { id: string; role: 'user' | 'bot' | 'system'; text: string };
}) => {
  const isUser = message.role === 'user';
  return (
    <div
      className={`max-w-[80%] rounded-2xl p-3 ${isUser ? 'bg-primary/80 self-end text-white' : 'self-start bg-gray-100 text-black'}`}
    >
      <div className="text-sm whitespace-pre-wrap">{message.text}</div>
    </div>
  );
};

export default ChatMessage;
