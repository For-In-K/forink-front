import ChatInput from './ChatInput';
import ChatLog from './ChatLog';
import LogoIcon from '@assets/logo/logo.svg?react';

const ChatWindow = ({ bottom = 96 }) => {
  return (
    <div
      className="fixed right-4 flex w-100 flex-col items-center rounded-xl bg-white shadow-lg"
      style={{
        top: `calc(var(--height-min-header) + 20px)`,
        bottom: `${bottom}px`,
        maxHeight: `calc(100vh - var(--height-min-header) - ${bottom}px)`,
        zIndex: 50,
      }}
    >
      <h2 className="my-2 flex w-full items-center justify-start gap-4 px-3">
        <svg
          className="bg-surface rounded-md p-1"
          viewBox="0 0 50 50"
          width="40"
          height="40"
        >
          <LogoIcon />
        </svg>
        <div className="flex flex-col justify-around gap-1">
          <span className="text-body text-text-primary h-4 font-bold">
            Fori
          </span>
          <span className="text-caption font-semilight text-gray-500">
            Your assistant
          </span>
        </div>
      </h2>
      <span className="w-full border-t border-gray-200" />
      <div className="flex h-full min-h-0 w-full flex-col justify-between gap-2 p-3">
        <ChatLog />
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatWindow;
