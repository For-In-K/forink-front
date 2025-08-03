import GuideHeader from '@pages/guide/template/GuideHeader';
import PreGuideStatusWrapper from './template/PreGuideStatusWrapper';

const PreGuideStatusPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <GuideHeader headerTitle="Promotion Status" mode="Board" />
      <PreGuideStatusWrapper />
    </div>
  );
};

export default PreGuideStatusPage;
