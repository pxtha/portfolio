import React from 'react';
import { motion } from 'framer-motion';

import Section from '../section';
import SummaryItem from '../summary-item';

const pageTransition = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 1, delay: 0.1 } },
  exit: { opacity: 0, transition: { duration: 1 } },
};
const BlogPosts = ({ posts }) => {
  return (
    <Section title="All Blog Posts">
      {posts.map((post) => (
        <SummaryItem
          key={post.node.fields.slug}
          name={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          link={post.node.fields.slug}
          internal
        />
      ))}
    </Section>
  );
};

export default BlogPosts;
