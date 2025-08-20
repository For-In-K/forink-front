import { useTranslation } from 'react-i18next';
import { useSubmitRoadmapFeedbackOnStepDetail } from '@hooks/useRoadmaps';

import Modal from '@components/modal/Modal';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface StepFeedbackModalProps {
  stepNumber: number;
  open: boolean;
  onClose: () => void;
}

const StepFeedbackModal = ({
  stepNumber,
  open,
  onClose,
}: StepFeedbackModalProps) => {
  const { t } = useTranslation();
  const {
    mutate: submitFeedbackOnStepDetail,
    isSuccess: isSubmitFeedbackOnStepDetailSuccess,
  } = useSubmitRoadmapFeedbackOnStepDetail();

  const handleFeedbackSubmit = (feedbackValue: 'GOOD' | 'BAD') => {
    submitFeedbackOnStepDetail({
      roadmapStepId: stepNumber,
      payload: {
        roadmapAnswerType: feedbackValue,
      },
    });
    if (isSubmitFeedbackOnStepDetailSuccess) {
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col items-center gap-8">
        <div className="flex w-full flex-col items-center gap-5">
          <div className="rounded-full bg-white/30 p-3">
            <p className="text-title1 animate-bounce">🎉</p>
          </div>
          <div className="w-full text-center">
            <p className="text-title1 font-bold text-white drop-shadow">
              {t('roadmap.stepFeedback.title', { stepNumber })}
            </p>
            <p className="text-body text-white/80">
              {t('roadmap.stepFeedback.description')}
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center gap-10">
          <button
            onClick={() => handleFeedbackSubmit('BAD')}
            className="shimmer-accent border-danger/40 sm:text-body flex items-center gap-3 rounded-full border-2 p-2 px-4 text-sm font-bold text-white shadow-lg transition-all"
          >
            <ThumbsDown className="inline" size={18} />
            {t('roadmap.stepFeedback.bad')}
          </button>
          <button
            onClick={() => handleFeedbackSubmit('GOOD')}
            className="shimmer-secondary sm:text-body flex items-center gap-2 rounded-full border-2 border-emerald-600 p-2 px-4 text-sm font-bold text-white shadow-lg transition-all"
          >
            <ThumbsUp className="inline" size={18} />
            {t('roadmap.stepFeedback.good')}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default StepFeedbackModal;
