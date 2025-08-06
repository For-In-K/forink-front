import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import type { StepContent } from 'types/roadmaps';
import { updateRoadmapStepDetailCheck } from '@apis/roadmaps';
import CheckButton from '../button/CheckButton';

interface ChecklistUnitProps {
  content: StepContent;
}

const ChecklistUnit = ({ content }: ChecklistUnitProps) => {
  const [isChecked, setIsChecked] = useState(content.isChecked);

  const { mutate: updateCheck } = useMutation({
    mutationFn: updateRoadmapStepDetailCheck,
    onSuccess: () => {
      alert('체크리스트가 업데이트 되었습니다.'); // TODO: toast로 바꾸기, i18n 적용
      setIsChecked((prev) => !prev);
    },
    onError: () => {
      alert('체크리스트 업데이트에 실패했습니다.'); // TODO: toast로 바꾸기, i18n 적용
    },
  });

  const handleListCheck = () => {
    console.log(content.stepContentId);
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
