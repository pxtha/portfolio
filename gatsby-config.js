module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Thang Pham',
    // Main Site Title
    title: `Thang Pham | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `Hey there! I'm a developer from Vietnam. I love building and growing applications for all sorts of industries. Always learning, always growing!`,
    // Optional: Github account URL
    github: `https://github.com/pxtha`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/pxtha/`,
    // Content of the About Me section
    about: `Hello! I'm a Software Engineer with nearly 4 years of professional experience under my belt. I have a deep passion for software development and harbor aspirations of establishing my own product in the future. I'm always ready to take on new challenges and grow both personally and professionally.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Joon',
        description:'Our mission is to connect single Muslims looking for a fulfilling Marriage',
        link: '/blog/joon',
        images: ['https://i.myjoon.app/0x0,sc,s/joon-media/bca0d162-6fc3-4a23-8939-64c5906c80dc/image/91275444-3167-40fd-84e4-337d4e7b4b27.jpg'],
        color: '#DEECF2'
      },
      {
        name: 'Wesaidspacesaid',
        description: 'Create landing page, booking page, and admin page for a coffee station in Vietnam. ',
        link: '/blog/wsss',
        images: ['https://nick.computer/static/media/realas-lg.d9bab4ac14f036998f99.jpg'],
        color: 'rgb(70, 91, 155)'
      },
      {
        name: 'Magic Resume',
        description:'A resume builder that helps you create and manage professional resumes in minutes.',
        link: '/blog/magic-resume',
        images: ['https://nick.computer/static/media/fenton-lg.aae58db69fffa6b8d1de.jpg'],
        color: 'rgb(244, 245, 146)'
      },
      {
        name: 'Style Simple',
        description: 'The platform offers a seamless shopping experience across web and mobile applications, built using the headless CMS. ',
        link: '/blog/style-simple',
        images: ['https://nick.computer/static/media/br-lg.0231d6c2ec5ff69678d4.jpg'],
        color: 'rgb(10, 108, 188)'
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Joon',
        description: 'Technical Lead, Oct 2021 - Present',
        type: 'Remote, Part-time',
        link: 'https://myjoon.app/',
      },
      {
        name: 'CMC Global',
        description: 'Senior Software Engineer, Dec 2023 - Present',
        type: 'On-site, Fulltime',
        link: 'https://cmcglobal.vn/',
      },
      {
        name: ' FPT Software',
        description: 'Backend Developer, Oct 2020 - Oct 2021 · 1yr',
        type: 'On-site, Fulltime',
        link: 'https://fptsoftware.com/',
      },
      {
        name: 'TMA Solutions',
        description: 'Backend Developer, Jun 2019 - Oct 2020 · 1yr',
        type: 'On-site, Fulltime',
        link: 'https://www.tmasolutions.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Senior Developer',
        description: 'Experienced senior developer with proficiency in multiple tech stacks. In-depth knowledge of modern application development technologies.',
      },
      {
        name: 'Leadership',
        description: 'Proven ability to lead teams and manage projects effectively.',
      },
      {
        name: 'Problem Solving',
        description: 'Strong problem-solving skills with a knack for finding creative solutions to complex technical issues.',
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
