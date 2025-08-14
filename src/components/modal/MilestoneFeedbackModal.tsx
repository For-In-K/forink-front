import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import useRoadmaps from '@hooks/useRoadmaps';
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

  const { submitFeedbackOnSubroadmap } = useRoadmaps();

  const handleSubmit = () => {
    submitFeedbackOnSubroadmap({
      roadmapId: roadmapId,
      payload: {
        content: feedback,
      },
    });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex w-full flex-col items-center gap-10">
        <div className="flex w-full flex-col items-center gap-5">
          <div className="rounded-full bg-white/30 p-3">
            <p className="text-title1 animate-bounce">🥳</p>
          </div>
          <div className="text-title1 w-full text-center font-bold text-white drop-shadow">
            <p>{t('roadmap.milestoneFeedback.title')}</p>
            <p className="text-body font-normal text-white/80">
              {t('roadmap.milestoneFeedback.description')}
            </p>
          </div>
        </div>
        <textarea
          className="focus:text-text-primary text-text-muted min-h-[120px] w-full resize-y rounded-lg border-none bg-white/90 p-4 transition-all duration-300 ease-in-out placeholder:text-gray-200 focus:bg-white focus:outline-none"
          placeholder={t('roadmap.milestoneFeedback.placeholder')}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <div className="flex w-full justify-end">
          <SubmitButton
            onClick={handleSubmit}
            disabled={!feedback.trim()}
            color="secondary"
          />
        </div>
      </div>
    </Modal>
  );
};

export default MilestoneFeedbackModal;
