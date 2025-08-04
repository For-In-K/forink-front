import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface GuideStep {
  label: string;
  colorClass: string;
  requirements: string[];
}

const guideSteps: GuideStep[] = [
  {
    label: 'In Progress',
    colorClass: 'bg-accent/90',
    requirements: ['No specific requirements met yet.'],
  },
  {
    label: 'Almost',
    colorClass: 'bg-secondary/90',
    requirements: [
      'At least 10 total ratings and every feedback has 1+ rating.',
      'Average per criterion is below 3.0 or overall average is below 4.0.',
    ],
  },
  {
    label: 'Formal Guide',
    colorClass: 'bg-primary/90',
    requirements: [
      'At least 10 total ratings and every feedback has 1+ rating.',
      'Average per criterion ≥ 3.0 and overall average ≥ 4.0.',
    ],
  },
];

const LOCAL_STORAGE_KEY = 'guideStatusSignClosed';

const GuideStatusSign = () => {
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
  };

  if (!visible) return null;

  return (
    <div className="relative flex flex-col gap-6 rounded-lg bg-white p-8 font-sans shadow-sm">
      <button
        onClick={handleClose}
        className="absolute top-3 right-3 rounded-md p-1 text-gray-400 hover:text-gray-700 focus:ring-2 focus:ring-gray-400 focus:outline-none"
      >
        <X />
      </button>
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold">Guide Status Levels</h2>
        <p className="text-sm leading-snug text-gray-500">
          Your status is determined by the number of ratings you’ve received and
          the quality of your feedback. To reach Formal Guide, earn enough
          ratings and maintain high scores across all criteria.
        </p>
      </div>
      <div className="flex flex-col gap-5 text-sm">
        {guideSteps.map((step) => (
          <div
            key={step.label}
            className="flex flex-col items-start gap-3 sm:flex-row"
          >
            <div className="w-40">
              <span
                className={`${step.colorClass} rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap text-white`}
              >
                {step.label}
              </span>
            </div>
            <ul className="list-inside list-disc space-y-1 text-gray-700">
              {step.requirements.map((req, idx) => (
                <li key={idx} className="text-gray-700">
                  {req}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuideStatusSign;
