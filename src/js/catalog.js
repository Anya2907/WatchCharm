// ================ garmin-fenix-7X =======================

import garminFenix7XDesktop from '../img/catalog/desktop/garmin-fenix-7X.png';
import garminFenix7XDesktop2x from '../img/catalog/desktop/garmin-fenix-7X@2x.png';

import garminFenix7XTablet from '../img/catalog/tablet/garmin-fenix-7X.png';
import garminFenix7XTablet2x from '../img/catalog/tablet/garmin-fenix-7X@2x.png';

import garminFenixMobile from '../img/catalog/mobile/garmin-fenix.png';
import garminFenixMobile2x from '../img/catalog/mobile/garmin-fenix@2x.png';

const catalogPictureElemGarminFenix7X = document.querySelector(
  '.catalogGarminFenix7X'
);

function createMarkupGarminFenix7X() {
  return `<source
            srcset="
              ${garminFenix7XDesktop} 1x,
              ${garminFenix7XDesktop2x} 2x
            "
            media="(min-width: 1280px)"
          />
          <source
            srcset="
              ${garminFenix7XTablet} 1x,
              ${garminFenix7XTablet2x} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${garminFenixMobile} 1x,
              ${garminFenixMobile2x} 2x
            "
            media="(min-width: 375px)"
          />
          <img
            class="catalog-picture"
            src="${garminFenixMobile}"
            alt=""
          />`;
}

catalogPictureElemGarminFenix7X.innerHTML = createMarkupGarminFenix7X();

// ========= garmin-marq ===============
import garminMarqDesktop from '../img/catalog/desktop/garmin-marq.png';
import garminMarqDesktop2x from '../img/catalog/desktop/garmin-marq@2x.png';

import garminMarqTablet from '../img/catalog/tablet/garmin-marq.png';
import garminMarqTablet2x from '../img/catalog/tablet/garmin-marq@2x.png';

import garminMarqMobile from '../img/catalog/mobile/garmin-marq.png';
import garminMarqMobile2x from '../img/catalog/mobile/garmin-marq@2x.png';

const catalogPictureElemGarminMarq =
  document.querySelector('.catalogGarminMarq');

function createMarkupGarminMarq() {
  return `<source
            srcset="
              ${garminMarqDesktop} 1x,
              ${garminMarqDesktop2x} 2x
            "
            media="(min-width: 1280px)"
          />
          <source
            srcset="
              ${garminMarqTablet} 1x,
              ${garminMarqTablet2x} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${garminMarqMobile} 1x,
              ${garminMarqMobile2x} 2x
            "
            media="(min-width: 375px)"
          />
          <img
            class="catalog-picture"
            src="${garminMarqMobile}"
            alt=""
          />`;
}

catalogPictureElemGarminMarq.innerHTML = createMarkupGarminMarq();

// ================= GarminDescent ==================
import garminDescentDesktop from '../img/catalog/desktop/garmin-descent.png';
import garminDescentDesktop2x from '../img/catalog/desktop/garmin-D2@2x.png';

import garminDescentTablet from '../img/catalog/tablet/garmin-descent.png';
import garminDescentTablet2x from '../img/catalog/tablet/garmin-descent@2x.png';

import garminDescentMobile from '../img/catalog/mobile/garmin-descent.png';
import garminDescentMobile2x from '../img/catalog/mobile/garmin-descent@2x.png';

const catalogPictureElemGarminDescent = document.querySelector(
  '.catalogGarminDescent'
);

function createMarkupGarminDescent() {
  return `<source
            srcset="
              ${garminDescentDesktop} 1x,
              ${garminDescentDesktop2x} 2x
            "
            media="(min-width: 1280px)"
          />
          <source
            srcset="
              ${garminDescentTablet} 1x,
              ${garminDescentTablet2x} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${garminDescentMobile} 1x,
              ${garminDescentMobile2x} 2x
            "
            media="(min-width: 375px)"
          />
          <img
            class="catalog-picture"
            src="${garminDescentMobile}"
            alt=""
          />`;
}

catalogPictureElemGarminDescent.innerHTML = createMarkupGarminDescent();

//  ================= GarminD2 =========================
import garminD2Desktop from '../img/catalog/desktop/garmin-D2.png';
import garminD2Desktop2x from '../img/catalog/desktop/garmin-D2@2x.png';

import garminD2Tablet from '../img/catalog/tablet/garmin-D2.png';
import garminD2Tablet2x from '../img/catalog/tablet/garmin-D2@2x.png';

import garminD2Mobile from '../img/catalog/mobile/garmin-D2.png';
import garminD2Mobile2x from '../img/catalog/mobile/garmin-D2@2x.png';

const catalogPictureElemGarminD2 = document.querySelector('.catalogGarminD2');

function createMarkupGarminD2() {
  return `<source
            srcset="
              ${garminD2Desktop} 1x,
              ${garminD2Desktop2x} 2x
            "
            media="(min-width: 1280px)"
          />
          <source
            srcset="
              ${garminD2Tablet} 1x,
              ${garminD2Tablet2x} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${garminD2Mobile} 1x,
              ${garminD2Mobile2x} 2x
            "
            media="(min-width: 375px)"
          />
          <img
            class="catalog-picture"
            src="${garminD2Mobile}"
            alt=""
          />`;
}

catalogPictureElemGarminD2.innerHTML = createMarkupGarminD2();

// ====================== GarminFenix6 ============
import garminFenix6Desktop from '../img/catalog/desktop/garmin-fenix-6.png';
import garminFenix6Desktop2x from '../img/catalog/desktop/garmin-fenix-6@2x.png';

import garminFenix6Tablet from '../img/catalog/tablet/garmin-fenix-6.png';
import garminFenix6Tablet2x from '../img/catalog/tablet/garmin-fenix-6@2x.png';

const catalogPictureElemGarminFenix6 = document.querySelector(
  '.catalogGarminFenix6'
);

function createMarkupGarminFenix6() {
  return `<source
            srcset="
              ${garminFenix6Desktop} 1x,
              ${garminFenix6Desktop2x} 2x
            "
            media="(min-width: 1280px)"
          />
          <source
            srcset="
              ${garminFenix6Tablet} 1x,
              ${garminFenix6Tablet2x} 2x
            "
            media="(min-width: 768px)"
          />
          <img
            class="catalog-picture"
            src="${garminFenix6Tablet}"
            alt=""
          />`;
}

catalogPictureElemGarminFenix6.innerHTML = createMarkupGarminFenix6();

// =================== TubeWatchS42 =========================
import tubeWatchS42Desktop from '../img/catalog/desktop/tube-watch-S42.png';
import tubeWatchS42Desktop2x from '../img/catalog/desktop/tube-watch-S42@2x.png';

import tubeWatchS42Tablet from '../img/catalog/tablet/tube-watch-S42.png';
import tubeWatchS42Tablet2x from '../img/catalog/tablet/tube-watch-S42@2x.png';

const catalogPictureElemTubeWatchS42 = document.querySelector(
  '.catalogTubeWatchS42'
);

function createMarkupTubeWatchS42() {
  return `<source
            srcset="
              ${tubeWatchS42Desktop} 1x,
              ${tubeWatchS42Desktop2x} 2x
            "
            media="(min-width: 1280px)"
          />
          <source
            srcset="
              ${tubeWatchS42Tablet}  1x,
              ${tubeWatchS42Tablet2x} 2x
            "
            media="(min-width: 768px)"
          />
          <img
            class="catalog-picture"
            src="${tubeWatchS42Tablet}"
            alt=""
          />`;
}

catalogPictureElemTubeWatchS42.innerHTML = createMarkupTubeWatchS42();
