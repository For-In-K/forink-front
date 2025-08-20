import { Navigate } from 'react-router-dom';
import useAuth from '@hooks/useAuth';

import GuideHeader from '@pages/guide/template/GuideHeader';
import GuideRatingWrapper from './template/GuideRatingWrapper';

const GuideRatingPage = () => {
  const { isGuide } = useAuth();
  if (!isGuide) return <Navigate to="/" replace />;

  return (
    <div className="flex flex-col gap-10">
      <GuideHeader headerTitle="Ratings for Guide Promotion" mode="Board" />
      <GuideRatingWrapper />
    </div>
  );
};

export default GuideRatingPage;
