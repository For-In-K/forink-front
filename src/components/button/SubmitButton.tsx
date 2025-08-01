import { useTranslation } from 'react-i18next';

const SubmitButton = () => {
  const { t } = useTranslation();

  return (
    <button className="text-title2 bg-primary hover:bg-primary-hover w-30 p-2 text-white">
      {t('submit')}
    </button>
  );
};

export default SubmitButton;
