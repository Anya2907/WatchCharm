//  ================= mobileMenuCloseIcon ===================
import mobileMenuClose from '../img/sprite-icons/icons.svg#icon-close';

const mobileMenuElemClose = document.querySelector('.mobileMenuCloseIcon');

function createMarkupMobileMenuCloseIcon() {
  return `<svg class="mobile-menu-close-icon" width="34" height="34">
        <use href="${mobileMenuClose}"></use>
      </svg>`;
}

mobileMenuElemClose.innerHTML = createMarkupMobileMenuCloseIcon();

// ================= mobileMenuIconFacebook =======================
import mobileMenuFacebook from '../img/sprite-icons/icons.svg#icon-facebook';

const mobileMenuElemFacebook = document.querySelector(
  '.mobileMenuIconFacebook'
);

function createMarkupMobileMenuIconFacebook() {
  return `<a class="mobile-menu-list-link-icons" href="">
          <svg class="mobile-list-item-icon" width="18" height="18">
            <use href="${mobileMenuFacebook}"></use>
          </svg>
        </a>`;
}

mobileMenuElemFacebook.innerHTML = createMarkupMobileMenuIconFacebook();

// ================= mobileMenuIconInstagram ======================
import mobileMenuInstagram from '../img/sprite-icons/icons.svg#icon-instagram';

const mobileMenuElemInstagram = document.querySelector(
  '.mobileMenuIconInstagram'
);

function createMarkupMobileMenuIconInstagram() {
  return `<a class="mobile-menu-list-link-icons" href="">
          <svg class="mobile-list-item-icon" width="18" height="18">
            <use href="${mobileMenuInstagram}"></use>
          </svg>
        </a>`;
}

mobileMenuElemInstagram.innerHTML = createMarkupMobileMenuIconInstagram();

// ===================== mobileMenuIconYoutube ======================
import mobileMenuYoutube from '../img/sprite-icons/icons.svg#icon-youtube';

const mobileMenuElemYoutube = document.querySelector('.mobileMenuIconYoutube');

function createMarkupmobileMenuIconYoutube() {
  return `<a class="mobile-menu-list-link-icons" href="">
          <svg class="mobile-list-item-icon" width="18" height="18">
            <use href="${mobileMenuYoutube}"></use>
          </svg>
        </a>`;
}

mobileMenuElemYoutube.innerHTML = createMarkupmobileMenuIconYoutube();
