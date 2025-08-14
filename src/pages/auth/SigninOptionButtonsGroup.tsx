import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
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
      className="border-primary text-title2 hover:bg-primary/10 focus:text-primary focus:ring-primary text-primary min-w-32 rounded-full px-6 py-3 font-mono font-semibold transition focus:ring-2 focus:outline-none"
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
      toast.success('Guide resume created successfully');
      navigate('/resume/step/1');
    },
    onError: (error: Error) => {
      toast.error('Error creating guide resume');
    },
  });

  const handleGuideSelect = () => {
    createResume();
  };

  const { mutate: createExam } = useMutation({
    mutationFn: createUserExam,
    onSuccess: () => {
      toast.success('Exam created successfully');
      navigate('/exams/step/1');
    },
    onError: (error: Error) => {
      toast.error('Error creating exam');
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
