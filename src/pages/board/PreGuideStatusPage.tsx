import { Navigate } from 'react-router-dom';

import { usePreGuideStatus } from '@hooks/useGuides';
import useAuth from '@hooks/useAuth';
import GuideHeader from '@pages/guide/template/GuideHeader';
import PreGuideStatusWrapper from './template/PreGuideStatusWrapper';

const PreGuideStatusPage = () => {
  const { isPreGuide } = useAuth();
  const { data: preGuideRateStatus } = usePreGuideStatus();

  if (!isPreGuide) return <Navigate to="/" replace />;

  return (
    <div className="flex flex-col gap-10">
      <GuideHeader
        headerTitle="Rating results"
        mode="Board"
        status={preGuideRateStatus?.ratingStatus}
      />
      <PreGuideStatusWrapper />
    </div>
  );
};

export default PreGuideStatusPage;
