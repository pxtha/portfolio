import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  const parts = about.split("**");

  return (
    <Section title="Summary">
      <div className="mb-6" style={{ whiteSpace: 'pre-line' }}>
      <p>
          {parts.map((part, index) => 
            // Apply bold style to every second part
            index % 2 === 0 ? part : <strong>{part}</strong>
          )}
        </p>
      </div>
    </Section>
  );
};

export default SectionAbout;
