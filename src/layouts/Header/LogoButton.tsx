import { NavLink } from 'react-router-dom';
import LogoIcon from '@assets/logo/logo.svg?react';

const Logo = () => {
  return (
    <>
      <NavLink to="/">
        <LogoIcon className="p-1 sm:p-0" />
      </NavLink>
    </>
  );
};

export default Logo;
