import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

const classes = {
  wrapper: 'mb-6 flex',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
  imageWrapper: 'md:flex-none',
  type: 'text-md text-gray-600 font-light italic pb-1 border-b border-gray-300',
  image: ' w-24 h-24 shadow-md mr-4 transform transition-all duration-150 hover:scale-105 rounded-md',
  content: 'pl-4 flex flex-col justify-center' ,
};

const SummaryItem = ({ name, description, link = false, internal = false, type, images }) => {
  let linkContent;
  if (internal) {
    linkContent = <TransitionLink 
    to={link} 
    exit={{ length: 1 }} 
    entry={{ delay: 0.1, length: 1 }}
  >
    {name}
  </TransitionLink>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  
  return (
    <div className={classes.wrapper}>
      {
         images && images[0] && (
          <div className={classes.imageWrapper}>
           <TransitionLink 
              to={link} 
              exit={{ length: 1 }} 
              entry={{ delay: 0.1, length: 1 }}
            >
                <img src={images[0]} alt="Project" className={classes.image} />
            </TransitionLink>
          </div>
      )}
      <div className={classes.content}>
        <h3 className={`${classes.name} ${ link ? 'hover:underline hover:text-black' : ''}`}>
          {link ? linkContent : name}
        </h3>
        <p className={classes.type}>{type}</p>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
};

export default SummaryItem;
