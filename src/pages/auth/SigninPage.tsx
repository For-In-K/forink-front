import SigninTitle from './SigninTitle';
import SocialSigninButton from './SocialSigninButton';

const SigninPage = () => {
  const TITLE = 'For better life in K.';
  const DESCRIPTION = `
You can choose to be a user or a guide.
Just go get and share much experience in our warm settlement community.`;
  return (
    <>
      <div className="relative flex flex-col items-center gap-30">
        <SigninTitle title={TITLE} description={DESCRIPTION} />
        <SocialSigninButton />
        <span className="absolute -bottom-10 animate-pulse text-xs text-gray-200">
          로그인 / 회원가입 페이지예요
        </span>
      </div>
    </>
  );
};

export default SigninPage;
