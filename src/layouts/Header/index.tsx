import useAuth from '@hooks/useAuth';

import LogoButton from './LogoButton';
import NavMenu from './NavMenu';
import UserGreeting from './UserGreeting';
import LanguageSelector from './LanguageSelector';
import SignInButton from './SignInButtont';

const Header = () => {
  const { isSignedIn } = useAuth();

  return (
    <>
      <header className="h-min-header border-border text-text-primary md:h-header fixed z-10 flex w-full items-center justify-around border-b bg-white">
        <LogoButton />
        {!isSignedIn ? (
          <>
            <NavMenu />
            <UserGreeting />
          </>
        ) : (
          <>
            <div className="flex" />
            <div className="flex" />
          </>
        )}

        <LanguageSelector />
        <SignInButton />
      </header>
    </>
  );
};

export default Header;
