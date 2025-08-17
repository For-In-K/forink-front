import GuideHeader from './template/GuideHeader';
import ProfileWrapper from './template/ProfileWrapper';

const GuideProfilePage = () => {
  return (
    <main>
      <header className="mb-8">
        <p className="text-title2 text-text-muted font-semibold">
          나의 정착 가이드
        </p>
        <p className="mt-1 text-sm text-slate-500">
          정착 과정에서 필요한 도움을 받을 수 있는 가이드들을 만나보세요.
        </p>
      </header>
      <ProfileWrapper />
    </main>
  );
};

export default GuideProfilePage;
