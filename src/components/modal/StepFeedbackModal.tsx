import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSubmitRoadmapFeedbackOnStepDetail } from '@hooks/useRoadmaps';

import Modal from '@components/modal/Modal';
import happyEmoji from '@assets/icons/emoji_happy.png';
import sadEmoji from '@assets/icons/emoji_sad.png';

interface StepFeedbackModalProps {
  stepNumber: number;
  stepTitle: string;
  open: boolean;
  onClose: () => void;
}

const StepFeedbackModal = ({
  stepNumber,
  stepTitle,
  open,
  onClose,
}: StepFeedbackModalProps) => {
  const { t } = useTranslation();
  const {
    mutate: submitFeedbackOnStepDetail,
    isSuccess,
    isError,
    isPending,
  } = useSubmitRoadmapFeedbackOnStepDetail();

  const handleFeedbackSubmit = (feedbackValue: 'GOOD' | 'BAD') => {
    submitFeedbackOnStepDetail({
      roadmapStepId: stepNumber,
      payload: {
        roadmapAnswerType: feedbackValue,
      },
    });
  };

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess, onClose]);

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col items-center gap-8">
        <div className="flex w-full items-center gap-5">
          <div className="flex w-full flex-col gap-2">
            <p className="text-text-muted text-body font-medium">
              {t('roadmap.stepFeedback.title', { stepTitle })}
            </p>
            <p className="text-text-muted/50 text-xs font-normal">
              {t('roadmap.stepFeedback.description')}
            </p>
          </div>
        </div>

        <div className="flex w-full justify-center gap-10">
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={() => handleFeedbackSubmit('BAD')}
              disabled={isPending}
              className={`transition-all duration-300 ${
                isPending ? 'cursor-not-allowed opacity-50' : 'hover:scale-110'
              }`}
            >
              <img
                src={sadEmoji}
                alt="Sad Emoji"
                className={`h-20 w-20 drop-shadow-lg transition-all duration-300 ${
                  isPending
                    ? 'brightness-75 grayscale'
                    : 'grayscale hover:brightness-110 hover:grayscale-0'
                }`}
              />
            </button>
            <span className="text-text-muted/60 text-xs">
              {t('roadmap.stepFeedback.bad')}
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <button
              onClick={() => handleFeedbackSubmit('GOOD')}
              disabled={isPending}
              className={`transition-all duration-300 ${
                isPending ? 'cursor-not-allowed opacity-50' : 'hover:scale-110'
              }`}
            >
              <img
                src={happyEmoji}
                alt="Happy Emoji"
                className={`h-20 w-20 drop-shadow-lg transition-all duration-300 ${
                  isPending
                    ? 'brightness-75 grayscale'
                    : 'grayscale hover:brightness-110 hover:grayscale-0'
                }`}
              />
            </button>
            <span className="text-text-muted/60 text-xs">
              {t('roadmap.stepFeedback.good')}
            </span>
          </div>
        </div>

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

export default StepFeedbackModal;
