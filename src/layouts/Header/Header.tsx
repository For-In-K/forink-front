import useAuth from '@hooks/useAuth';

import Logo from './Logo';
import NavMenu from './NavMenu';
import UserGreeting from './UserGreeting';
import Point from './Point';
import LanguageSelector from './LanguageSelector';
import SignInButton from './SignInButton';

const Header = () => {
  const { isSignedIn } = useAuth();

  return (
    <header className="h-min-header border-border text-text-primary md:h-header fixed z-10 flex w-full items-center border-b bg-white px-2">
      <div className="container mx-auto flex items-center justify-around">
        <Logo />
        <NavMenu />
        <UserGreeting />
        <div className="flex items-center gap-8">
          <Point />
          <LanguageSelector />
          <SignInButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
