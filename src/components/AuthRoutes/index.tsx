import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import Footer from '../Footer';

const AuthRoute = () => {
  return (
    <>
      <Header>
        <Header.Logo />
        <Header.Nav />
        <Header.Hamburger />
      </Header>
      <Outlet />
      <Footer />
    </>
  );
};

export default AuthRoute;
