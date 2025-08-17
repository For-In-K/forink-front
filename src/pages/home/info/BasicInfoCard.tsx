import { ServiceBasicInfo } from '@constants/home';
import { Clock } from 'lucide-react';

const BasicInfoCard = ({
  title,
  when,
  summary,
  tag,
  url,
  icon,
}: ServiceBasicInfo) => {
  return (
    <div className="border-border flex h-52 w-xs flex-shrink-0 flex-col items-start justify-between rounded-lg border bg-white p-6 transition">
      <div className="w-full">
        <div className="mb-3 flex w-full items-center justify-between">
          <div className="text-primary">{icon}</div>
          <span
            className={`text-caption inline-block rounded-full px-3 py-1 font-medium ${
              tag === '중요'
                ? 'bg-red-100 text-red-600'
                : tag === '필수'
                  ? 'bg-orange-100 text-orange-600'
                  : tag === '권장'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-gray-100 text-gray-600'
            }`}
          >
            {tag}
          </span>
        </div>
        <div className="min-w-0">
          <p className="text-md font-semibold">{title}</p>
          <p className="mt-1 text-xs text-wrap break-words text-gray-500">
            {summary}
          </p>
        </div>
      </div>
      <div className="w-full">
        <p className="text-text-muted mb-0 flex items-center text-center text-xs font-medium">
          <Clock className="text-accent mr-1 inline-block h-4" />
          {when}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-white-hover border-primary text-primary mt-3 inline-block w-full rounded-md border p-1 text-center text-xs"
        >
          자세히 보기
        </a>
      </div>
    </div>
  );
};

export default BasicInfoCard;
