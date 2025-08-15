import type { SupportInfoCard } from '@apis/home';

const SupportCard = ({ card }: { card: SupportInfoCard }) => {
  return (
    <article
      className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-transform duration-150 hover:-translate-y-1"
      aria-labelledby={`support-${card.title}`}
    >
      {card.thumbnail_url ? (
        <div className="aspect-[16/9] w-full overflow-hidden">
          <img
            src={card.thumbnail_url}
            alt={card.title}
            loading="lazy"
            className="h-full w-full object-cover"
            style={{ background: 'var(--color-surface)' }}
          />
        </div>
      ) : (
        <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-[color:var(--color-surface)] to-white">
          <span className="text-sm text-gray-400">No image</span>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 id={`support-${card.title}`} className="line-clamp-2 text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          {card.title}
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3">
          {card.summary}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <a
            href={card.article_url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-colors"
            style={{
              background: 'var(--color-primary)',
              color: 'var(--color-white)',
            }}
          >
            Read article
          </a>

          <span className="text-xs text-gray-400">{/* optional meta */}</span>
        </div>
      </div>
    </article>
  );
};

export default SupportCard;