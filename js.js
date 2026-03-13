const showMoreBtn = document.querySelector(".js-catalog-btn");
const hiddenItems = document.querySelectorAll(".catalog-item-hidden");
const scrollBtn = document.querySelector(".scroll-top-btn");
const revealElements = document.querySelectorAll(".reveal");

if (showMoreBtn) {
  showMoreBtn.addEventListener("click", () => {
    const isOpen = showMoreBtn.classList.toggle("catalog-open");

    hiddenItems.forEach((item) => {
      item.classList.toggle("catalog-item-hidden");
    });

    showMoreBtn.textContent = isOpen ? "Hide" : "Show more";

    if (!isOpen) {
      showMoreBtn.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  });
}

const reviewsSlider = new Swiper(".reviews-slider", {
  loop: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  speed: 800,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1280: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

revealElements.forEach((el) => observer.observe(el));

(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const menuLinks = document.querySelectorAll(".mobile-menu-list-link");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    document.body.style.overflow = isMenuOpen ? "" : "hidden";
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    document.body.style.overflow = "";
  });
})();
