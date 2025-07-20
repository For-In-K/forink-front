import LogoButton from './LogoButton';
import NavMenu from './NavMenu';
import UserGreeting from './UserGreeting';
import LanguageSelector from './LanguageSelector';
import SignInButton from './SignInButtont';

const Header = () => {
  return (
    <>
      <header className="sm:h-minHeader flex w-full items-center justify-around border-b border-border bg-white text-textPrimary md:h-header">
        <LogoButton />
        <NavMenu />
        <UserGreeting />
        <LanguageSelector />
        <SignInButton />
      </header>
    </>
  );
};

export default Header;
