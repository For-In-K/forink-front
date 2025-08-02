import type { GuideProfile } from 'types/guides';
import RequestButton from '@components/button/RequestButton';

const Label = ({ label }: { label: string }) => {
  return (
    <span className="bg-primary-hover text-white-hover flex h-7 items-center rounded-full px-3 text-left">
      {label}
    </span>
  );
};

const LabelWithText = ({
  label,
  text,
  className,
}: {
  label: string;
  text: string | number | React.ReactNode[];
  className?: string;
}) => {
  if (Array.isArray(text)) {
    return (
      <div
        className={`${className} flew-col flex flex-col items-start gap-2 md:flex-row md:gap-5`}
      >
        <Label label={label} />
        <div className="flex flex-wrap items-start gap-2">
          {text.map((item, idx) => (
            <span
              key={idx}
              className="border-border rounded-full border bg-white/10 px-3 py-1 break-words text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div
      className={`${className} flex flex-col items-start gap-2 md:flex-row md:gap-5`}
    >
      <Label label={label} />
      <span className="border-border h-7 truncate rounded-full border bg-white/10 px-3 py-1 text-white">
        {text}
      </span>
    </div>
  );
};

interface ProfileCardProps {
  profile: GuideProfile;
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <>
      <div className="bg-primary/75 text-body b flex aspect-[3/4] h-full w-full flex-col justify-around gap-5 rounded-3xl p-4 transition-all duration-200 hover:scale-105 md:p-7">
        <div className="flex flex-1 items-center gap-7">
          <div className="bg-surface size-15 flex-shrink-0 rounded-full border-2 border-white md:size-20"></div>
          <p className="text-title2 truncate font-bold text-white">
            {profile.name}
          </p>
        </div>
        <div className="flex flex-3 flex-col gap-5 truncate">
          <LabelWithText
            label="Language"
            text={profile.language
              .split(',')
              .map((exp) => exp.trim())
              .filter(Boolean)}
          />
          <LabelWithText label="Nationality" text={profile.nationality} />
          <LabelWithText label="Experience" text={profile.guideExpCount} />
          <LabelWithText
            label="Expertise"
            text={profile.expertise
              .split(',')
              .map((exp) => exp.trim())
              .filter(Boolean)}
          />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <RequestButton />
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
