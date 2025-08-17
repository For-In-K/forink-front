import ProfileCard from './ProfileCard';
import { officialGuideProfiles } from '@mocks/data/guides';

const ProfileWrapper = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {officialGuideProfiles.map((profile) => (
          <ProfileCard key={profile.memberId} profile={profile} />
        ))}
      </div>
    </section>
  );
};

export default ProfileWrapper;
