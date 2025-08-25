import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import useAuth from '@hooks/useAuth';
import { useRoadmapStepDetail } from '@hooks/useRoadmaps';
import { guideAdministrationStepDetail } from '@constants/guides';
import StepUnit from './StepUnit';
import MilestoneFeedbackModal from '@components/modal/MilestoneFeedbackModal';

interface StepWrapperProps {
  roadmapId: number;
}

const StepWrapper = ({ roadmapId }: StepWrapperProps) => {
  const { isUser, isPreGuide } = useAuth();
  const { t } = useTranslation();
  const {
    data: userRoadmapStepDetail = [],
    isLoading: isUserRoadmapStepDetailLoading,
  } = useRoadmapStepDetail(roadmapId);

  const getRoadmapStepDetail = () => {
    if (isUser) {
      return {
        data: userRoadmapStepDetail,
        isLoading: isUserRoadmapStepDetailLoading,
      };
    } else if (isPreGuide) {
      return {
        data: guideAdministrationStepDetail,
        isLoading: false,
      };
    }
    return {
      data: [],
      isLoading: false,
    };
  };

  const { data: roadmapStepDetail, isLoading } = getRoadmapStepDetail();

  const [milestoneFeedbackOpen, setMilestoneFeedbackOpen] = useState(false);
  const isMilestoneCompleted = roadmapStepDetail.every((step) =>
    step.contents.every((content) => content.isChecked)
  );

  return (
    <>
      <div className="flex flex-col items-center gap-8">
        {roadmapStepDetail.map((step) => (
          <StepUnit key={step.stepNumber} step={step} roadmapId={roadmapId} />
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
