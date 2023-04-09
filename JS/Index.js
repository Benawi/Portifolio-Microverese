const MOBILE_DROP_DOWN_BTN = document.getElementById('menu-btn');
const MOBILE_EXPANDED_MENU = document.getElementById('mobile-expanded-menu');
const MENU_NODES = [MOBILE_DROP_DOWN_BTN, MOBILE_EXPANDED_MENU];

// Event listeners to open and close the mobile menu dropdown

for (let i = 0; i < MENU_NODES.length; i += 1) {
  MENU_NODES[i].addEventListener('click', () => {
    document.getElementById('mobile-expanded-menu').classList.toggle('disabled');
    document.querySelector('html').classList.toggle('no-overflow-y');
  });
}