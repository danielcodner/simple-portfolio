(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------------------------------------------------------
     Phone videos: click to pause/play (event delegation, since
     case study videos are re-rendered dynamically per modal)
  --------------------------------------------------------- */
  document.addEventListener("click", (e) => {
    const video = e.target.closest(".phone-video");
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
  });

  /* ---------------------------------------------------------
     Reveal-on-scroll
  --------------------------------------------------------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el, i) => {
    el.style.transitionDelay = Math.min(i * 40, 240) + "ms";
    revealObserver.observe(el);
  });

  /* ---------------------------------------------------------
     Mobile nav toggle
  --------------------------------------------------------- */
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  const navScrim = document.getElementById("nav-scrim");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      navScrim.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("nav-open", isOpen);
    });
    mainNav.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        navScrim.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
      })
    );
  }

  /* ---------------------------------------------------------
     Render work list from CASE_STUDIES (js/data.js)
  --------------------------------------------------------- */
  const workList = document.getElementById("work-list");

  CASE_STUDIES.forEach((study, i) => {
    const li = document.createElement("li");
    li.className = "work-item";
    li.innerHTML = `
      <button class="work-item-trigger" data-index="${i}" aria-haspopup="dialog">
        <span class="work-item-index">${study.index}</span>
        <span class="work-item-heading">
          <span class="work-item-title">${study.title}</span>
          <span class="work-item-tags">${study.tags.map((t) => `<span>${t}</span>`).join("")}</span>
        </span>
        <span class="work-item-year">${study.year}</span>
      </button>
    `;
    workList.appendChild(li);
  });

  /* ---------------------------------------------------------
     Modal
  --------------------------------------------------------- */
  const overlay = document.getElementById("modal-overlay");
  const modal = document.getElementById("modal");
  const modalScroll = document.getElementById("modal-scroll");
  const closeBtn = document.getElementById("modal-close");
  const prevBtn = document.getElementById("modal-prev");
  const nextBtn = document.getElementById("modal-next");

  let currentIndex = null;
  let lastFocused = null;
  let galleryTimer = null;
  let galleryIndex = 0;

  function stopGalleryTimer() {
    if (galleryTimer) {
      clearInterval(galleryTimer);
      galleryTimer = null;
    }
  }

  function initGallery(study) {
    const track = modalScroll.querySelector(".carousel-track");
    if (!track) return;

    const slides = track.querySelectorAll(".carousel-slide");
    const dots = modalScroll.querySelectorAll(".carousel-dot");
    galleryIndex = 0;

    function goTo(i) {
      galleryIndex = (i + slides.length) % slides.length;
      track.style.transform = `translateX(-${galleryIndex * 100}%)`;
      dots.forEach((dot, d) => dot.classList.toggle("is-active", d === galleryIndex));
    }

    function restartTimer() {
      stopGalleryTimer();
      if (slides.length > 1) {
        galleryTimer = setInterval(() => goTo(galleryIndex + 1), 4500);
      }
    }

    modalScroll.querySelector(".carousel-prev")?.addEventListener("click", () => {
      goTo(galleryIndex - 1);
      restartTimer();
    });
    modalScroll.querySelector(".carousel-next")?.addEventListener("click", () => {
      goTo(galleryIndex + 1);
      restartTimer();
    });
    dots.forEach((dot, d) =>
      dot.addEventListener("click", () => {
        goTo(d);
        restartTimer();
      })
    );

    goTo(0);
    restartTimer();
  }

  function renderCaseStudy(study) {
    stopGalleryTimer();

    const galleryHTML = `
      <div class="modal-gallery-carousel" role="group" aria-label="Project gallery">
        <div class="carousel-track">
          ${study.gallery.map((bg) => `<div class="carousel-slide" style="background:${bg}"></div>`).join("")}
        </div>
        ${
          study.gallery.length > 1
            ? `<button class="carousel-arrow carousel-prev" aria-label="Previous image">←</button>
               <button class="carousel-arrow carousel-next" aria-label="Next image">→</button>
               <div class="carousel-dots">
                 ${study.gallery.map((_, i) => `<button class="carousel-dot" aria-label="Go to image ${i + 1}"></button>`).join("")}
               </div>`
            : ""
        }
      </div>
    `;

    modalScroll.innerHTML = `
      ${galleryHTML}
      <div class="modal-eyebrow">
        ${study.tags.map((t) => `<span>${t}</span>`).join("")}
      </div>
      <h2 class="modal-title" id="modal-title">${study.title}</h2>
      <p class="modal-tagline">${study.tagline}</p>

      <dl class="modal-meta">
        <div><dt>Role</dt><dd>${study.role}</dd></div>
        <div><dt>Year</dt><dd>${study.year}</dd></div>
        <div><dt>Tools</dt><dd>${study.tools}</dd></div>
      </dl>

      ${
        study.video
          ? `<div class="modal-video">
               <div class="phone-frame">
                 <div class="phone-notch"></div>
                 <div class="phone-screen">
                   <video class="phone-video" autoplay muted loop playsinline>
                     <source src="${study.video}" type="video/mp4">
                   </video>
                 </div>
               </div>
             </div>`
          : ""
      }

      <div class="modal-block">
        <h3>Overview</h3>
        <p>${study.overview}</p>
      </div>
      <div class="modal-block">
        <h3>Problem</h3>
        <p>${study.problem}</p>
      </div>
      <div class="modal-block">
        <h3>Process</h3>
        <p>${study.process}</p>
      </div>
      <div class="modal-block">
        <h3>Outcome</h3>
        <p>${study.outcome}</p>
      </div>
    `;
    modalScroll.scrollTop = 0;
    initGallery(study);
  }

  function openModal(index) {
    currentIndex = index;
    lastFocused = document.activeElement;
    renderCaseStudy(CASE_STUDIES[index]);
    updateNavState();

    overlay.classList.add("is-open");
    document.body.classList.add("modal-open");
    closeBtn.focus();

    document.addEventListener("keydown", onKeydown);
  }

  function closeModal() {
    stopGalleryTimer();
    overlay.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    document.removeEventListener("keydown", onKeydown);
    if (lastFocused) lastFocused.focus();
  }

  function updateNavState() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === CASE_STUDIES.length - 1;
  }

  function showRelative(delta) {
    const next = currentIndex + delta;
    if (next < 0 || next >= CASE_STUDIES.length) return;
    currentIndex = next;
    renderCaseStudy(CASE_STUDIES[currentIndex]);
    updateNavState();
    closeBtn.focus();
  }

  function onKeydown(e) {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") showRelative(1);
    if (e.key === "ArrowLeft") showRelative(-1);
  }

  workList.addEventListener("click", (e) => {
    const trigger = e.target.closest(".work-item-trigger");
    if (!trigger) return;
    openModal(Number(trigger.dataset.index));
  });

  closeBtn.addEventListener("click", closeModal);
  prevBtn.addEventListener("click", () => showRelative(-1));
  nextBtn.addEventListener("click", () => showRelative(1));

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
})();
