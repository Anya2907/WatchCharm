// ================ Watch01 ===============
import watch01Desktop from '../img/sale/desktop/photo-watch01-desktop.png';
import watch01Desktop2x from '../img/sale/desktop/photo-watch01-desktop@2x.png';

import watch01Tablet from '../img/sale/tablet/photo-watch01-tablet.png';
import watch01Tablet2x from '../img/sale/tablet/photo-watch01-tablet@2x.png';

import watch01Mobile from '../img/sale/mobile/photo-watch01-mobile.png';
import watch01Mobile2x from '../img/sale/mobile/photo-watch01-mobile@2x.png';

const salePictureElemWatch01 = document.querySelector('.saleWatch01');

function createMarkupWatch01() {
  return `<source
                srcset="
                  ${watch01Desktop} 1x,
                  ${watch01Desktop2x} 2x
                "
                media="(min-width: 1280px)"
              />
              <source
                srcset="
                  ${watch01Tablet} 1x,
                  ${watch01Tablet2x} 2x
                "
                media="(min-width: 768px)"
              />
              <source
                srcset="
                  ${watch01Mobile} 1x,
                  ${watch01Mobile2x} 2x
                "
                media="(min-width: 375px)"
              />
              <img src="${watch01Mobile}" alt="" />`;
}

salePictureElemWatch01.innerHTML = createMarkupWatch01();

//==================== Watch02 ======================
import watch02Desktop from '../img/sale/desktop/photo-watch02-desktop.png';
import watch02Desktop2x from '../img/sale/desktop/photo-watch02-desktop@2x.png';

import watch02Tablet from '../img/sale/tablet/photo-watch02-tablet.png';
import watch02Tablet2x from '../img/sale/tablet/photo-watch02-tablet@2x.png';

import watch02Mobile from '../img/sale/mobile/photo-watch02-mobile.png';
import watch02Mobile2x from '../img/sale/mobile/photo-watch02-mobile@2x.png';

const salePictureElemWatch02 = document.querySelector('.saleWatch02');

function createMarkupWatch2() {
  return `<source
                srcset="
                  ${watch02Desktop} 1x,
                  ${watch02Desktop2x} 2x
                "
                media="(min-width: 1280px)"
              />
              <source
                srcset="
                  ${watch02Tablet} 1x,
                  ${watch02Tablet2x} 2x
                "
                media="(min-width: 768px)"
              />
              <source
                srcset="
                  ${watch02Mobile} 1x,
                  ${watch02Mobile2x} 2x
                "
                media="(min-width: 375px)"
              />
              <img src="${watch02Mobile}" alt="" />`;
}

salePictureElemWatch02.innerHTML = createMarkupWatch2();

// ================== Watch03 ===========================
import watch03Desktop from '../img/sale/desktop/photo-watch03-desktop.png';
import watch03Desktop2x from '../img/sale/desktop/photo-watch03-desktop@2x.png';

import watch03Tablet from '../img/sale/tablet/photo-watch03-tablet.png';
import watch03Tablet2x from '../img/sale/tablet/photo-watch03-tablet@2x.png';

import watch03Mobile from '../img/sale/mobile/photo-watch03-mobile.png';
import watch03Mobile2x from '../img/sale/mobile/photo-watch03-mobile@2x.png';

const salePictureElemWatch03 = document.querySelector('.saleWatch03');

function createMarkupWatch03() {
  return `<source
                srcset="
                  ${watch03Desktop} 1x,
                  ${watch03Desktop2x} 2x
                "
                media="(min-width: 1280px)"
              />
              <source
                srcset="
                  ${watch03Tablet} 1x,
                  ${watch03Tablet2x} 2x
                "
                media="(min-width: 768px)"
              />
              <source
                srcset="
                  ${watch03Mobile} 1x,
                  ${watch03Mobile2x} 2x
                "
                media="(min-width: 375px)"
              />
              <img src="${watch03Mobile}" alt="" />`;
}

salePictureElemWatch03.innerHTML = createMarkupWatch03();

// ================ Watch04 ===================
import watch04Desktop from '../img/sale/desktop/photo-watch04-desktop.png';
import watch04Desktop2x from '../img/sale/desktop/photo-watch04-desktop@2x.png';

import watch04Tablet from '../img/sale/tablet/photo-watch04-tablet.png';
import watch04Tablet2x from '../img/sale/tablet/photo-watch04-tablet@2x.png';

import watch04Mobile from '../img/sale/mobile/photo-watch04-mobile.png';
import watch04Mobile2x from '../img/sale/mobile/photo-watch04-mobile@2x.png';

const salePictureElemWatch04 = document.querySelector('.saleWatch04');

function createMarkupWatch04() {
  return ` <source
                srcset="
                  ${watch04Desktop} 1x,
                  ${watch04Desktop2x} 2x
                "
                media="(min-width: 1280px)"
              />
              <source
                srcset="
                  ${watch04Tablet} 1x,
                  ${watch04Tablet2x} 2x
                "
                media="(min-width: 768px)"
              />
              <source
                srcset="
                  ${watch04Mobile} 1x,
                  ${watch04Mobile2x} 2x
                "
                media="(min-width: 375px)"
              />
              <img src="${watch04Mobile}" alt="" />`;
}

salePictureElemWatch04.innerHTML = createMarkupWatch04();

// ============== BigWatch =======================
import bigWatchDesktop from '../img/sale/desktop/photo-big-watch-desktop.png';
import bigWatchDesktop2x from '../img/sale/desktop/photo-big-watch-desktop@2x.png';

import bigWatchTablet from '../img/sale/tablet/photo-big-watch-tablet.png';
import bigWatchTablet2x from '../img/sale/tablet/photo-big-watch-tablet@2x.png';

import bigWatchMobile from '../img/sale/mobile/photo-big-watch-mobile.png';
import bigWatchMobile2x from '../img/sale/mobile/photo-big-watch-mobile.png@2x.png';

const salePictureElemBigWatch = document.querySelector('.saleBigWatch');

function createMarkupBigWatch() {
  return `<source
              srcset="
                ${bigWatchDesktop} 1x,
                ${bigWatchDesktop2x} 2x
              "
              media="(min-width: 1280px)"
            />
            <source
              srcset="
                ${bigWatchTablet} 1x,
                ${bigWatchTablet2x} 2x
              "
              media="(min-width: 768px)"
            />
            <source
              srcset="
                ${bigWatchMobile} 1x,
                ${bigWatchMobile2x} 2x
              "
              media="(min-width: 375px)"
            />
            <img src="${bigWatchMobile}" alt="" />`;
}

salePictureElemBigWatch.innerHTML = createMarkupBigWatch();
