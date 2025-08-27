import React from 'react';

interface SigninTitleProps {
  title: string;
  description?: string;
  option?: boolean;
}

const SigninTitle = ({ title, description, option }: SigninTitleProps) => {
  return (
    <>
      <div className="flex flex-col gap-3 text-center font-mono">
        <p
          className={`${option ? 'md:text-title1 text-2xl' : 'text-title1 md:text-6xl'} text-text-primary font-semibold tracking-tight`}
        >
          {title}
        </p>
        <p
          className={`${option ? 'text-caption md:text-body' : 'md:text-title2 text-xs'} text-text-muted/60`}
        >
          {description?.split('\n').map((line, index) => (
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
