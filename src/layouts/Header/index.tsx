import LogoButton from './LogoButton';
import NavMenu from './NavMenu';
import UserGreeting from './UserGreeting';
import LanguageSelector from './LanguageSelector';
import SignInButton from './SignInButtont';

const Header = () => {
  return (
    <>
      <header className="sm:h-min-header flex w-full items-center justify-around border-b border-border bg-white text-text-primary md:h-header">
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
