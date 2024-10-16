import React from 'react';
import './style.less';

const Spin: React.FC = () => {
  return <div className="loading__box">
    <div className="parent">
      <div className="child">
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
      </div>
      <svg
        width="30"
        height="22"
        viewBox="0 0 30 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="loading__checked"
      >
        <path
          d="M29.8179 3.17834C29.8243 4.02334 29.532 4.75399 28.9349 5.34486C23.7192 10.5674 18.5099 15.7899 13.2815 20.9934C12.049 22.2196 10.2003 22.245 8.95518 21.0188C6.28699 18.3949 3.6442 15.7518 1.02048 13.0834C-0.18656 11.8635 -0.135737 9.91935 1.04589 8.75031C2.26564 7.54951 4.17785 7.56222 5.423 8.79479C6.73804 10.0972 8.04037 11.4061 9.34906 12.7149C10.6704 14.0364 11.5281 14.0427 12.8304 12.7339C16.712 8.85197 20.5872 4.97001 24.4752 1.0944C25.9427 -0.36689 28.1789 -0.201701 29.2906 1.43114C29.6464 1.96483 29.8243 2.54299 29.8179 3.17834Z"
          fill="white"
        />
      </svg>
    </div>
  </div>;
};
export default Spin;
