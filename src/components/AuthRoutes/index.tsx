import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import Footer from '../Footer';
import HomeApp from '../HomeApp';
import React from 'react';

const AuthRoute = () => {
  return (
    <React.Fragment>
      <Header>
        <Header.Logo />
        <Header.Nav />
        <Header.Hamburger />
      </Header>
      <HomeApp>
        <Outlet />
      </HomeApp>
      <Footer />
    </React.Fragment>
  );
};

export default AuthRoute;
