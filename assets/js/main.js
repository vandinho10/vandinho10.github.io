(function () {
  "use strict";

  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  function closeMenu() {
    navToggle.classList.remove("open");
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      navToggle.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", String(open));
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  var nav = document.getElementById("nav");
  if (nav) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 8) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    }, { passive: true });
  }

  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("visible"); });
  }
})();
