import { useUserStore } from '@stores/useUserStore';
import { useTranslation } from 'react-i18next';

const UserGreeting = () => {
  const { t } = useTranslation();
  const { user } = useUserStore();

  return (
    <p className="text-body text-text-muted hidden truncate text-center font-mono lg:inline-block">
      <span>{t('greeting')}</span>, {user?.email}!
    </p>
  );
};

export default UserGreeting;
