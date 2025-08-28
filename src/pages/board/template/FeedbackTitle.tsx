import { useTranslation } from 'react-i18next';
interface FeedbackTitleProps {
  title: string;
}

export const FeedbackTitleOnRating = ({ title }: FeedbackTitleProps) => {
  const { t } = useTranslation();

  return (
    <p className="text-title2 font-bold text-black">
      {t('guide.status.feedback.titleOnRating', {
        titleOnRating: title,
      })}
    </p>
  );
};

export const FeedbackTitleOnStatus = ({ title }: FeedbackTitleProps) => {
  const { t } = useTranslation();

  return (
    <p className="text-title2 font-bold text-black">
      {t('guide.status.feedback.titleOnStatus', {
        titleOnStatus: title,
      })}
    </p>
  );
};
