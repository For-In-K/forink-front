import React from 'react';
import Logo from '@assets/logo/logo.svg';

const ChatMessage = ({
  message,
}: {
  message: { id: string; role: 'user' | 'bot' | 'system'; text: string };
}) => {
  const isUser = message.role === 'user';
  return (
    <div
      className={`flex w-full items-start ${isUser ? 'justify-end' : 'justify-start gap-2'}`}
    >
      {isUser ? null : <img src={Logo} alt="Fori Logo" className="h-8 w-8" />}
      <div
        className={`max-w-[80%] p-3 ${isUser ? 'bg-primary/80 rounded-tl-2xl rounded-tr-sm rounded-br-2xl rounded-bl-2xl text-white' : 'rounded-tl-sm rounded-tr-2xl rounded-br-2xl rounded-bl-2xl bg-gray-100 text-black'}`}
      >
        <div className="text-sm whitespace-pre-wrap">{message.text}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
