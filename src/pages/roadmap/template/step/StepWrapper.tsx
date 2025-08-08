import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import StepUnit from './StepUnit';
import MilestoneFeedbackModal from '@components/modal/MilestoneFeedbackModal';
import { roadmapStepDetail } from '@mocks/data/roadmaps';

interface StepWrapperProps {
  roadmapId: number;
}

const StepWrapper = ({ roadmapId }: StepWrapperProps) => {
  const { t } = useTranslation();

  const [milestoneFeedbackOpen, setMilestoneFeedbackOpen] = useState(false);
  const isMilestoneCompleted = roadmapStepDetail.every((step) =>
    step.contents.every((content) => content.isChecked)
  );

  return (
    <>
      <div className="flex flex-col items-center gap-8">
        {roadmapStepDetail.map((step) => (
          <StepUnit key={step.stepNumber} step={step} />
        ))}
      </div>

      <button
        className={`text-body w-full animate-pulse rounded-3xl p-2 ${isMilestoneCompleted ? 'shimmer-accent text-white' : 'cursor-not-allowed bg-gray-300 text-gray-500'}`}
        disabled={!isMilestoneCompleted}
        onClick={() => setMilestoneFeedbackOpen(true)}
      >
        🏆 {t('roadmap.milestoneFeedback.button')} 🏆
      </button>
      <MilestoneFeedbackModal
        roadmapId={roadmapId}
        open={milestoneFeedbackOpen}
        onClose={() => setMilestoneFeedbackOpen(false)}
        onSubmit={() => setMilestoneFeedbackOpen(false)}
      />
    </>
  );
};

export default StepWrapper;
