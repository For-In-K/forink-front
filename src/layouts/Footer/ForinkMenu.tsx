import { useTranslation } from 'react-i18next';

const ForinkMenu = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-start gap-3">
      <a href="/home" className="font-mono text-2xl font-bold text-white">
        ForinK
      </a>
      <span className="text-sm text-slate-400">{t('slogan')}</span>
    </div>
  );
};

export default ForinkMenu;
