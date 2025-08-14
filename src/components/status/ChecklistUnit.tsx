import { useState } from 'react';

import useRoadmaps from '@hooks/useRoadmaps';
import type { StepContent } from 'types/roadmaps';
import { updateRoadmapStepDetailCheck } from '@apis/roadmaps';
import CheckButton from '../button/CheckButton';

interface ChecklistUnitProps {
  content: StepContent;
}

const ChecklistUnit = ({ content }: ChecklistUnitProps) => {
  const [isChecked, setIsChecked] = useState(content.isChecked);

  const { updateCheck } = useRoadmaps();

  const handleListCheck = () => {
    updateCheck(content.stepContentId);
  };

  return (
    <div className="flex gap-3 md:gap-5">
      <CheckButton
        key={content.stepContentId}
        isChecked={isChecked}
        onClick={handleListCheck}
      />
      <p>{content.stepContent}</p>
    </div>
  );
};

export default ChecklistUnit;
