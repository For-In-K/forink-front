import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const RequestButton = () => {
  const { t } = useTranslation();

  const handleRequestMatching = () => {
    toast.success('가이드 매칭이 요청되었어요');
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
