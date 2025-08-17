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
  return (
    <div className="text-body flex aspect-[3/4] h-full w-full flex-col justify-around gap-2 rounded-xl bg-white p-4 shadow-sm transition-all duration-200 hover:scale-105 md:p-7">
      <div className="mb-4 flex items-center gap-7">
        <div className="from-primary to-secondary size-15 flex-shrink-0 rounded-full border-2 border-white bg-gradient-to-br md:size-20"></div>
        <div>
          <p className="text-title2 text-text-primary truncate font-semibold">
            {profile.name}
          </p>
          <p className="text-sm text-slate-400">{profile.nationality}</p>
          <p className="text-primary text-sm font-medium">
            {profile.guideExpCount}회 매칭 경력
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 truncate">
        <div>
          <p className="mb-2 text-sm font-semibold">전문분야</p>
          <div className="flex gap-1">
            {profile.expertise.split(',').map((expertise, index) => (
              <Label key={index} value={expertise.trim()} />
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold">가능 언어</p>
          <div className="flex gap-1">
            {profile.language.split(',').map((language, index) => (
              <Label
                key={index}
                value={language.trim()}
                className="bg-emerald-50"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-1 rounded-xl bg-blue-50 p-5">
        <p className="text-sm text-slate-500">가이드 매칭 경력</p>
        <p className="text-body text-primary font-medium">
          {profile.guideExpCount}회
        </p>
      </div>
      <RequestButton />
    </div>
  );
};

export default ProfileCard;
