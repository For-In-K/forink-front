import { useState } from 'react';

import { useSubmitRatings } from '@hooks/useGuides';
import type { SubmitFeedbackRateFieldRequest } from 'types/guides';

import RatingRow from './RatingRow';
import SubmitButton from '@components/button/SubmitButton';
import CancelButton from '@components/button/CancelButton';

interface Criteria {
  key: keyof SubmitFeedbackRateFieldRequest;
  label: string;
}

const criteriaList: Criteria[] = [
  { key: 'expertiseScore', label: 'Expertise' },
  { key: 'helpScore', label: 'Helpfulness' },
  { key: 'recommendScore', label: 'Recommendability' },
];

interface RatingFormProps {
  feedbackId: number;
  onSuccess?: () => void;
}

const GuideRatingForm = ({ feedbackId, onSuccess }: RatingFormProps) => {
  const { mutate: submitRatings } = useSubmitRatings();

  const [ratings, setRatings] = useState<SubmitFeedbackRateFieldRequest>({
    expertiseScore: 0,
    helpScore: 0,
    recommendScore: 0,
  });
  const allRatingsCompleted = Object.values(ratings).every(
    (value) => value > 0
  );

  const handleRate = (
    criteriaKey: keyof SubmitFeedbackRateFieldRequest,
    value: number
  ) => {
    setRatings((prev) => ({ ...prev, [criteriaKey]: value }));
  };

  const handleCancel = () => {
    setRatings({
      expertiseScore: 0,
      helpScore: 0,
      recommendScore: 0,
    });
  };

  const handleSubmit = () => {
    submitRatings({ feedbackId, payload: ratings });
  };

  return (
    <div className="bg-surface/50 flex flex-col items-center gap-6 rounded-md p-5 md:items-end">
      {criteriaList.map(({ key, label }) => (
        <RatingRow
          key={key}
          label={label}
          value={ratings[key]}
          onChange={(score) => handleRate(key, score)}
        />
      ))}

      <div className="mt-4 flex flex-col gap-4 md:flex-row">
        {allRatingsCompleted && <CancelButton onClick={handleCancel} />}
        <SubmitButton
          color="secondary"
          onClick={handleSubmit}
          disabled={!allRatingsCompleted}
        />
      </div>
    </div>
  );
};

export default GuideRatingForm;
