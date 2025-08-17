import { useRef, useState, KeyboardEvent } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSend, disabled = false }: ChatInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState('');

  const resize = () => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = 'auto';
    ta.style.height = ta.scrollHeight + 'px';
  };

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
    resize();
  };

  const doSend = () => {
    const text = value.trim();
    if (!text || disabled) return;
    onSend(text);
    setValue('');
    const ta = textareaRef.current;
    if (ta) ta.style.height = 'auto';
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      doSend();
    }
  };

  return (
    <div className="border-border flex w-full flex-col gap-1 rounded-xl border bg-white p-2 shadow-sm">
      <textarea
        ref={textareaRef}
        className="text-text-primary w-full resize-none p-2 placeholder:text-gray-300 focus:outline-none"
        placeholder="Type your message..."
        rows={1}
        style={{ overflow: 'hidden' }}
        value={value}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        disabled={disabled}
      />
      <button
        type="button"
        onClick={doSend}
        className="hover:bg-primary-hover bg-primary flex h-8 w-8 items-center justify-center self-end rounded-lg text-center disabled:opacity-50"
        aria-label="Send message"
        disabled={disabled}
      >
        <Send className="text-surface size-4" />
      </button>
    </div>
  );
};

export default ChatInput;
