import { useTranslation } from 'react-i18next';
import type { GuideProfile } from 'types/guides';
import RequestButton from '@components/button/RequestButton';

interface LabelProps {
  value: string;
  className?: string;
}

const Label = ({ value, className = '' }: LabelProps) => {
  return (
    <span
      className={`text-text-primary text-xs font-medium ${className} rounded-full border border-slate-300 p-1 px-3`}
    >
      {value}
    </span>
  );
};

interface ProfileCardProps {
  profile: GuideProfile;
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  const { t } = useTranslation();

  return (
    <article className="text-body flex h-full w-full flex-col justify-between gap-4 rounded-xl bg-white p-4 shadow-sm transition-transform duration-200 hover:scale-105 md:p-6">
      <header className="flex items-center gap-5">
        <div className="flex-shrink-0">
          <div className="from-primary to-secondary h-12 w-12 rounded-full bg-gradient-to-br md:h-20 md:w-20" />
        </div>

        <div className="min-w-0">
          <p className="text-title2 text-text-primary truncate font-semibold">
            {profile.name}
          </p>
          <p className="truncate text-sm text-slate-400">
            {profile.nationality}
          </p>
          <p className="text-primary mt-1 text-sm font-medium">
            {t('guide.matchingCount', {
              guideExpCount: profile.guideExpCount,
            })}
          </p>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4">
        <div>
          <p className="mb-2 text-sm font-semibold">{t('guide.specialty')}</p>
          <div className="flex flex-wrap gap-2">
            {profile.expertise.split(',').map((expertise, index) => (
              <Label
                key={index}
                value={expertise.trim()}
                className="bg-emerald-50"
              />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold">{t('guide.language')}</p>
          <div className="flex flex-wrap gap-2">
            {profile.language.split(',').map((language, index) => (
              <Label key={index} value={language.trim()} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between rounded-xl bg-blue-50 p-4">
          <div className="w-full text-center">
            <p className="text-sm text-slate-500">
              {t('guide.matchingExpertise')}
            </p>
            <p className="text-body text-primary font-medium">
              {t('guide.matchingUnit', {
                guideExpCount: profile.guideExpCount,
              })}
            </p>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <RequestButton />
        </div>
      </div>
    </article>
  );
};

export default ProfileCard;
