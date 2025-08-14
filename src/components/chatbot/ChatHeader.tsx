import LogoIcon from '@assets/logo/logo.svg?react';

const ChatHeader = ({
  chatId,
  isBusy,
}: {
  chatId: number | null;
  isBusy: boolean;
}) => (
  <header className="flex h-16 w-full items-center justify-between gap-4 px-3">
    <div className="flex items-center gap-4">
      <svg
        className="bg-surface rounded-md p-1"
        viewBox="0 0 50 50"
        width="40"
        height="40"
      >
        <LogoIcon />
      </svg>
      <div className="flex flex-col justify-around gap-1">
        <span className="text-body text-text-primary h-4 font-bold">Fori</span>
        <span className="text-caption font-semilight text-gray-500">
          Your assistant
        </span>
      </div>
    </div>

    <div className="flex items-center gap-2 pr-2">
      {chatId ? (
        <div className="text-caption text-gray-500">chatId: {chatId}</div>
      ) : isBusy ? (
        <div className="text-caption text-gray-500">챗봇 준비중...</div>
      ) : null}
    </div>
  </header>
);

export default ChatHeader;
