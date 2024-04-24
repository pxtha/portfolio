module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Thang Pham',
    // Main Site Title
    title: `Thang Pham | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `To leverage my 4+ years of experience in software engineering and my expertise in developing, testing, and maintaining software applications to efficiently contribute to the growth and success of innovative company.`,
    // Optional: Github account URL
    github: `https://github.com/pxtha`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/pxtha/`,
    // Content of the About Me section
    about: `
     Proficient in both frontend and backend development. Built a full-stack application single-handedly that attracted over 5,000 users. Previously worked in startups and large corporations, demonstrating versatility in adapting to different work environments. 
     Experience in a fast-paced startup environment, thriving in situations that require multitasking and problem-solving skills. 
`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Joon',
        description:
          'Our mission is to connect single Muslims looking for a fulfilling Marriage',
        link: '/blog/joon',
        images: [
          'joon',
        ],
        color: '#E7645F',
      },
      {
        name: 'Wesaidspacesaid',
        description:
          'Create landing page, booking page, and admin page for a coffee station in Vietnam. ',
        link: '/blog/wsss',
        images: [
          'wsss',
        ],
        color: 'rgb(70, 91, 155)',
      },
      {
        name: 'Magic Resume',
        description:
          'A resume builder that helps you create and manage professional resumes in minutes.',
        link: '/blog/magic-resume',
        images: [
          'resume',
        ],
        color: 'rgb(244, 245, 146)',
      },
      {
        name: 'ShopTalk AI',
        description:
          'Helps sellers increase revenue by optimizing the shopping experience of users. Exploiting the potential of AI, bringing sellers closer to technology in the easiest way',
        link: '/blog/shoptalk-ai',
        images: [
          'shoptalk',
        ],
        color: 'rgb(10, 108, 188)',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'CMC Global',
        description: 'As a Senior Software Engineer, I played a pivotal role in the presale team, supporting the sales team in the technical aspect. I contributed to project planning, task allocation, and progress tracking, resulting in on-time project deliveries and meeting user acquisition targets.',
        type: 'Senior Software Engineer, Jan 2024 - Present',
        link: 'https://cmcglobal.vn/',
      },
      {
      name: 'Joon',
      description: 'As a Technical Lead, I successfully led a cross-functional team of 7 members with diverse roles including tester, business analyst, DevOps engineer, and junior developer. From project inception to release, we delivered a high-impact product to a user base of 5,000 individuals.',
      type: 'Technical Lead, Oct 2021 - Present',
      link: 'https://myjoon.app/',
      },
      {
      name: 'Depocket',
      description: 'As a Blockchain Developer, I championed the end-to-end development of blockchain-based features, spanning from conceptualization through testing.',
      type: 'Blockchain Developer, Oct 2020 to Oct 2021',
      link: 'https://www.depocket.com/',
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Senior Developer',
        description:
          'Experienced senior developer with proficiency in multiple tech stacks. In-depth knowledge of modern application development technologies.',
      },
      {
        name: 'Project Management',
        description:
          'Proven ability to lead teams and manage projects effectively using Agile methodologies. Strong communication and interpersonal skills.',
      },
      {
        name: 'Programing Languages',
        description:
          'Golang, ReactJS, Python',
      },
      {
        name: 'Technology & Tools',
        description:
          'Docker, Kubernetes, Strapi, ServiceNow, AWS, DigitalOcean, Grafana, Loki, Datadog, Prometheus',
      },
      {
        name: 'Database Systems',
        description:
          'PostgreSQL, MongoDB, Redis, Elasticsearch, Dgraph',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
