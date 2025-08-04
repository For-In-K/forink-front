import GuideHeader from '@pages/guide/template/GuideHeader';
import GuideRatingWrapper from './template/GuideRatingWrapper';

const GuideRatingPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <GuideHeader headerTitle="Ratings for Guide Promotion" mode="Board" />
      <GuideRatingWrapper />
    </div>
  );
};

export default GuideRatingPage;
