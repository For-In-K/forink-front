import { useTranslation } from 'react-i18next';

const UserGreeting = () => {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-body text-text-muted hidden md:inline-block">
        <span>{t('greeting')}</span>, redzzzi!
      </p>
    </>
  );
};

export default UserGreeting;
