import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import { motion } from 'framer-motion';

import joon from '../../images/joon.png';
import wsss from '../../images/wsss.jpeg';
import resume from '../../images/magic-resume.jpg';
import shoptalk from '../../images/shoptalk.jpg';

const classes = {
  wrapper:
    'mb-6 flex w-full transform transition-all duration-200 hover:scale-105',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-800 font-light',
  imageWrapper:
    'imageWrapper flex-none bg-gray-100 rounded-md shadow-md transform transition-all duration-200',
  type: 'text-md text-gray-800 font-light italic pb-1 border-b border-gray-300',
  content: 'pl-4 flex flex-col justify-center',
  child: 'child w-full h-full object-cover',
  childFull : 'rounded-md w-full h-full object-cover',
};

const SummaryItem = ({
  name,
  description,
  link = false,
  internal = false,
  type,
  images,
  color,
}) => {
  let linkContent;
  if (internal) {
    linkContent = (
      <TransitionLink to={link} entry={{ delay: 0.1, length: 1 }}>
        {name}
      </TransitionLink>
    );
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  function getImage(name) {
    switch (name) {
      case 'joon':
        return <img src={joon} alt={name} className={classes.childFull} />
      case 'wsss':
        return <img src={wsss} alt={name} className={classes.childFull} />
      case 'resume':
        return <img src={resume} alt={name} className={classes.child} />
      case 'shoptalk':
        return <img src={shoptalk} alt={name} className={classes.child} />
    }
    return null;
  }
  return (
    <div className={classes.wrapper}>
      {images && images[0] && (
        <TransitionLink to={link}>
          <motion.div
            className={classes.imageWrapper}
            transition={{ duration: 0.5 }}
            style={{ background: color }}
          >        
            {getImage(images[0])}
          </motion.div>
        </TransitionLink>
      )}
      <div className={classes.content}>
        <h3
          className={`${classes.name} ${
            link ? 'hover:underline hover:text-black' : ''
          }`}
        >
          {link ? linkContent : name}
        </h3>
        <p className={classes.type}>{type}</p>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
};

export default SummaryItem;
