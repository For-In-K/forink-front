import { useState } from 'react';
import { useUpdateRoadmapStepDetailCheck } from '@hooks/useRoadmaps';
import { parseContent } from '@utils/chars';
import { ExternalLink, Calendar, FileText } from 'lucide-react';

import type { StepContent } from 'types/roadmaps';
import CheckButton from '../button/CheckButton';

interface ChecklistUnitProps {
  content: StepContent;
}

const ChecklistUnit = ({ content }: ChecklistUnitProps) => {
  const { mutate: updateCheck, isPending } = useUpdateRoadmapStepDetailCheck(
    content.stepContentId
  );

  const handleCheckToggle = () => {
    updateCheck();
  };

  const { mainContent, source, law, date } = parseContent(content.stepContent);

  return (
    <div className="flex gap-3 md:gap-5">
      <CheckButton
        disabled={isPending}
        isChecked={content.isChecked}
        onClick={handleCheckToggle}
      />
      <div className="flex-1">
        <p
          className={`mb-2 font-medium ${
            content.isChecked
              ? 'text-primary/80 decoration-primary/60 line-through'
              : 'text-text-primary'
          }`}
        >
          {mainContent}
        </p>

        {source && (
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <a
              href={`https://${source}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1"
            >
              <ExternalLink className="h-3 w-3 text-gray-600" />
              <span className="font-medium text-gray-700">{source}</span>
            </a>

            {law && (
              <div className="flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1">
                <FileText className="h-3 w-3 text-blue-600" />
                <span className="font-medium text-blue-700">{law}</span>
              </div>
            )}

            {date && (
              <div className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-1">
                <Calendar className="h-3 w-3 text-green-600" />
                <span className="font-medium text-green-700">
                  {date} 데이터
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChecklistUnit;
