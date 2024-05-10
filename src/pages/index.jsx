import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionContact from '../components/section-contact';
import SectionExperience from '../components/section-experience';
import SectionProjects from '../components/section-projects';
import SectionSkills from '../components/section-skills';
import SEO from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const experience = get(data, 'site.siteMetadata.experience', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} about={about}/>
      {projects && projects.length && <SectionProjects projects={projects} />}
      {skills && skills.length && <SectionSkills skills={skills} />}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
      )}
      <SectionContact metadata={data.site.siteMetadata} />
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        email
        phone
        address
        title
        description
        about
        author
        github
        linkedin
        projects {
          name
          description
          link
          color
          images
        }
        experience {
          name
          description
          link
          type
        }
        skills {
          name
          description
        }
      }
    }
  }
`;
