import React from 'react';

const classes = {
  wrapper: 'block pt-12 md:flex',
  title: 'pb-6 md:w-full md:max-w-150 md:p-0',
  // make heading bold
  heading:
    'font-xs font-bold tracking-widest text-sm text-gray-800 leading-normal uppercase',
  content: 'flex-none text-xl text-gray-800 font-light md:flex-1 md:pl-20',
};

const Section = ({ title, children }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <h2 className={classes.heading}>{title}</h2>
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Section;
