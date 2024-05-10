import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaLinkedin, FaGithub  } from "react-icons/fa";

import Section from '../section';
// the style for the contact section must differnt from moblie responsive

const classes = {
  contactWrapper: 'flex-row flex-col sm:flex-row justify-between p-2',
  contactItem: 'flex items-center mb-3',
  contactIcon: 'mr-2',
  contactText: 'text-md',
};

const SectionContact = ({ metadata = {} }) => {
  return (
    <Section title="Contact">
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
    </Section>
  );
};

export default SectionContact;
