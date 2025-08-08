import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getOauthCallback } from '@apis/oauth';

const SigninCallback = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = params.get('code');
    if (code) {
      getOauthCallback(code)
        .then(() => {
          navigate('/');
        })
        .catch(() => {
          alert('로그인에 실패했습니다. 다시 시도해주세요.'); // TODO: 토스트로 대체하기
          navigate('/signin');
        });
    } else {
      alert('로그인 코드가 없습니다.');
      navigate('/signin');
    }
  }, [params, navigate]);

  return <div>로그인 처리 중 ...</div>;
};

export default SigninCallback;
