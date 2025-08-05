import { useTranslation } from 'react-i18next';

interface SubmitButtonProps {
  color?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
  onClick: () => void;
}

const SubmitButton = ({
  color = 'primary',
  className,
  disabled,
  onClick,
}: SubmitButtonProps) => {
  const { t } = useTranslation();

  const colorClassMap = {
    primary: 'bg-primary hover:bg-primary-hover',
    secondary: 'bg-secondary hover:bg-secondary-hover',
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`text-title2 ${disabled ? 'bg-gray-300 active:transform-none' : colorClassMap[color]} w-40 p-2 text-white ${className}`}
    >
      {t('submit')}
    </button>
  );
};

export default SubmitButton;
