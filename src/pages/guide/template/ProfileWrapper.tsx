import ProfileCard from './ProfileCard';
import ProfileCardSkeleton from './ProfileCardSkeleton';
import useGuides, { useGuideProfiles } from '@hooks/useGuides';

const ProfileWrapper = () => {
  const { data: guideProfiles, isLoading: isGuideProfilesLoading } =
    useGuideProfiles();
  if (!guideProfiles || guideProfiles.length === 0) {
    return (
      <div className="rounded-md border border-blue-200 bg-blue-50 p-4 text-blue-700">
        아직 등록된 가이드가 없어요.
      </div>
    );
  }

  return (
    <section>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {isGuideProfilesLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <ProfileCardSkeleton key={index} />
            ))
          : guideProfiles.map((profile) => (
              <ProfileCard key={profile.memberId} profile={profile} />
            ))}
      </div>
    </section>
  );
};

export default ProfileWrapper;
