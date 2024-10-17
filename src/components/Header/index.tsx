import React, { createContext, useState } from 'react';
import './Header.less';

type HeaderDirectLink = {
  name: string;
  link: string;
};
const HeaderDirectLink: HeaderDirectLink[] = [{
  name: 'Home',
  link: '/'
},
  {
    name: 'Products',
    link: '/'
  },
  {
    name: 'About Us',
    link: '/'
  },
  {
    name: 'Contact',
    link: '/'
  }];

interface HeaderProps {
  children: React.ReactNode;
}

type HeaderContextType = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};


const HeaderContext = createContext<HeaderContextType>({
  toggle: false,
  setToggle: (): void => {
  }
});

export function Header(props: HeaderProps) {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header__container">
      <HeaderContext.Provider value={{ toggle, setToggle }}>
        <div className="header__content">
          {props.children}
        </div>

      </HeaderContext.Provider>
    </header>

  );
};
const HeaderLogo: React.FC = () => {
  return <div className="header__logo">MyShop</div>;
};


const HeaderNav = () => {
  const { toggle } = React.useContext(HeaderContext);
  return (
    <nav className={`header__nav ${toggle ? 'header__nav--open' : ''}`}>
      <ul className={`header__nav-list ${toggle ? 'header__nav--open-list' : ''}`}>
        {HeaderDirectLink.map((item, index) => {
          return <li key={index} className="header__nav-item">
            <a className="header__nav-item-link" href={item.link}>{item.name}</a>
          </li>;
        })}
      </ul>
    </nav>
  );
};

function HeaderHamburger() {
  const { toggle, setToggle } = React.useContext(HeaderContext);

  return (
    <div
      className="header__hamburger" onClick={() => {
      setToggle(!toggle);
    }}
    >
      {toggle ? (
        <React.Fragment>
          <span className="header__hamburger-line header__hamburger-line--top"></span>
          <span className="header__hamburger-line header__hamburger-line--middle"></span>
          <span className="header__hamburger-line header__hamburger-line--bottom"></span>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
        </React.Fragment>
      )}
    </div>
  );
}

Header.Nav = HeaderNav;
Header.Logo = HeaderLogo;
Header.Hamburger = HeaderHamburger;
