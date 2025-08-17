import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import Typing from '@components/status/Typing';
import useAuth from '@hooks/useAuth';
import { getOauthCallback } from '@apis/oauth';

const SigninCallback = () => {
  const [params] = useSearchParams();
  const code = params.get('code');

  const navigate = useNavigate();
  const { signIn } = useAuth();

  useEffect(() => {
    if (!code) {
      toast.error('로그인에 실패했어요');
      navigate('/signin');
      return;
    }

    const handleSignin = async () => {
      try {
        const { token, isCompleted } = await getOauthCallback(code);
        signIn(token);
        if (isCompleted) {
          toast.success('로그인에 성공했어요');
          navigate('/');
          return;
        }
        toast.info('가입 페이지로 넘어갈게요');
        navigate('/signin/option');
      } catch {
        toast.error('로그인에 실패했어요');
        navigate('/signin');
      }
    };

    handleSignin();
  }, [code, navigate, signIn]);

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <p>로그인 중이에요</p>
      <Typing />
    </div>
  );
};

export default SigninCallback;
