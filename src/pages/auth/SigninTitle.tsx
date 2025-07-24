import React from 'react';

const SigninTitle = () => {
  const TITLE1 = 'For better life in K.';
  const TITLE2 =
    'You can be a user or a guide here.\nJust go get and share much experience.';

  return (
    <>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-title1 tracking-tight md:text-6xl">{TITLE1}</h1>
        <p className="md:text-title2 text-text-muted text-xs">
          {TITLE2.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index !== TITLE2.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>
    </>
  );
};

export default SigninTitle;
