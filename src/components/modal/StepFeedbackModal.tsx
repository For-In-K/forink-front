import { PartyPopper, X, ThumbsUp, ThumbsDown } from 'lucide-react';

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
  const handleFeedbackSubmit = (feedbackValue: string) => {
    console.log(`Feedback for step ${stepNumber}: ${feedbackValue}`);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/40">
      <div className="bg-primary relative min-w-[340px] rounded-2xl p-10 text-center text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white transition-colors hover:text-sky-300"
          aria-label="닫기"
        >
          <X size={24} />
        </button>
        <div className="flex flex-col items-center gap-10">
          <div className="flex w-full flex-col items-center gap-5">
            <div className="rounded-full bg-white/30 p-3">
              <p className="text-title1 animate-bounce">🎉</p>
            </div>
            <div>
              <p className="text-title1 font-bold text-white drop-shadow">
                Step {stepNumber} Completed!
              </p>
              <p className="text-body text-white/80">
                Please leave feedback for this step.
              </p>
            </div>
          </div>
          <div className="flex w-full justify-around gap-5">
            <button
              onClick={() => handleFeedbackSubmit('BAD')}
              className="shimmer-accent border-danger/40 text-title2 flex items-center gap-2 rounded-full border-2 px-7 py-3 font-bold text-white shadow-lg transition-all"
            >
              <ThumbsDown className="inline" />
              Not good
            </button>
            <button
              onClick={() => handleFeedbackSubmit('GOOD')}
              className="shimmer-secondary text-title2 flex items-center gap-2 rounded-full border-2 border-emerald-600 px-7 py-3 font-bold text-white shadow-lg transition-all"
            >
              <ThumbsUp className="inline" />
              Good
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFeedbackModal;
