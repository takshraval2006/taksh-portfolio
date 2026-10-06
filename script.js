document.addEventListener("DOMContentLoaded", () => {
  // Dynamic year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Back-to-top button
  const topBtn = document.getElementById("topBtn");

  window.addEventListener("scroll", () => {
    topBtn.classList.toggle("show", window.scrollY > 500);
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Close mobile navbar after clicking a link
  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("mainNav");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // Simple reveal animation
  const revealItems = document.querySelectorAll(
    ".glass-card, .info-card, .skill-card, .project-card, .timeline-content, .contact-box"
  );

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(18px)";
    item.style.transition = "opacity .65s ease, transform .65s ease";
    observer.observe(item);
  });
});
