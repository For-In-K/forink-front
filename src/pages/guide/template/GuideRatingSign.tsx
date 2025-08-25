import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';

interface GuideRatingSignProps {
  onClose?: () => void;
}

const LOCAL_STORAGE_KEY = 'guideRatingSignClosed';

const GuideRatingSign = ({ onClose }: GuideRatingSignProps) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const closed = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (closed !== 'true') {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, 'true');
    setVisible(false);
    onClose?.();
  };

  if (!visible) return null;

  const criteria = t('guide.rating.criteria', {
    returnObjects: true,
  }) as string[];

  return (
    <div className="relative flex flex-col gap-4 rounded-lg bg-white p-6 font-sans shadow-sm">
      <button
        onClick={handleClose}
        className="absolute top-3 right-3 rounded-md p-1 text-gray-400 hover:text-gray-700 focus:ring-2 focus:ring-gray-400 focus:outline-none"
      >
        <X size={16} />
      </button>

      <h2 className="text-lg font-semibold">{t('guide.rating.title')}</h2>

      <p
        className="text-sm leading-snug text-gray-500"
        dangerouslySetInnerHTML={{ __html: t('guide.rating.description') }}
      />

      <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
        {criteria.map((criterion, index) => (
          <li key={index}>{criterion}</li>
        ))}
      </ul>
    </div>
  );
};

export default GuideRatingSign;
