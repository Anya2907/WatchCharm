import watchDesktop from '../img/about-us/watch-desktop.jpg';
import watchDesktop2x from '../img/about-us/watch-desktop@2x.jpg';

import watchTablet from '../img/about-us/watch-tablet.jpg';
import watchTablet2x from '../img/about-us/watch-tablet@2x.jpg';

import watchMobile from '../img/about-us/watch-mobile.jpg';
import watchMobile2x from '../img/about-us/watch-mobile@2x.jpg';

const aboutPictureElem = document.querySelector('.about-us-watch');

function createMarkup() {
  return ` <source
        srcset="
          ${watchDesktop} 1x,
          ${watchDesktop2x} 2x
        "
        media="(min-width: 1280px)"
      />
      <source
        srcset="
          ${watchTablet} 1x,
          ${watchTablet2x} 2x
        "
        media="(min-width: 768px)"
      />
      <source
        srcset="
        ${watchMobile} 1x,
        ${watchMobile2x} 2x"
        media="(min-width: 375px)"
      />
      <img src="${watchMobile}" alt="" />`;
}

aboutPictureElem.innerHTML = createMarkup();
