import { useTranslation } from 'react-i18next';

interface SubmitButtonProps {
  color?: string;
  className?: string;
  onClick: () => void;
}

const SubmitButton = ({
  color = 'primary',
  className,
  onClick,
}: SubmitButtonProps) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={onClick}
      className={`text-title2 bg-${color} hover:bg-${color}-hover w-40 p-2 text-white ${className}`}
    >
      {t('submit')}
    </button>
  );
};

export default SubmitButton;
