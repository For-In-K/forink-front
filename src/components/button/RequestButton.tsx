import { useTranslation } from 'react-i18next';

const RequestButton = () => {
  const { t } = useTranslation();

  return (
    <button className="text-body md:text-title2 border-accent text-accent truncate border bg-white px-4 py-2">
      {t('request')}
    </button>
  );
};

export default RequestButton;
