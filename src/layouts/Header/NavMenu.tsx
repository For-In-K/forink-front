import { NavLink } from 'react-router-dom';
import useAuth from '@hooks/useAuth';

const NAV_ITEMS = [
  { buttonName: 'Roadmap', directPath: '/roadmap' },
  { buttonName: 'Guide', directPath: '/guide' },
  { buttonName: 'Board', directPath: '/board' },
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
          `sm:text-title2 text-body hover:bg-surface/50 flex h-10 items-center rounded-full p-2 px-4 font-mono transition-colors duration-300 ease-in-out ${
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
      <nav className="flex gap-4 sm:gap-6">
        {NAV_ITEMS.map(({ buttonName, directPath }) => {
          const isBoard = buttonName === 'Board';
          const to = isBoard ? boardPath : directPath;
          const invisible = isBoard && isUser;
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
