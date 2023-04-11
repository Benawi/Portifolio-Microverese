/* Here I'm grabbing a previous Element,
so I can reference it in a later function, and being able to insert
a new Generated element after this PREVIOUS_NODE.  */
const PREVIOUS_NODE = document.getElementById('headline-container');

/* In here I summarize all the information that can be different in
 all the little rectangules that happens to show all of my Works  :p */
 
 const WORKS_PROPS = [
  {
    'card-title-1': 'Projec demo - 1',
    techs: ['Ruby on rails', 'css', 'JavScript', 'html'],
    'card-img-1': './css/img/portfolio_snapshoot.png',
  },
  {
    'card-title-2': 'Projec demo - 2',
    techs: ['Ruby on rails', 'JavScript', 'html'],
    'card-img-2': './css/img/portfolio_snapshoot.png',
  },
  {
    'card-title-3': 'Projec demo - 3',
    techs: ['css', 'html'],
    'card-img-3': './css/img/portfolio_snapshoot.png',
  },
  {
    'card-title-4': 'Projec demo - 4',
    techs: ['Ruby on rails'],
    'card-img-4': './css/img/portfolio_snapshoot.png',
  },
  {
    'card-title-5': 'Projec demo - 5',
    techs: ['Ruby on rails', 'JavScript', 'html'],
    'card-img-5': './css/img/portfolio_snapshoot.png',
  },
  {
    'card-title-6': 'Projec demo - 6',
    techs: ['Ruby on rails', 'JavScript', 'html'],
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

/*
  Function that builds all elements in an two dimensional array of
  elements/elements build instruction

*/
function buildAllElements(instructions, iterationPosFix, techs) {
  // Cloning the instructions array 
  const copyOfInstructions = [...instructions];

  // checking if this argument is valid
  if (iterationPosFix) {
    iterationPosFix = `-${iterationPosFix}`;
  } else {
    iterationPosFix = '';
  }
  if (techs) {
    for (let i = 0; i < techs.length; i += 1) {
      const li = ['li', ['card-tag']];
      const h3 = ['h3', ['custom-tags-font', 'default-custom-font']];
      copyOfInstructions.splice(6, 0, li);
      copyOfInstructions.splice(7, 0, h3);
    }
  }

  const AllElements = [];

  // buildingSingle Elements and pushing they to an array of html fresh new elements;
  copyOfInstructions.forEach((instruction) => {
    AllElements.push(buildElement(instruction, iterationPosFix));
  });

  return AllElements;
}
// Plays a part in the logic of how the elements should be nested

function findDeepestChild(elementOrder) {
  let highestChild = 0;
  let index = 0;

  for (let i = 0; i < elementOrder.length; i += 1) {
    if (highestChild < elementOrder[i]) {
      highestChild = elementOrder[i];
      index = i;
    }
  }

  return index;
}

/*

   managed to get all elements nested correctly, but a requirement
  is needed in the order that they're declared in the multi-dimensional
  arrays in the top of this document they must always start with the
  parent of all subsequent elements with a order value of 0;

*/

function appendInOrder(arrayOfElements, order, techs) {
  const orderCopy = [...order];

  if (techs) {
    for (let i = 1; i < techs.length; i += 1) {
      orderCopy.splice(6, 0, 3);
      orderCopy.splice(7, 0, 4);
    }
  }

  let indexes = [findDeepestChild(orderCopy)];
  let highestChild = orderCopy[indexes[0]];
  let currentElements = [arrayOfElements[indexes[0]]];
  let parentElement;

  while (highestChild !== 0) {
    for (let i = indexes[0] - 1; i >= 0; i -= 1) {
      if (orderCopy[i] < highestChild) {
        parentElement = arrayOfElements[i];
        break;
      } else if (orderCopy[i] === highestChild) {
        currentElements.push(arrayOfElements[i]);
        indexes.push(i);
      }
    }

    orderCopy.splice(indexes[0], 1);

    for (let i = 0; i < currentElements.length; i += 1) {
      parentElement.appendChild(currentElements[i]);
    }

    indexes.forEach((index) => {
      arrayOfElements.splice(index, 1);
    });

    indexes = [findDeepestChild(orderCopy)];
    highestChild = orderCopy[indexes[0]];
    currentElements = [arrayOfElements[indexes[0]]];
  }

  return parentElement;
}
// Building the entire cardworkcontainer and nesting the childs to it
function buildCardWorkContainer(propsRules) {
  const cardWorkContainer = buildElement(CARD_WORK_CONTAINER);

  const childElements = [];
  let iteration = 1;

  propsRules.forEach((objRule) => {
    const child = appendInOrder(
      buildAllElements(DEFAULT_CARD_WORK, iteration, objRule.techs),
      DEFAULT_CARD_WORK_ORDER,
      objRule.techs,
    );

    iteration += 1;
    const titleKey = Object.keys(objRule)[0];
    const imgKey = Object.keys(objRule)[2];

    const titleKeyId = `#${titleKey}`;
    const imgKeyId = `#${imgKey}`;

    const titleChild = child.querySelector(titleKeyId);
    const imgChild = child.querySelector(imgKeyId);
    const liH3Items = child.querySelectorAll('.custom-tags-font');
    const buttonItem = child.querySelector('.card-button');

    for (let i = 0; i < objRule.techs.length; i += 1) {
      liH3Items[i].textContent = objRule.techs[i];
    }

    buttonItem.textContent = 'See Project';

    titleChild.textContent = objRule[titleKey];
    imgChild.setAttribute('src', objRule[imgKey]);

    childElements.push(child);
  });

  childElements.forEach((child) => {
    cardWorkContainer.appendChild(child);
  });

  return cardWorkContainer;
}

// building entire cardWorkHeader and appending it in correct order
function buildCardWorkHeader() {
  const child = appendInOrder(
    buildAllElements(DEFAULT_CARD_WORK_HEADER),
    DEFAULT_CARD_WORK_HEADER_ORDER,
  );

  const titleChild = child.querySelector('#work-title');
  titleChild.textContent = 'My Recent Works';

  return child;
}
// building the entire WorkSection and appending it's two childs, isn't that beautiful?
function buildCardWorkSection() {
  const cardWorkSection = buildElement(CARD_WORK_SECTION);

  const firstChild = buildCardWorkHeader();
  const secondChild = buildCardWorkContainer(WORKS_PROPS);

  cardWorkSection.appendChild(firstChild);
  cardWorkSection.appendChild(secondChild);

  return cardWorkSection;
}
//get Parent buttton
function getButtonParent(button, parentId) {
  let parent = button.parentElement;

  while (!parent.id.includes(parentId)) {
    parent = parent.parentElement;
  }

  return parent;
}
// build popup model 
function buildModalPopUp(button, title, Img) {
  const popupModal = appendInOrder(
    buildAllElements(POPUP_MODAL),
    POPUP_MODAL_ORDER,
  );

  const cardWorkDiv = getButtonParent(button, 'card-work');
  const liItems = cardWorkDiv.querySelectorAll('.card-tag');

  const modalUlElem = popupModal.querySelector('.popup-techs');
  const modalTitleElem = popupModal.querySelector('#popup-title');
  const modalImgElem = popupModal.querySelector('.popup-work-img');
  const modalCloseBtn = popupModal.querySelector('#popup-close-button');
  const popuplive = popupModal.querySelector('#popup-live');
  const popupsource = popupModal.querySelector('#popup-source');
  const modalText = popupModal.querySelector('#popup-text');

  for (let i = 0; i < liItems.length; i += 1) {
    const liClone = liItems[i].cloneNode(true);

    liClone.firstChild.setAttribute('class',
      'popup-tags-font default-custom-font');
    liClone.setAttribute('class', 'popup-tag');
    modalUlElem.append(liClone);
  }

  modalTitleElem.textContent = title.innerText;
  modalImgElem.setAttribute('src', Img.getAttribute('src'));

  popuplive.innerHTML = 'See Live'
    + '<i>'
    + '<img class="popup-button-icon" src="./css/img/detailed_works/icon_seelive.svg" alt="">'
    + '</i>';
  popupsource.innerHTML = 'See Source'
    + '<i>'
    + '<img class="popup-button-icon" src="./css/img/detailed_works/icon_source.svg" alt="">'
    + '</i>';

  modalText.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea";

  if (window.innerWidth >= 500) {
    modalCloseBtn.setAttribute(
      'src',
      './css/img/detailed_works/icon_close_desk.svg',
    );
    modalImgElem.setAttribute('src', './css/img/portfolio_snapshoot_desk.png');
  } else {
    modalCloseBtn.setAttribute(
      'src',
      './css/img/detailed_works/icon_close.svg',
    );
    modalImgElem.setAttribute('src', Img.getAttribute('src'));
  }

  return popupModal;
}
// Add remove modal button 
function removeModal(lintersright) {
  if (!lintersright) {
    document.querySelector('html').classList.toggle('no-overflow-y');
    const modal = document.querySelector('.recent-works-popup-out-container');
    modal.parentElement.removeChild(modal);
  }
}
//  add close model 
function closeModal() {
  const button = document.getElementById('popup-close-btn');
  if (button) {
    button.setAttribute('onclick', 'removeModal()');
  }
  removeModal(true);
}
// Add event listner button 
function buttonsEventListener() {
  const buttons = document.querySelectorAll('[id*="button"]');
  const titles = document.querySelectorAll('[id^="card-title"]');
  const imgs = document.querySelectorAll('[id^="card-img"]');
  const cardWorkSection = document.getElementById('portfolio');

  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', () => {
      const modal = buildModalPopUp(buttons[i], titles[i], imgs[i]);
      cardWorkSection.append(modal);
      document.querySelector('html').classList.toggle('no-overflow-y');
      closeModal();
    });
  }
}

appendAfterElement(buildCardWorkSection(), PREVIOUS_NODE);

buttonsEventListener();
