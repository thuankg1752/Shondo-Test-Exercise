import React from 'react';
import './HomeApp.less';
type HomeAppProps = {
  children: React.ReactNode;
}
const HomeApp: React.FC<HomeAppProps> = ({ children }) => {
  return (
    <div id="home-app" className='home-app__container'>
      {children}
    </div>
  );
};
export default HomeApp;
