import { useState } from 'react';

import useCopy from '@hooks/useCopy';
import LogoIcon from '@assets/logo/logo.svg?react';
import { Ellipsis, Mail, Check, Copy } from 'lucide-react';
import Typing from '@components/status/Typing';

const ChatHeader = ({
  chatId,
  isBusy,
  isActive,
}: {
  chatId: number | null;
  isBusy: boolean;
  isActive: boolean;
}) => {
  const FORINK_EMAIL = import.meta.env.VITE_EMAIL_DEV;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCopied, copy] = useCopy();

  return (
    <header className="flex h-16 w-full items-center justify-between gap-4 px-3">
      <div className="flex items-center gap-5">
        <div className="relative">
          <svg
            className="bg-surface rounded-md p-1"
            viewBox="0 0 50 50"
            width="40"
            height="40"
          >
            <LogoIcon />
          </svg>
          <div
            className={`absolute -right-1 -bottom-1 size-3 rounded-full border ${
              isActive
                ? 'bg-secondary border-gray-300'
                : 'border-gray-300 bg-gray-400'
            }`}
            title={isActive ? 'Online' : 'Offline'}
          />
        </div>
        <div className="flex flex-col justify-around gap-1">
          <span className="text-body text-text-primary h-4 font-bold">
            Fori
          </span>
          <span className="text-caption font-semilight text-gray-500">
            Your assistant
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 pr-2">
        {chatId ? (
          <div className="text-text-muted relative text-sm">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="hover:bg-white-hover rounded-full p-1"
            >
              <Ellipsis size={18} />
            </button>
            {isMenuOpen && (
              <div className="border-border absolute top-full right-0 mt-1 w-48 rounded-md border bg-white shadow-lg">
                <ul className="p-2">
                  <li className="hover:bg-white-hover rounded-md p-1">
                    <a
                      href={`mailto:${FORINK_EMAIL}`}
                      className="flex items-center"
                    >
                      <Mail size={16} className="mr-2 inline-block" />
                      이메일 문의
                    </a>
                  </li>
                  <li className="hover:bg-white-hover rounded-md p-1">
                    <button
                      className="flex items-center"
                      onClick={() =>
                        typeof copy === 'function' && copy(FORINK_EMAIL)
                      }
                    >
                      {isCopied ? (
                        <>
                          <Check
                            size={16}
                            className="mr-2 inline-block text-emerald-400"
                          />
                          복사 완료!
                        </>
                      ) : (
                        <>
                          <Copy size={16} className="mr-2 inline-block" />
                          이메일 복사
                        </>
                      )}
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : isBusy ? (
          <Typing />
        ) : null}
      </div>
    </header>
  );
};

export default ChatHeader;
