import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useAuth from '@hooks/useAuth';

const ROUTES = [
  { key: 'home', path: '/' },
  { key: 'roadmap', path: '/roadmap' },
  { key: 'guide', path: '/guide' },
  { key: 'board', path: '/board' },
] as const;

type RouteItem = (typeof ROUTES)[number];

interface NavMenuButtonProps {
  label: string;
  to: string;
  invisible?: boolean;
}

const NavButton = ({ label, to, invisible }: NavMenuButtonProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `sm:text-body hover:bg-surface/50 flex h-10 items-center rounded-full p-2 px-3 text-xs transition-colors duration-300 ease-in-out ${
          isActive
            ? 'border-primary text-primary font-bold'
            : 'text-text-primary font-normal'
        } ${invisible ? 'pointer-events-none invisible' : ''}`
      }
    >
      {label}
    </NavLink>
  );
};

const NavMenu = () => {
  const { t } = useTranslation();
  const { isPreGuide, isGuide } = useAuth();

  const boardPath = isPreGuide
    ? '/board/guide/status'
    : isGuide
      ? '/board/guide/rating'
      : '/guide';

  return (
    <nav className="flex truncate sm:gap-4 md:gap-6">
      {ROUTES.map(({ key, path }) => {
        const isBoard = key === 'board';
        const to = isBoard ? boardPath : path;
        const label = t(`nav.${key}`);
        const invisible = isBoard && !(isPreGuide || isGuide);
        return (
          <NavButton key={key} to={to} label={label} invisible={invisible} />
        );
      })}
    </nav>
  );
};

export default NavMenu;
