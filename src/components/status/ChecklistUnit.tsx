import { useState } from 'react';
import { useUpdateRoadmapStepDetailCheck } from '@hooks/useRoadmaps';

import type { StepContent } from 'types/roadmaps';
import CheckButton from '../button/CheckButton';

interface ChecklistUnitProps {
  content: StepContent;
}

const ChecklistUnit = ({ content }: ChecklistUnitProps) => {
  const { mutate: updateCheck, isPending } = useUpdateRoadmapStepDetailCheck(
    content.stepContentId
  );

  const handleCheckToggle = (stepContentId: number) => () => {
    updateCheck(stepContentId);
  };

  return (
    <div className="flex gap-3 md:gap-5">
      <CheckButton
        key={content.stepContentId}
        disabled={isPending}
        isChecked={content.isChecked}
        onClick={handleCheckToggle(content.stepContentId)}
      />
      <p className={`${content.isChecked ? 'text-zinc-400 line-through' : ''}`}>
        {content.stepContent}
      </p>
    </div>
  );
};

export default ChecklistUnit;
