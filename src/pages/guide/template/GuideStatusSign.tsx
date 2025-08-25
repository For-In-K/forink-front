import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';

interface GuideStep {
  key: string;
  colorClass: string;
}

const guideStepsConfig: GuideStep[] = [
  {
    key: 'inProgress',
    colorClass: 'bg-accent/90',
  },
  {
    key: 'almost',
    colorClass: 'bg-secondary/90',
  },
  {
    key: 'formalGuide',
    colorClass: 'bg-primary/90',
  },
];

const LOCAL_STORAGE_KEY = 'guideStatusSignClosed';

const GuideStatusSign = ({ onClose }: { onClose?: () => void }) => {
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

  return (
    <div className="relative flex flex-col gap-6 rounded-lg bg-white p-6 font-sans shadow-sm">
      <button
        onClick={handleClose}
        className="absolute top-3 right-3 rounded-md p-1 text-gray-400 hover:text-gray-700 focus:ring-2 focus:ring-gray-400 focus:outline-none"
      >
        <X size={16} />
      </button>
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold"> {t('guide.status.title')}</h2>
        <p className="text-sm leading-snug text-gray-500">
          {t('guide.status.description')}
        </p>
      </div>
      <div className="flex flex-col gap-5 text-sm">
        {guideStepsConfig.map((step) => (
          <div
            key={step.key}
            className="flex flex-col items-start gap-3 sm:flex-row"
          >
            <div className="w-40">
              <span
                className={`${step.colorClass} rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap text-white`}
              >
                {t(`guide.status.steps.${step.key}.label`)}
              </span>
            </div>
            <ul className="list-inside list-disc space-y-1 text-gray-700">
              {(Array.isArray(
                t(`guide.status.steps.${step.key}.requirements`, {
                  returnObjects: true,
                })
              )
                ? (t(`guide.status.steps.${step.key}.requirements`, {
                    returnObjects: true,
                  }) as string[])
                : []
              ).map((req: string, idx: number) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuideStatusSign;
