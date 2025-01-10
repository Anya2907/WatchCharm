import photoDesktop from '../img/hero/photo-desktop.png';
import photoDesktop2x from '../img/hero/photo-desktop@2x.png';

import photoTablet from '../img/hero/photo-tablet.png';
import photoTablet2x from '../img/hero/photo-tablet@2x.png';

import photoMobile from '../img/hero/photo-mobile.png';
import photoMobile2x from '../img/hero/photo-mobile@2x.png';

const heroPictureElem = document.querySelector('.hero-photo');

function createMarkup() {
  return `<source
            srcset="
              ${photoDesktop} 1x,
              ${photoDesktop2x} 2x
            "
            media="(min-width: 1280px)"
          />
          <source
            srcset="
              ${photoTablet} 1x,
              ${photoTablet2x} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${photoMobile} 1x,
              ${photoMobile2x} 2x
            "
            media="(min-width: 375px)"
          />
          <img src="${photoMobile}" alt="" />`;
}

heroPictureElem.innerHTML = createMarkup();
