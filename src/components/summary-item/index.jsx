import React, { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi'; // Import the arrow icon
import TransitionLink from 'gatsby-plugin-transition-link';
import { motion, AnimatePresence } from 'framer-motion';

const classes = {
  wrapper: 'mb-6 flex w-full',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
  imageWrapper: 'flex-none bg-gray-100 rounded-md shadow-md transform transition-all duration-150 hover:scale-105 rounded-md',
  type: 'text-md text-gray-600 font-light italic pb-1 border-b border-gray-300',
  image:' w-24 h-24 mr-4',
  content: 'pl-4 flex flex-col justify-center',
};

const SummaryItem = ({
  name,
  description,
  link = false,
  internal = false,
  type,
  images,
  color
}) => {
  const [scale, setScale] = useState(1);
  const [isScaled, setIsScaled] = useState(false);

  useEffect(() => {
    
  }, [scale]);

  let linkContent;
  if (internal) {
    linkContent = (
      <TransitionLink
        to={link}
        exit={{ length: 1 }}
        entry={{ delay: 0.1, length: 1 }}
      >
        {name}
      </TransitionLink>
    );
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  const customScaleImage = () => {
    setIsScaled(true);
    setScale(11);
  };

  const handleBackButton = (e) => {
    e.stopPropagation();
    setIsScaled(false);
    setScale(1);
  };

  return (
    <div className={classes.wrapper} onClick={customScaleImage}>
      {images && images[0] && (
        <motion.div
          className={classes.imageWrapper}
          animate={{
            scale: isScaled ? scale : 1,
            x: isScaled ? [0, 100, 0] : []
          }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          onClick={customScaleImage}
          style={{ backgroundColor: color ? color : 'rgb(70, 91, 155)' }}
        >
          {name}
        </motion.div>
      )}
        {isScaled && (
              <motion.button 
                onClick={handleBackButton} 
                className="absolute top-0 left-0 m-2 text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5 }}
              >
                <FiArrowLeft />
              </motion.button>
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
