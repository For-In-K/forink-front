import { useTranslation } from 'react-i18next';

import BasicInfoCard from './BasicInfoCard';
import { serviceList } from '@constants/home';

const BasicInfoWrapper = () => {
  const { t } = useTranslation();

  return (
    <div>
      <header className="mb-8">
        <p className="text-title2 font-semibold">
          {t('home.importantDocsTitle')}
        </p>
        <p className="text-text-muted mt-1 text-sm">
          {t('home.importantDocsDescription')}
        </p>
      </header>
      <div className="flex gap-2 overflow-x-scroll">
        {serviceList.map((service, index) => (
          <BasicInfoCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default BasicInfoWrapper;
