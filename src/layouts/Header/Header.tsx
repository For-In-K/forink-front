import useAuth from '@hooks/useAuth';

import LogoButton from './LogoButton';
import NavMenu from './NavMenu';
import UserGreeting from './UserGreeting';
import LanguageSelector from './LanguageSelector';
import SignInButton from './SignInButton';

const Header = () => {
  const { isSignedIn } = useAuth();

  return (
    <header className="h-min-header border-border text-text-primary md:h-header fixed z-10 flex w-full items-center border-b bg-white">
      <div className="container mx-auto flex items-center justify-around">
        <LogoButton />
        {isSignedIn ? (
          <>
            <NavMenu />
            <UserGreeting />
          </>
        ) : (
          <div />
        )}
        <LanguageSelector />
        <SignInButton />
      </div>
    </header>
  );
};

export default Header;
