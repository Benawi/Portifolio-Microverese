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
/*

   This is a companion of all multi-dimensional arrays in this house,
   it defines the order that the elements should be nested and all the parent/child relations

*/

const DEFAULT_CARD_WORK_HEADER_ORDER = [0, 1, 2, 1];

/*
  Array defined in a way that later on a element will be build with
  the correct child elements, classNames and Ids

*/
const DEFAULT_CARD_WORK = [
  ['div', ['card-work', 'flex-container-column', 'card'], 'card-work'],
  ['img', ['card-img', 'card-img'], 'card-img'],
  ['div', ['card-text', 'flex-container-column', 'card-text'], 'card-text'],
  ['div', ['project-title']],
  ['h2', ['project-title-custom-font', 'card-title'], 'card-title'],
  ['ul', ['card-tags', 'flex-container-row'], 'card-tags'],
  [
    'button',
    ['card-button', 'custom-button', 'default-custom-font'],
    'card-button',
    'see-project',
    'See Project',
    'See Project',
  ],
];
// This const stores the order that the elements should be nested when builded
const DEFAULT_CARD_WORK_ORDER = [0, 1, 1, 2, 3, 2, 3, 4, 2];
// This const stores the basic html content of the modal popup window
const POPUP_MODAL = [
  ['div', ['recent-works-popup-out-container']],
  ['div', ['recent-works-popup-in-container']],
  [
    'img',
    ['popup-close-icon'],
    'popup-close-button',
    '',
    '',
    '',
    'removeModal()',
  ],
  ['div', ['recent-works-detailed', 'flex-container-column']],
  ['img', ['popup-work-img', 'mb-12']],
  [
    'h2',
    [
      'popup-header',
      'expanded-menu-item',
      'project-title-custom-font',
      'mb-12',
    ],
    'popup-title',
  ],
  ['ul', ['popup-techs', 'flex-container-row', 'mb-12']],
  ['p', ['popup-p-font', 'default-custom-font', 'mb-12'], 'popup-text'],
  ['div', ['popup-btn-container', 'flex-container-row']],
  [
    'button',
    ['custom-button', 'popup-btn-font', 'flex-container-row'],
    'popup-live',
  ],
  [
    'button',
    ['custom-button', 'popup-btn-font', 'flex-container-row'],
    'popup-source',
  ],
];

// This const stores the order that the elements should be nested when builded
const POPUP_MODAL_ORDER = [0, 1, 2, 2, 3, 3, 3, 3, 3, 4, 4];
/*
  General Functionality to create an element, add classNames,
  add Id and append as element after another element;

*/

// Creates and element
function generateElement(element) {
  return document.createElement(element);
}
// add class names passed as parameters to the element passed as a parameter
function addElementClassName(element, name) {
  name.forEach((className) => {
    element.classList.add(className);
  });
}

// add id to the element passed as a parameter
function addElementId(element, id, iterationPosFix) {
  if (id) {
    element.setAttribute('id', id + iterationPosFix);
  }
}
// add type to the element passed as a parameter
function addElementType(element, type) {
  if (type) {
    element.setAttribute('type', type);
  }
}
// add name to the element passed as a parameter
function addElementName(element, name) {
  if (name) {
    element.setAttribute('name', name);
  }
}
// add value to the element passed as a parameter
function addElementValue(element, value) {
  if (value) {
    element.setAttribute('value', value);
  }
}
// add onclick to the element passed as a parameter
function addOnClickValue(element, value) {
  if (value) {
    element.setAttribute('onclick', value);
  }
}
// append the element after the previous element
function appendAfterElement(newElement, referenceElement) {
  if (referenceElement.nextSibling) {
    referenceElement.parentNode.insertBefore(
      newElement,
      referenceElement.nextSibling,
    );
  } else {
    referenceElement.parentNode.appendChild(newElement);
  }
}
// This functions takes one array parameter and build one element
function buildElement(instructions, iterationPosFix = '') {
  const newElement = generateElement(instructions[0]);
  addElementClassName(newElement, instructions[1]);
  addElementId(newElement, instructions[2], iterationPosFix);
  addElementType(newElement, instructions[3]);
  addElementName(newElement, instructions[4]);
  addElementValue(newElement, instructions[5]);
  addOnClickValue(newElement, instructions[6]);
  return newElement;
}