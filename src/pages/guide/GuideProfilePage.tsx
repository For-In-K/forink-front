import GuideHeader from './template/GuideHeader';
import ProfileWrapper from './template/ProfileWrapper';

const GuideProfilePage = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <GuideHeader />
        <ProfileWrapper />
      </div>
    </>
  );
};

export default GuideProfilePage;
