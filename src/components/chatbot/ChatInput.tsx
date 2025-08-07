import { useRef } from 'react';
import { ArrowUp } from 'lucide-react';

const ChatInput = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  };

  return (
    <div className="flex w-full flex-col gap-1 rounded-xl bg-white p-2 shadow-sm">
      <textarea
        ref={textareaRef}
        className="text-text-primary w-full resize-none p-2 placeholder:text-gray-300 focus:outline-none"
        placeholder="Type your message..."
        rows={1}
        style={{ overflow: 'hidden' }}
        onInput={handleInput}
      />
      <button className="hover:bg-text-muted/80 bg-text-muted flex size-10 items-center justify-center self-end rounded-full text-center">
        <ArrowUp className="text-surface h-6 w-6" />
      </button>
    </div>
  );
};

export default ChatInput;
