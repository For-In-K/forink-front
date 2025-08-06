import { NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { buttonName: 'Roadmap', directPath: '/roadmap' },
  { buttonName: 'Guide', directPath: '/guide' },
  { buttonName: 'Board', directPath: '/board' },
] as const;

type NavMenuButton = (typeof NAV_ITEMS)[number];

interface NavMenuButtonProps {
  label: NavMenuButton['buttonName'];
  to: NavMenuButton['directPath'];
}

const NavButton = ({ label, to }: NavMenuButtonProps) => {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `text-title2 flex h-10 items-center px-2 font-mono font-bold transition-colors duration-300 ease-in-out ${
            isActive
              ? 'border-primary text-primary hover:text-primary-hover border-b-0 sm:border-b-2'
              : 'text-text-primary hover:text-gray-500'
          }`
        }
      >
        {label}
      </NavLink>
    </>
  );
};

const NavMenu = () => {
  return (
    <>
      <nav className="flex gap-4 sm:gap-10">
        {NAV_ITEMS.map(({ buttonName, directPath }) => (
          <NavButton key={buttonName} to={directPath} label={buttonName} />
        ))}
      </nav>
    </>
  );
};

export default NavMenu;
