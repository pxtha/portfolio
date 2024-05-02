import { Link } from 'gatsby';
import get from 'lodash/get';
import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import profileImg from '../../images/avatar.jpg';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const classes = {
  wrapper: 'block mb-6 md:flex',
  imageWrapper: 'w-full md:w-1/3 md:flex-none md:pr-10',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black',
  description: 'text-gray-800 mt-5',
  list: 'mt-6 uppercase tracking-wider',
  item: 'inline list-none pr-4',
  link: 'inline-block py-2 font-semibold text-xs text-gray-800 hover:text-black bold uppercase tracking-wider transition-colors duration-150 ease-in-out',
  // move dark mode switch to the right
  darkModeSwitch: 'flex items-center space-x-1 absolute top-0 right-0 mt-2 mr-2 z-10 text-gray-800',
  darkModeCheckbox: 'opacity-0 w-0 h-0',
  darkModeSwitchBackground: 'cursor-pointer bg-gray-400 w-8 h-5 rounded-full p-1',
  darkModeSwitchHandle: 'bg-white w-3 h-3 rounded-full shadow-md transform duration-300 ease-in-out',
  darkModeSwitchHandleChecked: 'translate-x-3',
  contactWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
  },
  contactIcon: {
    marginRight: '5px',
    color: '#333',
  },
  contactText: {
    color: '#333',
    textDecoration: 'none',
    fontSize: '0.8rem',
  },
};



const Header = ({ metadata = {}, noBlog = false }) => {
  const twitter = get(metadata, 'author', false);
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };
  // toggle dark mode on load
  
  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <Link to="/">
          <img className={classes.image} src={profileImg} alt={metadata.name} />
        </Link>
        <div className={classes.darkModeSwitch}>
            <FiSun />
              <input type="checkbox" id="darkModeCheckbox" className={classes.darkModeCheckbox} checked={darkMode} onChange={toggleDarkMode} />
              <label htmlFor="darkModeCheckbox" className={classes.darkModeSwitchBackground}>
                <div className={`${classes.darkModeSwitchHandle} ${darkMode ? classes.darkModeSwitchHandleChecked : ''}`}></div>
              </label>
            <FiMoon />
        </div>
      </div>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{metadata.name}</Link>
        </h1>
      
      <div style={classes.contactWrapper}>
        <div style={classes.contactItem}>
          <FaEnvelope style={classes.contactIcon} />
          <a href={`mailto:${metadata.email}`} style={classes.contactText}>
            {metadata.email}
          </a>
        </div>
        <div style={classes.contactItem}>
          <FaPhone style={classes.contactIcon} />
          <a href={`tel:${metadata.phone}`} style={classes.contactText}>
            {metadata.phone}
          </a>
        </div>
        <div style={classes.contactItem}>
          <FaMapMarkerAlt style={classes.contactIcon} />
          <span style={classes.contactText}>{metadata.address}</span>
        </div>
      </div>

        <p className={classes.description}>{metadata.description}</p>
  
        <ul className={classes.list}>
          {
            <li className={classes.item}>
             <Link className={classes.link}  to="/">
                About Me
              </Link>
            </li>
          }
          {!noBlog && (
            <li className={classes.item}>
              <Link className={classes.link} to="/blog">
                Blog
              </Link>
            </li>
          )}
          {twitter && (
            <li className={classes.item}>
              <a
                className={classes.link}
                href={`https://twitter.com/${twitter}`}
              >
                Twitter
              </a>
            </li>
          )}
          {github && (
            <li className={classes.item}>
              <a className={classes.link} href={github}>
                GitHub
              </a>
            </li>
          )}
          {linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={linkedin}>
                LinkedIn
              </a>
            </li>
          )}

        </ul>
      </div>
    </div>
  );
};

export default Header;
