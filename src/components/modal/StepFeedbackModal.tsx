import { useMutation } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { submitRoadmapFeedbackOnStepDetail } from '@apis/roadmaps';

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

  const { mutate: submitFeedbackOnStep } = useMutation({
    mutationFn: submitRoadmapFeedbackOnStepDetail,
    onSuccess: () => {
      alert('피드백이 제출되었습니다.'); // TODO: toast로 바꾸기, i18n 적용
      onClose();
    },
    onError: () => {
      alert('피드백 제출에 실패했습니다.'); // TODO: toast로 바꾸기, i18n 적용
    },
  });

  const handleFeedbackSubmit = (feedbackValue: 'GOOD' | 'BAD') => {
    console.log(`Feedback for step ${stepNumber}: ${feedbackValue}`);
    submitFeedbackOnStep({
      roadmapStepId: stepNumber,
      payload: {
        roadmapAnswerType: feedbackValue,
      },
    });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col items-center gap-10">
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
            className="shimmer-accent border-danger/40 text-title2 flex items-center gap-2 rounded-full border-2 px-7 py-3 font-bold text-white shadow-lg transition-all"
          >
            <ThumbsDown className="inline" />
            {t('roadmap.stepFeedback.bad')}
          </button>
          <button
            onClick={() => handleFeedbackSubmit('GOOD')}
            className="shimmer-secondary text-title2 flex items-center gap-2 rounded-full border-2 border-emerald-600 px-7 py-3 font-bold text-white shadow-lg transition-all"
          >
            <ThumbsUp className="inline" />
            {t('roadmap.stepFeedback.good')}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default StepFeedbackModal;
