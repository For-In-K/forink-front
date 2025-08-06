import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createGuideResume } from '@apis/resume';
import { createUserExam } from '@apis/exams';

interface SigninOptionButtonProps {
  text: string;
  onClick: () => void;
}

const SigninOptionButton = ({ text, onClick }: SigninOptionButtonProps) => {
  return (
    <button
      type="button"
      className="border-primary/40 text-title2 hover:bg-primary/10 focus:text-primary focus:ring-primary text-text-muted min-w-32 rounded-full px-6 py-3 font-mono font-semibold transition focus:ring-2 focus:outline-none"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const SigninOptionButtonsGroup = () => {
  const navigate = useNavigate();

  const { mutate: createResume } = useMutation({
    mutationFn: createGuideResume,
    onSuccess: () => {
      console.log('Guide resume created successfully'); // TODO
      navigate('/resume/step/1');
    },
    onError: (error: Error) => {
      console.error('Error creating guide resume:', error); // TODO
    },
  });

  const handleGuideSelect = () => {
    createResume();
  };

  const { mutate: createExam } = useMutation({
    mutationFn: createUserExam,
    onSuccess: () => {
      console.log('Exam created successfully'); // TODO
      navigate('/exams/step/1');
    },
    onError: (error: Error) => {
      console.error('Error creating exam:', error); // TODO
    },
  });

  const handleUserSelect = () => {
    createExam();
  };

  return (
    <div className="flex gap-10">
      <SigninOptionButton text="User" onClick={handleUserSelect} />
      <SigninOptionButton text="Guide" onClick={handleGuideSelect} />
    </div>
  );
};

export default SigninOptionButtonsGroup;
