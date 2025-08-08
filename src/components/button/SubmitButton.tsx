import { useTranslation } from 'react-i18next';

interface SubmitButtonProps {
  color?: 'primary' | 'secondary' | 'accent';
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
    accent: 'bg-accent hover:bg-accent-hover',
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`border border-white/60 ${disabled ? 'bg-gray-300 active:transform-none' : colorClassMap[color]} sm:text-body p-2 px-4 text-sm text-white transition-colors duration-200 ${className}`}
    >
      {t('submit')}
    </button>
  );
};

export default SubmitButton;
