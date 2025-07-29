import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { capitalizeFirstLetter } from '@src/utils/chars';
import Progressbar from '@src/components/input/Progressbar';
import { roadmapTypes } from '@src/mocks/data/roadmaps';

const Roadmap = () => {
  const { t } = useTranslation();
  const [hoveredType, setHoveredType] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center gap-6 py-10">
      {roadmapTypes.map((category) => {
        const type = category.type;
        const progress = category.progressRatio;
        const title = capitalizeFirstLetter(type);
        const description = t(`roadmap.categories.${type}.description`);

        return (
          <button
            key={category.type}
            type="button"
            onMouseEnter={() => setHoveredType(category.type)}
            onMouseLeave={() => setHoveredType(null)}
            className={`flex h-42 w-2xl flex-col items-start gap-1 rounded-3xl px-10 py-6 text-white shadow-md transition-all duration-300 hover:scale-105 hover:text-white ${hoveredType && hoveredType !== type ? 'bg-primary/50 blur-xs filter' : 'bg-primary/75'} `}
          >
            <span className="text-title1 font-bold">{title}</span>
            <span className="text-body h-16 text-left">{description}</span>
            <div className="my-1 flex w-full items-center gap-2">
              <Progressbar
                totalSize={100}
                currentSize={progress}
                showNumber="percent"
              />
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Roadmap;
