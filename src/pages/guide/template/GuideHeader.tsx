import { roadmapTypes } from '@mocks/data/roadmaps';
import { capitalizeFirstLetter } from '@utils/chars';

interface TypeButtonProps {
  type: string;
  isSelected?: boolean;
}

const TypeButton = ({ type, isSelected = false }: TypeButtonProps) => {
  return (
    <button
      className={`${isSelected ? 'bg-primary/75 text-white-hover' : 'text-primary hover:bg-white-hover'} border-primary text-title2 rounded-full border px-6 py-2`}
    >
      {type}
    </button>
  );
};

const GuideHeader = () => {
  const HEADER_KEYWORD = 'Types of Guides';

  return (
    <>
      <div className="flex flex-wrap items-start gap-3 truncate sm:gap-6">
        <div className="text-text-muted bg-surface text-title2 rounded-full px-6 py-2">
          {HEADER_KEYWORD}
        </div>
        <TypeButton type="All" isSelected />
        {roadmapTypes.map((item) => (
          <TypeButton type={capitalizeFirstLetter(item.type)} />
        ))}
      </div>
    </>
  );
};

export default GuideHeader;
