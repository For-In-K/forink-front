import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface GuideRatingSignProps {
  onClose?: () => void;
}

const LOCAL_STORAGE_KEY = 'guideRatingSignClosed';

const GuideRatingSign = ({ onClose }: GuideRatingSignProps) => {
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

  return (
    <div className="relative flex flex-col gap-4 rounded-lg bg-white p-6 font-sans shadow-sm">
      <button
        onClick={handleClose}
        className="absolute top-3 right-3 rounded-md p-1 text-gray-400 hover:text-gray-700 focus:ring-2 focus:ring-gray-400 focus:outline-none"
      >
        <X size={16} />
      </button>
      <h2 className="text-lg font-semibold">Guide Rating Criteria</h2>
      <p className="text-sm leading-snug text-gray-500">
        Please evaluate based on the criteria below. Prospective guides need at
        least 10 feedback entries, an average score of <strong>4.0+</strong>,
        and a minimum of <strong>3.0 per criterion</strong> for promotion.
      </p>
      <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
        <li>Milestone title – Feedback content</li>
      </ul>
    </div>
  );
};

export default GuideRatingSign;
