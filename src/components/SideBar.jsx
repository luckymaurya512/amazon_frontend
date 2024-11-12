import React from 'react';
import './SideBar.css';
import usericon from '../assets/userpng.png';
import chevron from '../assets/chevron.svg';
import { MockData } from './MockData';

const SideBar = ({ isOpen, closeSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={() => closeSidebar(false)}>
        <span>&times;</span>
      </button>
      <a href='./signin'><button className="signin-btn">
        <img src={usericon} className="usericon" alt="usericon" />
        <span className="hello">Hello, sign In</span>
      </button>
      </a>
      {MockData.map((data, index) => (
        <ContentContainer key={index} data={data} />
      ))}
    </div>
  );
};

const ContentContainer = ({ data }) => {
  return (
    <div className="content-container">
      <div className="title">
        <h3>{data.title}</h3>
      </div>
      <div className="content-list">
        <ul>
          {data.items.map((item, index) => (
            <li key={index} className="content">
              <a href="https://google.com">{item.title}</a>
              {item.open && (
                <img src={chevron} className="chevron" alt="Chevron icon" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
