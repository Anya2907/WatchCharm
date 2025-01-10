import photoWatchDesktop from '../img/contact-us/photo-watch-desktop.jpg';
import photoWatchDesktop2x from '../img/contact-us/photo-watch-desktop@2x.jpg';
import photoWatchTablet from '../img/contact-us/photo-watch-tablet.jpg';
import photoWatchTablet2x from '../img/contact-us/photo-watch-tablet@2x.jpg';
import photoWatchMobile from '../img/contact-us/photo-watch-mobile.jpg';
import photoWatchMobile2x from '../img/contact-us/photo-watch-mobile@2x.jpg';

const contactPictureElemPhotoWatch =
  document.querySelector('.contactPhotoWatch');

function createMarkupPhotoWatch() {
  return `<source
          srcset="
            ${photoWatchDesktop} 1x,
            ${photoWatchDesktop2x} 2x
          "
          media="(min-width: 1280px)"
        />
        <source
          srcset="
            ${photoWatchTablet} 1x,
            ${photoWatchTablet2x} 2x
          "
          media="(min-width: 768px)"
        />
        <source
          srcset="
            ${photoWatchMobile} 1x,
            ${photoWatchMobile2x} 2x
          "
          media="(min-width: 375px)"
        />
        <img
          class="contact-us-picture"
          src="${photoWatchMobile}"
          alt=""
        />`;
}

contactPictureElemPhotoWatch.innerHTML = createMarkupPhotoWatch();
