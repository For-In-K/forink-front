import { useState, useCallback } from 'react';
import { toast } from 'react-toastify';

const useCopy = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(
    async (textToCopy: string) => {
      if (isCopied) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        setIsCopied(true);
        toast.success('클립보드에 복사되었어요!');
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      } catch (err) {
        toast.error('클립보드에 복사하는 데 실패했어요!');
      }
    },
    [isCopied]
  );

  return [isCopied, copy];
};

export default useCopy;
