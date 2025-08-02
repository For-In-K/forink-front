import ProfileCard from './ProfileCard';
import { officialGuideProfiles } from '@mocks/data/guides';

const ProfileWrapper = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-15 md:grid-cols-3">
        {officialGuideProfiles.map((profile) => (
          <ProfileCard key={profile.memberId} profile={profile} />
        ))}
      </div>
    </>
  );
};

export default ProfileWrapper;
