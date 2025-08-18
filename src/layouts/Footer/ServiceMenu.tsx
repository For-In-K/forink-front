import { useTranslation } from 'react-i18next';

const ServiceMenu = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-start">
      <p className="text-body mb-3 font-medium text-white">
        {t('footer.service.title')}
      </p>
      <ul className="space-y-2 text-sm text-slate-400">
        <li>
          <a href="/signin" className="hover:text-slate-200">
            {t('footer.service.settlementExam')}
          </a>
        </li>
        <li>
          <a href="/roadmap" className="hover:text-slate-200">
            {t('footer.service.recommendRoadmap')}
          </a>
        </li>
        <li>
          <a href="/service3" className="hover:text-slate-200">
            {t('footer.service.matchGuide')}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ServiceMenu;
