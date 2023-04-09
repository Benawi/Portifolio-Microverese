/* Here I'm grabbing a previous Element,
so I can reference it in a later function, and being able to insert
a new Generated element after this PREVIOUS_NODE.  */
const PREVIOUS_NODE = document.getElementById('headline-container');

/* In here I summarize all the information that can be different in
 all the little rectangules that happens to show all of my Works  :p */
 
 const WORKS_PROPS = [
  {
    'card-title-1': 'This is my fake work number-1',
    techs: ['Ruby on rails', 'css', 'JavScript', 'html'],
    'card-img-1': './css/img/portfolio_snapshoot.png',
  },
  {
    'card-title-2': 'This is my fake work number-2',
    techs: ['Ruby on rails', 'JavScript', 'html'],
    'card-img-2': './css/img/portfolio_snapshoot.png',
  },
  {
    'card-title-3': 'This is my fake work number-3',
    techs: ['css', 'html'],
    'card-img-3': './css/img/portfolio_snapshoot.png',
  },
  {
    'card-title-4': 'This is my fake work number-4',
    techs: ['Ruby on rails'],
    'card-img-4': './css/img/portfolio_snapshoot.png',
  },
  {
    'card-title-5': 'This is my fake work number-5',
    techs: ['Ruby on rails', 'JavScript', 'html'],
    'card-img-5': './css/img/portfolio_snapshoot.png',
  },
  {
    'card-title-6': 'How many fakes works do I have?',
    techs: ['Tears', 'Sorrow', 'Grief'],
    'card-img-6': './css/img/portfolio_snapshoot.png',
  },
];

// creat work card section array 
const CARD_WORK_SECTION = [
  'section',
  ['recent-works-container', 'flex-container-column'],
  'portfolio',
];


/*  Here's a const that stores the instructions for building
    the card_work_container div element!  */

const CARD_WORK_CONTAINER = ['div', ['card-work-container']];

// container that stores all the different card works
const DEFAULT_CARD_WORK_HEADER = [
  ['div', ['recent-works', 'intro-header', 'flex-container-column']],
  ['div', ['intro-header', 'primary-text']],
  [
    'h2',
    [
      'recent-work-text',
      'primary-text',
      'first-color',
      'primary-text-custom-font',
    ],
    'work-title',
  ],
  ['div', ['intro-header', 'indicator']],
];
