// ================ IconFacebook =============
import iconFacebook from '../img/sprite-icons/icons.svg#icon-facebook';

const headerElemIconFacebook = document.querySelector('.headerIconFacebook');

function createMarkupIconFacebook() {
  return `<a class="list-link-icons menu-list-link-icons" href="">
            <svg class="list-item-icon" width="20" height="20">
              <use href="${iconFacebook}"></use>
            </svg>
          </a>`;
}

headerElemIconFacebook.innerHTML = createMarkupIconFacebook();

// ================ IconInstagram ==================
import iconInstagram from '../img/sprite-icons/icons.svg#icon-instagram';

const headerIconInstagram = document.querySelector('.headerIconInstagram');

function reateMarkupIconInstagram() {
  return `<a class="list-link-icons menu-list-link-icons" href="">
            <svg class="list-item-icon" width="20" height="20">
              <use href="${iconInstagram}"></use>
            </svg>
          </a>`;
}

headerIconInstagram.innerHTML = reateMarkupIconInstagram();

// =============== IconYoutube ====================
import iconYoutube from '../img/sprite-icons/icons.svg#icon-youtube';

const headerIconYoutube = document.querySelector('.headerIconYoutube');

function createMarkupIconYoutube() {
  return `<a class="list-link-icons menu-list-link-icons" href="">
            <svg class="list-item-icon" width="20" height="20">
              <use href="${iconYoutube}"></use>
            </svg>
          </a>`;
}

headerIconYoutube.innerHTML = createMarkupIconYoutube();

// ============== Burger =====================
import headerIconBurger from '../img/sprite-icons/icons.svg#icon-menu-burger';

const headerBurger = document.querySelector('.headerBurger');

function creareMarkupBurger() {
  return `<svg class="menu-burger-icon" width="34" height="34">
          <use href="${headerIconBurger}"></use>
        </svg>`;
}

headerBurger.innerHTML = creareMarkupBurger();
