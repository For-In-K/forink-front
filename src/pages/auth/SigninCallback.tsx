import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import useAuth from '@hooks/useAuth';
import { getOauthCallback } from '@apis/oauth';

const SigninCallback = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const [params] = useSearchParams();
  const code = params.get('code');

  useEffect(() => {
    if (!code) {
      toast('로그인에 실패했어요');
      navigate('/signin');
      return;
    }

    const handleSignin = async () => {
      try {
        const { token } = await getOauthCallback(code);
        signIn(token);
        toast('로그인에 성공했어요');
        navigate('/');
      } catch {
        toast('로그인에 실패했어요');
        navigate('/signin');
      }
    };

    handleSignin();
  }, [code, navigate, signIn]);

  return <div>로그인 처리 중 ...</div>;
};

export default SigninCallback;
