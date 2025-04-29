document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        if (el.classList.contains("scroll-in-left")) {
          el.style.animationName = "scroll-in-left";
        } else if (el.classList.contains("scroll-in-right")) {
          el.style.animationName = "scroll-in-right";
        } else if (el.classList.contains("scroll-in-up")) {
          el.style.animationName = "scroll-in-up";
        }
      }
    });
  });

  document.querySelectorAll('.scroll-in-left, .scroll-in-right, .scroll-in-up').forEach(el => {
    observer.observe(el);
  });
});