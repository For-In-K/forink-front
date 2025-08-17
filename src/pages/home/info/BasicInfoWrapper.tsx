import BasicInfoCard from './BasicInfoCard';
import { serviceList } from '@constants/home';

const BasicInfoWrapper = () => {
  return (
    <div>
      <header className="mb-8">
        <p className="text-title2 font-semibold">중요 행정 정보</p>
        <p className="text-text-muted mt-1 text-sm">
          놓치면 안되는 필수 행정 절차들을 확인하세요.
        </p>
      </header>
      <div className="flex gap-2 overflow-x-scroll">
        {serviceList.map((service, index) => (
          <BasicInfoCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default BasicInfoWrapper;
