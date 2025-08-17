import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const RequestButton = () => {
  const { t } = useTranslation();

  const handleRequestMatching = () => {
    toast.success('가이드 매칭이 요청되었어요');
  };

  return (
    <button
      className="sm:text-body bg-primary truncate rounded-xl px-6 py-3 text-sm text-white"
      onClick={handleRequestMatching}
    >
      {t('request')}
    </button>
  );
};

export default RequestButton;
