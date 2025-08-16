import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomeServiceSign = () => {
  const navigate = useNavigate();

  return (
    <div className="h-sign to-primary w-full bg-gradient-to-b from-blue-600">
      <div className="container mx-auto flex flex-col gap-8 p-10 text-center">
        <p className="font-mono text-6xl font-bold text-white">ForinK</p>
        <div className="flex flex-col gap-3">
          <p className="text-base text-slate-50">
            외국인을 위한 맞춤형 행정 지원 서비스
          </p>
          <p className="text-xs text-slate-200">
            한국 생활 적응부터 행정 절차까지, 당신의 성공적인 정착을 위한 모든
            것을 함께 합니다
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/signin')}
            className="bg-accent hover:bg-accent-hover flex items-center justify-center gap-1 rounded-md p-2 text-xs font-medium text-white"
          >
            정착 진단 시작하기 <ArrowRight className="ml-1" size={12} />
          </button>
          <button
            onClick={() => navigate('/signin')}
            className="hover:border-white-hover hover:text-white-hover rounded-md border p-2 px-6 text-xs font-medium text-white"
          >
            가이드 찾기
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceSign;
