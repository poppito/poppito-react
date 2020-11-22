import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'H. Overseer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Hello and welcome!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello - my name is',
  name: 'Harsh Overseer',
  subtitle: 'Nice to meet you.',
  cta: 'More.',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Software Engineer based in Melbourne, Australia. I like building stuff - mobile apps and games mainly, natively on Android and iOS.',
  paragraphTwo: 'I write code in Kotlin (or Java), Swift and on darker days, Javascript. Because I am obsessed with fixing things, sometimes I get lured into DevOps too.',
  linkedin: 'https://linkedin.com/in/hoverseer',
  blog: '/blog', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'paradox.png',
    title: 'Particle Paradox',
    info: 'Particle Paradox is a game about a Particle\'s journey in multiple universes.',
    info2: 'Available on both Android and iOS',
    url: 'https://apps.apple.com/au/app/particle-paradox/id1536898085#?platform=iphone',
    repo: 'https://play.google.com/store/apps/details?id=io.embry.crowley&hl=en_AU&gl=US', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'huxtable.png',
    title: 'The Huxtable Saga',
    info: 'A 2d side scrolling adventure game with plenty of puzzles!',
    info2: 'Available on both Android and iOS',
    url: 'https://apps.apple.com/au/app/the-huxtable-saga/id1498415989#?platform=iphone',
    repo: 'https://play.google.com/store/apps/details?id=io.embry.huxtable&hl=en_AU&gl=US', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'strayamate.png',
    title: 'Aussie slang, pronunciation sounds and places',
    info: 'The #1 Aussie slang app on Android and iOS',
    info2: 'Explore Aussie slang with recorded pronunciations, a Slangman game and more. On iOS it also has a game on Apple Watch',
    url: 'https://apps.apple.com/au/app/strayamate-aussie-slang-more/id1363054907#?platform=iphone',
    repo: 'https://play.google.com/store/apps/details?id=strayanslangapp.noni.com.strayanslangapp&hl=en_AU&gl=US', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'turntapp.png',
    title: 'TurntApp',
    info: 'Convert your Live Photos and short videos into reversible videos with video filtering',
    info2: 'iOS only',
    url: 'https://apps.apple.com/au/app/turnt-reversible-tiny-videos/id1434952320#?platform=iphone',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hh.png',
    title: 'Handwash Hygiene',
    info: 'An action on Google - Just go to any Google Assitant enabled device and say \"Ok Google, Talk to Handwash Hygiene\"',
    info2: 'Available on Google Home/Home mini and all Android devices - anything that run Google Assistant.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Questions? Comments? Compliments? Wanna get in touch?',
  btn: 'Say hello',
  email: 'harsh@embry.io',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/overjeer',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://instagram.com/embryio',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/hoverseer',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/poppito',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
