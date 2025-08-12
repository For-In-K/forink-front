import SigninTitle from './SigninTitle';
import SocialSigninButton from './SocialSigninButton';

const SigninPage = () => {
  const TITLE = 'For better life in K.';
  const DESCRIPTION = `
You can be a user or a guide here.
Just go get and share much experience.`;
  return (
    <>
      <div className="flex flex-col items-center gap-30">
        <SigninTitle title={TITLE} description={DESCRIPTION} />
        <SocialSigninButton />
      </div>
    </>
  );
};

export default SigninPage;
