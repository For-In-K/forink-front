import React, { useState } from 'react';
import StepUnit from './StepUnit';
import MilestoneFeedbackModal from '@components/modal/MilestoneFeedbackModal';
import { roadmapStepDetail } from '@mocks/data/roadmaps';

interface StepWrapperProps {
  roadmapId: number;
}

const StepWrapper = ({ roadmapId }: StepWrapperProps) => {
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
        className={`w-full animate-pulse rounded-3xl p-2 ${isMilestoneCompleted ? 'bg-sky-500 text-white hover:bg-sky-600' : 'cursor-not-allowed bg-gray-300 text-gray-500'}`}
        disabled={!isMilestoneCompleted}
        onClick={() => setMilestoneFeedbackOpen(true)}
      >
        Leave Feedback For Rewards!
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
