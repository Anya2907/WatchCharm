import icons from '../img/sprite-icons/icons.svg';

// ================ IconFacebook header =============
const headerElemIconFacebook = document.querySelector('.headerIconFacebook');

function createMarkupIconFacebook() {
  return `<a class="list-link-icons menu-list-link-icons" href="">
            <svg class="list-item-icon" width="20" height="20">
              <use href="${icons}#icon-facebook"></use>
            </svg>
          </a>`;
}

headerElemIconFacebook.innerHTML = createMarkupIconFacebook();

// ================ IconInstagram header ==================
const headerIconInstagram = document.querySelector('.headerIconInstagram');

function reateMarkupIconInstagram() {
  return `<a class="list-link-icons menu-list-link-icons" href="">
            <svg class="list-item-icon" width="20" height="20">
              <use href="${icons}#icon-instagram"></use>
            </svg>
          </a>`;
}

headerIconInstagram.innerHTML = reateMarkupIconInstagram();

// =============== IconYoutube header ====================
const headerIconYoutube = document.querySelector('.headerIconYoutube');

function createMarkupIconYoutube() {
  return `<a class="list-link-icons menu-list-link-icons" href="">
            <svg class="list-item-icon" width="20" height="20">
              <use href="${icons}#icon-youtube"></use>
            </svg>
          </a>`;
}

headerIconYoutube.innerHTML = createMarkupIconYoutube();

// ============== Burger header =====================
const headerBurger = document.querySelector('.headerBurger');

function creareMarkupBurger() {
  return `<svg class="menu-burger-icon" width="34" height="34">
          <use href="${icons}#icon-menu-burger"></use>
        </svg>`;
}

headerBurger.innerHTML = creareMarkupBurger();

// =========== IconFacebook footer =========
const footerElemIconFacebook = document.querySelector('.footerIconFacebook');

function createMarkupFooterIconFacebook() {
  return `<a class="list-link-icons footer-list-link-icons" href="">
                  <svg class="list-item-icon" width="18" height="18">
                    <use
                      href="${icons}#icon-facebook"
                    ></use>
                  </svg>
                </a>`;
}

footerElemIconFacebook.innerHTML = createMarkupFooterIconFacebook();

// =========== IconInstagram footer ===============
const footerElemIconInstagram = document.querySelector('.footerIconInstagram');

function createMarkupfooterIconInstagram() {
  return `<a class="list-link-icons footer-list-link-icons" href="">
                  <svg class="list-item-icon" width="18" height="18">
                    <use
                      href="${icons}#icon-instagram"
                    ></use>
                  </svg>
                </a>`;
}

footerElemIconInstagram.innerHTML = createMarkupfooterIconInstagram();

// ============ IconYoutube footer ==================
const footerElemFooterIconYoutube =
  document.querySelector('.footerIconYoutube');

function createMarkupFooterIconYoutube() {
  return `<a class="list-link-icons footer-list-link-icons" href="">
                  <svg class="list-item-icon" width="18" height="18">
                    <use
                      href="${icons}#icon-youtube"
                    ></use>
                  </svg>
                </a>`;
}

footerElemFooterIconYoutube.innerHTML = createMarkupFooterIconYoutube();

//  ================= CloseIcon mobileMenu===================
const mobileMenuElemClose = document.querySelector('.mobileMenuCloseIcon');

function createMarkupMobileMenuCloseIcon() {
  return `<svg class="mobile-menu-close-icon" width="34" height="34">
        <use href="${icons}#icon-close"></use>
      </svg>`;
}

mobileMenuElemClose.innerHTML = createMarkupMobileMenuCloseIcon();

// ================= IconFacebook mobileMenu =======================
const mobileMenuElemFacebook = document.querySelector(
  '.mobileMenuIconFacebook'
);

function createMarkupMobileMenuIconFacebook() {
  return `<a class="mobile-menu-list-link-icons" href="">
          <svg class="mobile-list-item-icon" width="18" height="18">
            <use href="${icons}#icon-facebook"></use>
          </svg>
        </a>`;
}

mobileMenuElemFacebook.innerHTML = createMarkupMobileMenuIconFacebook();

// ================= IconInstagram mobileMenu ======================
const mobileMenuElemInstagram = document.querySelector(
  '.mobileMenuIconInstagram'
);

function createMarkupMobileMenuIconInstagram() {
  return `<a class="mobile-menu-list-link-icons" href="">
          <svg class="mobile-list-item-icon" width="18" height="18">
            <use href="${icons}#icon-instagram"></use>
          </svg>
        </a>`;
}

mobileMenuElemInstagram.innerHTML = createMarkupMobileMenuIconInstagram();

// ===================== IconYoutube mobileMenu ======================
const mobileMenuElemYoutube = document.querySelector('.mobileMenuIconYoutube');

function createMarkupmobileMenuIconYoutube() {
  return `<a class="mobile-menu-list-link-icons" href="">
          <svg class="mobile-list-item-icon" width="18" height="18">
            <use href="${icons}#icon-youtube"></use>
          </svg>
        </a>`;
}

mobileMenuElemYoutube.innerHTML = createMarkupmobileMenuIconYoutube();
