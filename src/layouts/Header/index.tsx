import LogoButton from './LogoButton';
import NavMenu from './NavMenu';
import UserGreeting from './UserGreeting';
import LanguageSelector from './LanguageSelector';
import SignInButton from './SignInButtont';

const Header = () => {
  return (
    <>
      <header className="h-min-header border-border text-text-primary md:h-header flex w-full items-center justify-around border-b bg-white">
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
