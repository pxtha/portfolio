import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaLinkedin, FaGithub  } from "react-icons/fa";


const classes = {
  contactWrapper: 'p-2 flex-none text-gray-800 text-lg font-light ',
  contactItem: 'flex items-center mb-3',
  contactIcon: 'mr-2',
  contactText: 'text-md',
  wrapper: 'block pt-12 md:flex',
  title: 'pb-6 md:w-full md:max-w-150 md:p-0',

};

const SectionContact = ({ metadata = {} }) => {
  return (
      <div className={classes.contactWrapper}>
        <div className={classes.contactItem}>
          <FaEnvelope className={classes.contactIcon} />
          <a href={`mailto:${metadata.email}`} className={classes.contactText}>
            {metadata.email}
          </a>
        </div>
        <div className={classes.contactItem}>
          <FaPhone className={classes.contactIcon} />
          <a href={`tel:${metadata.phone}`} className={classes.contactText}>
            {metadata.phone}
          </a>
        </div>
        <div className={classes.contactItem}>
          <FaMapMarkerAlt className={classes.contactIcon} />
          <span className={classes.contactText}>{metadata.address}</span>
        </div>
        <div className={classes.contactItem}>
          <FaLinkedin className={classes.contactIcon} />
          <a href={metadata.linkedin} className={classes.contactText}>
            Linkedin
          </a>
        </div>
        <div className={classes.contactItem}>
          <FaGithub className={classes.contactIcon} />
          <a href={metadata.github} className={classes.contactText}>
            Github
          </a>
        </div>
      </div>
  );
};

export default SectionContact;
