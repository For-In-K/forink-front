import { useState } from 'react';

import useAuth from '@hooks/useAuth';
import { capitalizeFirstLetter, formatStatus } from '@utils/chars';

import GuideRatingSign from './GuideRatingSign';
import GuideStatusSign from './GuideStatusSign';

interface GuideHeaderProps {
  headerTitle: string;
  mode: 'Profile' | 'Board';
  status?: 'IN PROGRESS' | 'ALMOST';
}

const GuideHeader = ({ headerTitle, mode, status }: GuideHeaderProps) => {
  const { isPreGuide, isGuide } = useAuth();

  const [ratingVisible, setRatingVisible] = useState(() => {
    return localStorage.getItem('guideRatingSignClosed') !== 'true';
  });
  const [statusVisible, setStatusVisible] = useState(() => {
    return localStorage.getItem('guideStatusSignClosed') !== 'true';
  });

  const showRatingSign = mode === 'Board' && isGuide && ratingVisible;
  const showStatusSign = mode === 'Board' && isPreGuide && statusVisible;

  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-wrap items-start justify-between gap-3 truncate sm:gap-6">
        <div className="text-text-muted bg-surface text-title2 rounded-full px-6 py-2">
          {headerTitle}
        </div>
        {mode === 'Profile'}
        {showStatusSign && (
          <div
            className={`${
              status === 'ALMOST' ? 'bg-secondary/90' : 'bg-accent/90'
            } text-title2 rounded-full px-6 py-2 text-white`}
          >
            {formatStatus(status ?? 'IN PROGRESS')}
          </div>
        )}
      </div>

      {showRatingSign && (
        <div className="mt-3 w-full">
          <GuideRatingSign
            onClose={() => {
              localStorage.setItem('guideRatingSignClosed', 'true');
              setRatingVisible(false);
            }}
          />
        </div>
      )}

      {showStatusSign && (
        <div className="mt-3 w-full">
          <GuideStatusSign
            onClose={() => {
              localStorage.setItem('guideStatusSignClosed', 'true');
              setStatusVisible(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default GuideHeader;
