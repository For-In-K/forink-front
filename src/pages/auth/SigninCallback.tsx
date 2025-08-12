import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { toast } from 'react-toastify';
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
        const { token } = await getOauthCallback(code);
        signIn(token);
        toast.success('로그인에 성공했어요');
        navigate('/');
      } catch {
        toast.error('로그인에 실패했어요');
        navigate('/signin');
      }
    };

    handleSignin();
  }, [code, navigate, signIn]);

  return <div>로그인 처리 중 ...</div>;
};

export default SigninCallback;
