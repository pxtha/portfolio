import { graphql } from 'gatsby';
import moment from 'moment';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { motion } from 'framer-motion';

const classes = {
  wrapper: 'mt-16 blog-content',
  title: 'mt-16 text-4xl text-gray-900 font-bold',
  date: 'text-gray-600 font-light',
  blogPost: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
};

const pageTransition = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeIn'
    }
  }
};

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  console.log(post.frontmatter)
  return (
    <div className={{ ...classes.blogPost}} style={{ backgroundImage: `url(${post.frontmatter.background})` }}>
     <Layout>
        <Header metadata={data.site.siteMetadata} />
        <SEO title={post.frontmatter.title} />
        <motion.h1 
          className={classes.title} 
          initial="hidden" 
          animate="show" 
          variants={pageTransition}
        >
          {post.frontmatter.title}
        </motion.h1>
        <motion.p 
          className={classes.date} 
          initial="hidden" 
          animate="show" 
          variants={pageTransition}
        >
          Posted on {moment(post.frontmatter.date).format('MMMM D, YYYY')}
        </motion.p>
        <motion.div
          className={classes.wrapper}
          dangerouslySetInnerHTML={{ __html: post.html }}
          initial="hidden" 
          animate="show" 
          variants={pageTransition}
        />
      </Layout>
    </div>

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
        background
      }
    }
  }
`;
