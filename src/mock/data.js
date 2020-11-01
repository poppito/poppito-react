import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'H. Overseer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Hello and welcome!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, friend - my name is',
  name: 'Harsh Overseer,',
  subtitle: 'Nice to meet you.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Software Engineer based in Melbourne, Australia. I like building stuff - mobile apps and games mainly - Android and iOS.',
  paragraphTwo: 'I write code in Kotlin (or Java), Swift and on darker days, Javascript. Because I am obsessed with fixing things, sometimes I get lured into DevOps too.',
  paragraphThree: 'I can often be found on twitter where I rant about Android, iOS and DevOps, the current state of Australian Politics or complain about the NBN, Telstra and Metro trains (aussie whinge staples)',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
