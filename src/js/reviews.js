// ================== JohnWax =============
import johnWax from '../img/reviews/john-wax.png';
import johnWax2x from '../img/reviews/john-wax@2x.png';

const reviewsPictureElemJohnWax = document.querySelector('.reviewsJohnWax');

function createMarkupJohnWax() {
  return `<img
          class="reviews-avatar"
          srcset="
            ${johnWax} 1x,
            ${johnWax2x} 2x
          "
          src="${johnWax}"
          alt=""
        />
        <h3 class="reviews-title-name-avatar">John Wax</h3>
        <p class="reviews-text">
          Buying a watch from was the best choice for me. The design is
          perfectly combined with high quality materials. The strap fits nicely
          on the hand, and the mechanism works flawlessly.
        </p>`;
}

reviewsPictureElemJohnWax.innerHTML = createMarkupJohnWax();

// =================== VictoriaRomashenko =====================
import victoriaRomashenko from '../img/reviews/victoria-romashenko.png';
import victoriaRomashenko2x from '../img/reviews/victoria-romashenko@2x.png';

const reviewsPictureElemVictoriaRomashenko = document.querySelector(
  '.reviewsVictoriaRomashenko'
);

function createMarkupVictoriaRomashenko() {
  return `<img
          class="reviews-avatar"
          srcset="
            ${victoriaRomashenko} 1x,
            ${victoriaRomashenko2x} 2x
          "
          src="../img/reviews/victoria-romashenko.png"
          alt=""
        />
        <h3 class="reviews-title-name-avatar">Victoria Romashenko</h3>
        <p class="reviews-text">
          Can't take my eyes off my watch from. Every time I put it on, it is
          admired by those around me. The build quality and attention to detail
          make it a real gem among my accessories.
        </p>`;
}

reviewsPictureElemVictoriaRomashenko.innerHTML =
  createMarkupVictoriaRomashenko();

// ================ AnastasiaTrachuk =====================
import anastasiaTrachuk from '../img/reviews/anastasia-trachuk.png';
import anastasiaTrachuk2x from '../img/reviews/anastasia-trachuk@2x.png';

const reviewsPictureElemAnastasiaTrachuk = document.querySelector(
  '.reviewsAnastasiaTrachuk'
);

function createMarkupAnastasiaTrachuk() {
  return `<img
          class="reviews-avatar"
          srcset="
            ${anastasiaTrachuk} 1x,
            ${anastasiaTrachuk2x} 2x
          "
          src="../img/reviews/anastasia-trachuk.png"
          alt=""
        />
        <h3 class="reviews-title-name-avatar">Anastasia Trachuk</h3>
        <p class="reviews-text">
          My watch from is a real masterpiece. Every detail impresses with the
          high quality of execution. Special features like [specify features]
          make it an indispensable companion in my daily life.
        </p>`;
}

reviewsPictureElemAnastasiaTrachuk.innerHTML = createMarkupAnastasiaTrachuk();
