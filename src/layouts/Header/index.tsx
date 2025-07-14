import Logo from './LogoButton';
import NavMenu from './NavMenu';
import UserGreeting from './UserGreeting';
import LanguageSelector from './LanguageSelector';
import SignInButton from './SignInButtont';

const Header = () => {
  return (
    <>
      <header className="flex w-full items-center justify-around border-b border-border bg-white text-textPrimary sm:h-16 md:h-header">
        <Logo />
        <NavMenu />
        <UserGreeting />
        <LanguageSelector />
        <SignInButton />
      </header>
    </>
  );
};

export default Header;
