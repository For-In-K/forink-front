import { useUserStore } from '@stores/useUserStore';
import { useTranslation } from 'react-i18next';

const UserGreeting = () => {
  const { t } = useTranslation();
  const { user } = useUserStore();

  return (
    <p className="text-body text-text-muted hidden truncate text-center font-mono xl:inline-block">
      {user ? (
        <>
          <span>{t('greetingUser', { username: user?.email })}</span>
        </>
      ) : (
        <span>{t('greeting')}</span>
      )}
    </p>
  );
};

export default UserGreeting;
