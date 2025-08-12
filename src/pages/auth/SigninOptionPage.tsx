import SigninTitle from './SigninTitle';
import SigninOptionButtonsGroup from './SigninOptionButtonsGroup';

const SigninOptionPage = () => {
  const TITLE = 'Which role do you want to choose?';
  const DESCRIPTION = `
You can choose to be a user or a guide.
Just go get and share much experience.`;
  return (
    <>
      <div className="flex flex-col items-center gap-30">
        <SigninTitle title={TITLE} description={DESCRIPTION} />
        <SigninOptionButtonsGroup />
      </div>
    </>
  );
};

export default SigninOptionPage;
