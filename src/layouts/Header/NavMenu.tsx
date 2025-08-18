import { NavLink } from 'react-router-dom';
import useAuth from '@hooks/useAuth';

const NAV_ITEMS = [
  { buttonName: '홈', directPath: '/' },
  { buttonName: '로드맵', directPath: '/roadmap' },
  { buttonName: '가이드', directPath: '/guide' },
  { buttonName: '게시판', directPath: '/board' },
] as const;

type NavMenuButton = (typeof NAV_ITEMS)[number];

interface NavMenuButtonProps {
  label: NavMenuButton['buttonName'];
  to: string;
  invisible?: boolean;
}

const NavButton = ({ label, to, invisible }: NavMenuButtonProps) => {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `sm:text-body hover:bg-surface/50 flex h-10 items-center rounded-full p-2 px-4 text-sm transition-colors duration-300 ease-in-out ${
            isActive
              ? 'border-primary text-primary font-bold'
              : 'text-text-primary font-normal'
          } ${invisible ? 'pointer-events-none invisible' : ''}`
        }
      >
        {label}
      </NavLink>
    </>
  );
};

const NavMenu = () => {
  const { isUser, isPreGuide, isGuide } = useAuth();

  const boardPath = isPreGuide
    ? '/board/guide/status'
    : isGuide
      ? '/board/guide/rating'
      : '/guide';

  return (
    <>
      <nav className="flex truncate sm:gap-4 md:gap-6">
        {NAV_ITEMS.map(({ buttonName, directPath }) => {
          const isBoard = buttonName === '게시판';
          const to = isBoard ? boardPath : directPath;
          const invisible = isBoard && !(isPreGuide || isGuide);
          return (
            <NavButton
              key={buttonName}
              to={to}
              label={buttonName}
              invisible={invisible}
            />
          );
        })}
      </nav>
    </>
  );
};

export default NavMenu;
