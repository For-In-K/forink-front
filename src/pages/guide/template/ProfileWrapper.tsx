import ProfileCard from './ProfileCard';
import ProfileCardSkeleton from './ProfileCardSkeleton';
import { useGuideProfiles } from '@hooks/useGuides';

const ProfileWrapper = () => {
  const { data: guideProfiles, isLoading, isError } = useGuideProfiles();

  if (isError) {
    return (
      <div className="rounded-md border border-red-200 bg-red-50 p-4 text-red-700">
        가이드 프로필을 불러오는 데 실패했어요. 나중에 다시 시도해주세요.
      </div>
    );
  }

  return (
    <section>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <ProfileCardSkeleton key={index} />
            ))
          : guideProfiles &&
            guideProfiles.map((profile) => (
              <ProfileCard key={profile.memberId} profile={profile} />
            ))}
      </div>
    </section>
  );
};

export default ProfileWrapper;
