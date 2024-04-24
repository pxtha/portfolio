import { graphql } from 'gatsby';
import moment from 'moment';
import React from 'react';
import { motion } from 'framer-motion';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const classes = {
  wrapper: 'mt-16 blog-content',
  title: 'mt-16 text-4xl text-gray-900 font-bold',
  date: 'text-gray-800 font-light',
  background: 'p-8 rounded-lg shadow-lg bg-white mt-8 mb-8 font-light',
};

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
    <Header metadata={data.site.siteMetadata} />
    <SEO title={post.frontmatter.title} />
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={classes.title}>{post.frontmatter.title}</h1>
      <p className={classes.date}>
        Posted on {moment(post.frontmatter.date).format('MMMM D, YYYY')}
      </p>
      <div
        className={classes.wrapper}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </motion.div>
  </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        color
      }
    }
  }
`;
