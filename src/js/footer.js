// =========== footerIconFacebook =========
import footerFacebook from '../img/sprite-icons/icons.svg#icon-facebook';

const footerElemIconFacebook = document.querySelector('.footerIconFacebook');

function createMarkupFooterIconFacebook() {
  return ` <a class="list-link-icons footer-list-link-icons" href="">
                  <svg class="list-item-icon" width="18" height="18">
                    <use
                      href="${footerFacebook}"
                    ></use>
                  </svg>
                </a>`;
}

footerElemIconFacebook.innerHTML = createMarkupFooterIconFacebook();

// =========== footerIconInstagram ===============
import footerInstagram from '../img/sprite-icons/icons.svg#icon-instagram';

const footerElemIconInstagram = document.querySelector('.footerIconInstagram');

function createMarkupfooterIconInstagram() {
  return `<a class="list-link-icons footer-list-link-icons" href="">
                  <svg class="list-item-icon" width="18" height="18">
                    <use
                      href="${footerInstagram}"
                    ></use>
                  </svg>
                </a>`;
}

footerElemIconInstagram.innerHTML = createMarkupfooterIconInstagram();

// ============ footerIconYoutube ==================
import footerYoutube from '../img/sprite-icons/icons.svg#icon-youtube';

const footerElemFooterIconYoutube =
  document.querySelector('.footerIconYoutube');

function createMarkupFooterIconYoutube() {
  return ` <a class="list-link-icons footer-list-link-icons" href="">
                  <svg class="list-item-icon" width="18" height="18">
                    <use
                      href="${footerYoutube}"
                    ></use>
                  </svg>
                </a>`;
}

footerElemFooterIconYoutube.innerHTML = createMarkupFooterIconYoutube();
