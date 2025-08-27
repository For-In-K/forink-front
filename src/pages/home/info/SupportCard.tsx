import { useTranslation } from 'react-i18next';

import type { SupportInfoCard } from '@apis/home';
import thumbnail from '@assets/static/thumbnail.svg';

const SupportCard = ({ card }: { card: SupportInfoCard }) => {
  const { t } = useTranslation();

  const handleCardClick = () => {
    window.open(card.article_url, '_blank', 'noreferrer');
  };

  return (
    <button
      onClick={handleCardClick}
      className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white opacity-80 shadow-sm transition-transform duration-150 hover:-translate-y-1 hover:opacity-100 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none active:-translate-y-1 active:opacity-100"
      aria-labelledby={`support-${card.title}`}
    >
      {card.thumbnail_url ? (
        <div className="aspect-[16/9] w-full overflow-hidden">
          <img
            src={card.thumbnail_url}
            alt={card.title}
            loading="lazy"
            className="pointer-events-none h-full w-full object-cover object-top transition-[object-position] duration-[2500ms] ease-in-out group-hover:object-bottom group-active:object-bottom"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-[color:var(--color-surface)] to-white">
          <img
            src={thumbnail}
            alt="Thumbnail placeholder"
            className="pointer-events-none h-full w-full object-cover"
          />
        </div>
      )}

      <div className="pointer-events-none flex flex-1 flex-col gap-3 p-4 text-left">
        <h3
          id={`support-${card.title}`}
          className="text-text-primary pointer-events-none line-clamp-2 text-lg font-semibold"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {card.title}
        </h3>

        <p className="pointer-events-none line-clamp-3 flex-1 text-xs leading-relaxed text-gray-500">
          {card.summary}
        </p>

        <div className="pointer-events-none mt-3 flex items-center justify-between">
          <span className="bg-primary pointer-events-none inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-white">
            {t('home.articleButton')}
          </span>

          <span className="pointer-events-none text-xs text-gray-400">
            {/* optional meta */}
          </span>
        </div>
      </div>
    </button>
  );
};

export default SupportCard;
