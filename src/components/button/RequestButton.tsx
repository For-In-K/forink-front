import { useTranslation } from 'react-i18next';

const RequestButton = () => {
  const { t } = useTranslation();

  const handleRequestMatching = () => {
    alert('Request matching clicked');
  };

  return (
    <button
      className="text-body md:text-title2 border-accent text-accent truncate border bg-white px-6 py-2"
      onClick={handleRequestMatching}
    >
      {t('request')}
    </button>
  );
};

export default RequestButton;
