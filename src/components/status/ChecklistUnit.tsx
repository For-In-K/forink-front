import { useState } from 'react';

import type { StepContent } from 'types/roadmaps';
import CheckButton from '../button/CheckButton';

interface ChecklistUnitProps {
  content: StepContent;
  onToggle: (contentId: number) => void;
}

const ChecklistUnit = ({ content, onToggle }: ChecklistUnitProps) => {
  return (
    <div className="flex gap-3 md:gap-5">
      <CheckButton
        key={content.stepContentId}
        isChecked={content.isChecked}
        onClick={() => onToggle(content.stepContentId)}
      />
      <p className={`${content.isChecked ? 'text-zinc-400 line-through' : ''}`}>
        {content.stepContent}
      </p>
    </div>
  );
};

export default ChecklistUnit;
