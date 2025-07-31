import SigninTitle from './SigninTitle';
import SocialSigninButton from './SocialSigninButton';

const Signin = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-30">
        <SigninTitle />
        <SocialSigninButton />
      </div>
    </>
  );
};

export default Signin;
