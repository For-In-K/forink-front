import { useTranslation } from 'react-i18next';

const SupportMenu = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-start">
      <p className="text-body mb-3 font-medium text-white">
        {t('footer.support.title')}
      </p>
      <ul className="space-y-2 text-sm text-slate-400">
        <li>
          <a href="/" className="hover:text-slate-200">
            {t('footer.support.help')}
          </a>
        </li>
        <li>
          <a href="/" className="hover:text-slate-200">
            {t('footer.support.contactUs')}
          </a>
        </li>
        <li>
          <a href="/" className="hover:text-slate-200">
            {t('footer.support.faq')}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SupportMenu;
