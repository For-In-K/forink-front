import React from 'react';

interface SigninTitleProps {
  title: string;
  description: string;
}

const SigninTitle = ({ title, description }: SigninTitleProps) => {
  return (
    <>
      <div className="flex animate-bounce flex-col gap-3 text-center font-mono">
        <h1 className="text-title1 font-semibold tracking-tight md:text-6xl">
          {title}
        </h1>
        <p className="md:text-title2 text-text-muted text-xs">
          {description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index !== description.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>
    </>
  );
};

export default SigninTitle;
