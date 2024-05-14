// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'propardhu', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 10, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['propardhu/objectdetection', 'propardhu/nodeBackend3-2', 'propardhu/springBoot'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: 'Partha Sai',
    description: 'portfolio',
    imageURL: '',
  },
  social: {
    linkedin: 'guttikonda-pardhu',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'guttikondaparthasai',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://guttikondaparthasai.info',
    phone: '',
    email: 'guttikondaparthasai@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Git',
    'AWS',
    'Docker',
    'Circle CI',
    'Vue.JS',
    'swift',
    'springBoot JAVA',
    'C++',
    'pytorch',
    'CUDA',
    'HPC',
    'Linux',
    'MLX',
    'numpy',
    'MongoDB',
    'S3 Buckets',
    'postgresql'
  ],
  experiences: [
    {
      company: 'Capital One',
      position: 'Full Stack Software Engineer',
      from: '2',
      to: 'years',
      companyLink: 'https://capitalOne.com',
    },
    {
      company: 'UTA Health Data Science Lab',
      position: 'Full Stack Software Engineer',
      from: '1.5',
      to: 'years',
      companyLink: 'https://luberlab.org',
    },
    {
      company: 'Vantashala',
      position: 'Full Stack Software Engineer',
      from: '2',
      to: 'years',
      companyLink: 'https://vantashala.com',
    },
    {
      company: 'A4Data',
      position: 'Software Development Engineer in Test',
      from: '4',
      to: 'Months',
      companyLink: 'https://a4datainc.com/',
    },
  ],
  certifications: [
    {
      name: 'AWS Cloud practitioner',
      body: 'Used AWS CloudFormation to automate infrastructure provisioning and management',
      year: '',
      link: 'https://www.credly.com/badges/acbc9c0f-7670-4afa-b340-b06e1e40d6fd/linked_in_profile',
    },
    {
      name: 'NPTEL Certification - C, C++ and JAVA',
      body: 'Earned silver medal for securing top 5% in competitive coding in Java.',
      year: '',
      link: 'https://archive.nptel.ac.in/LocalChapter/statistics/1548/Jan-Apr-2019.html',
    },
    {
      name: 'Chartwell Scholarship',
      body: 'Only student to receive Chartwell Scholarship for 3 consecutive semesters from UT Arlington for exceptional research and problem-solving abilities as a student employee',
      year: '',
      link: 'https://www.uta.edu/administration/fao/scholarships',
    },
    {
      name: 'PRESENTATION TO INDRA NOOYI',
      body: 'Recognized by Nooyi’s for exceptional contributions to SpatialVisVR',
      year: '',
      link: 'https://arxiv.org/html/2401.02882v1',
    },
  ],
  educations: [
    {
      institution: 'University of texas at Arlington',
      degree: 'Mastes in Computer Science',
      from: 'Graduated GPA',
      to: '3.9/4',
    },
    {
      institution: 'Sreenidhi Institute of Science & Technology',
      degree: 'Undergrade',
      from: 'Graduated GPA',
      to: '3.8/4',
    },
  ],
  publications: [
    {
      title: 'Adversarial Attack Against a Multimodal Vision Language Model',
      conferenceName: 'ISBI 2024',
      journalName: '',
      authors: 'Poojitha Thota, Jai Prakash Veerla, Partha Sai Guttikonda, Mohammad S. Nasr, Shirin Nilizadeh, Jacob M. Luber',
      link: 'https://arxiv.org/abs/2401.02565',
      description:
        'Demonstration of an Adversarial Attack Against a Multimodal Vision Language Model for Pathology Imaging',
    },
    {
      title: 'SpatialVisVR',
      conferenceName: '',
      journalName: 'ISBI 2023',
      authors: 'Jai Prakash Veerla, Partha Sai Guttikonda, Amir Hajighasemi, Jillur Rahman Saurav, Aarti Darji, Cody T. Reynolds, Mohamed Mohamed, Mohammad S. Nasr, Helen H. Shang, Jacob M. Luber',
      link: 'https://arxiv.org/abs/2401.02882',
      description:
        'An Immersive, Multiplexed Medical Image Viewer With Contextual Similar-Patient Search',
    },
    {
      title: 'Real-Time Diagnostic Integrity Meets Efficiency',
      conferenceName: '',
      journalName: '',
      authors: 'Neel R Vora, Amir Hajighasemi, Cody T. Reynolds, Amirmohammad Radmehr, Mohamed Mohamed, Jillur Rahman Saurav, Abdul Aziz, Jai Prakash Veerla, Mohammad S Nasr, Hayden Lotspeich, Partha Sai Guttikonda, Thuong Pham, Aarti Darji, Parisa Boodaghi Malidarreh, Helen H Shang, Jay Harvey, Kan Ding, Phuc Nguyen, Jacob M Luber',
      link: 'https://arxiv.org/abs/2312.12587',
      description:
        'A Novel Platform-Agnostic Architecture for Physiological Signal Compression',
    },
    {
      title: 'Vision-and-Language Transformer using Patch Projection',
      conferenceName: '',
      journalName: 'Indian Journal of Natural Sciences',
      authors: 'Partha Sai Guttikonda',
      link: 'https://arxiv.org/abs/2312.12587',
      description:
        'The performance of Vision-and-Language Pre-training (VLP) on several coupled vision-and-language downstream tasks has been demonstrated.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'guttikondaparthasai', // to hide blog section, keep it empty
    limit: 10, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-EGR7E28T14', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `By Pardhu ❤️`,

  enablePWA: false,
};

export default CONFIG;
