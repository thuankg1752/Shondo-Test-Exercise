import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import Footer from '../Footer';
import HomeApp from '../HomeApp';

const AuthRoute = () => {
  return (
    <>
      <Header>
        <Header.Logo />
        <Header.Nav />
        <Header.Hamburger />
      </Header>
      <HomeApp>
        <Outlet />
      </HomeApp>
      <Footer />
    </>
  );
};

export default AuthRoute;
