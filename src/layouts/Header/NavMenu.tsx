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
          `ransition-colors px-3 py-2 text-title2 font-bold duration-300 ease-in-out ${
            isActive
              ? 'border-primary text-primary sm:border-b-2'
              : 'text-text-primary'
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
      <nav className="flex gap-4">
        {NAV_ITEMS.map(({ buttonName, directPath }) => (
          <NavButton key={buttonName} to={directPath} label={buttonName} />
        ))}
      </nav>
    </>
  );
};

export default NavMenu;
