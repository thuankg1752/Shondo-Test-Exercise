import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import Footer from '../Footer';
import HomeApp from '../HomeApp';
import React, { useState } from 'react';

const AuthRoute = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  return (
    <React.Fragment>
      <Header>
        <Header.Logo />
        <Header.Nav />
        <Header.Hamburger toggleIcon={openNav} setToggleIcon={setOpenNav}/>
      </Header>
      <HomeApp>
        <Outlet />
      </HomeApp>
      <Footer />
    </React.Fragment>
  );
};

export default AuthRoute;
