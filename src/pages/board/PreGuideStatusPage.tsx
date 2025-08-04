import GuideHeader from '@pages/guide/template/GuideHeader';
import PreGuideStatusWrapper from './template/PreGuideStatusWrapper';

import { preGuideRateStatus } from '@mocks/data/guides';

const PreGuideStatusPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <GuideHeader
        headerTitle="Rating results"
        mode="Board"
        status={preGuideRateStatus.rateStatus}
      />
      <PreGuideStatusWrapper />
    </div>
  );
};

export default PreGuideStatusPage;
