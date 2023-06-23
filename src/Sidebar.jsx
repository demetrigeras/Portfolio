import React from 'react';
import { Link } from 'react-scroll';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sideprofile'>
        <h3>Demetri Geras</h3>
        <p>Software Engineer</p>
      </div>
      
      <ul>
        <li>
          <Link to='aboutMe' smooth={true} duration={500}>
            <span className='icon'><i className='fas fa-home' ></i></span>
            <span className='item'>About me</span>
          </Link>
        </li>

        <li>
          <Link to='skills' smooth={true} duration={500}>
            <span className='item'>Skills</span>
          </Link>
        </li>

        <li>
          <Link to='projects' smooth={true} duration={500}>
            <span className='item'>Projects</span>
          </Link>
        </li>

        <li>
          <Link to='contact' smooth={true} duration={500}>
            <span className='item'>Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
