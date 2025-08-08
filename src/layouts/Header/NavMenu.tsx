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
          `sm:text-title2 text-body hover:bg-surface/50 flex h-10 items-center rounded-full p-2 px-4 font-mono transition-colors duration-300 ease-in-out ${
            isActive
              ? 'border-primary text-primary font-bold'
              : 'text-text-primary font-normal'
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
      <nav className="flex gap-4 sm:gap-6">
        {NAV_ITEMS.map(({ buttonName, directPath }) => (
          <NavButton key={buttonName} to={directPath} label={buttonName} />
        ))}
      </nav>
    </>
  );
};

export default NavMenu;
