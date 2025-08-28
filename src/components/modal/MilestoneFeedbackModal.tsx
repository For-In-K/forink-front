import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';

import { useSubmitRoadmapFeedbackOnSubroadmap } from '@hooks/useRoadmaps';
import Modal from '@components/modal/Modal';
import SubmitButton from '@components/button/SubmitButton';

import { t } from 'i18next';

interface MilestoneFeedbackModalProps {
  roadmapId: number;
  open: boolean;
  onClose: () => void;
  onSubmit: (feedback: string) => void;
}

const MilestoneFeedbackModal = ({
  roadmapId,
  open,
  onClose,
  onSubmit,
}: MilestoneFeedbackModalProps) => {
  const [feedback, setFeedback] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const {
    mutate: submitFeedbackOnSubroadmap,
    isPending,
    isSuccess: isSubmitFeedbackOnSubroadmapSuccess,
    reset,
  } = useSubmitRoadmapFeedbackOnSubroadmap();

  useEffect(() => {
    if (open) {
      setHasSubmitted(false);
      setFeedback('');
    }
  }, [open]);

  useEffect(() => {
    if (isSubmitFeedbackOnSubroadmapSuccess && hasSubmitted) {
      onSubmit(feedback);
      onClose();
      setHasSubmitted(false);
      reset();
    }
  }, [
    isSubmitFeedbackOnSubroadmapSuccess,
    hasSubmitted,
    feedback,
    onSubmit,
    onClose,
    reset,
  ]);

  const handleSubmit = () => {
    setHasSubmitted(true);
    submitFeedbackOnSubroadmap({
      roadmapId: roadmapId,
      payload: {
        content: feedback,
      },
    });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex w-full flex-col items-center gap-5">
        <div className="flex w-full items-center gap-5">
          <div className="flex w-full flex-col gap-2">
            <p className="text-text-muted text-body font-medium">
              {t('roadmap.milestoneFeedback.title')}
            </p>
            <p className="text-text-muted/50 text-xs font-normal">
              {t('roadmap.milestoneFeedback.description')}
            </p>
          </div>
        </div>
        <textarea
          className="focus:text-text-primary text-text-muted border-text-muted/10 min-h-[120px] w-full resize-none rounded-sm border bg-white/90 p-4 text-sm transition-all duration-300 ease-in-out placeholder:text-zinc-200 focus:bg-white focus:outline-none"
          placeholder={t('roadmap.milestoneFeedback.placeholder')}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={!feedback.trim()}
          className="bg-primary w-full rounded-sm p-2 px-4 text-sm text-white"
        >
          {t('submit')}
        </button>
        {isPending && (
          <div className="text-text-muted/70 flex items-center gap-2 text-xs">
            <div className="border-text-muted/30 border-t-text-muted h-4 w-4 animate-spin rounded-full border-2"></div>
            피드백 제출 중...
          </div>
        )}
      </div>
    </Modal>
  );
};

export default MilestoneFeedbackModal;
