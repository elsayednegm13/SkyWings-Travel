// This script can later be extended for animations or interactivity

document.addEventListener("DOMContentLoaded", () => {
  // Example scroll animation
  const steps = document.querySelectorAll(".step");
  steps.forEach((step, index) => {
    step.addEventListener("click", () => {
      steps.forEach((s) => s.classList.remove("active"));
      step.classList.add("active");
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Scroll-to-top button
  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "↑";
  scrollBtn.style.position = "fixed";
  scrollBtn.style.bottom = "20px";
  scrollBtn.style.right = "20px";
  scrollBtn.style.padding = "10px 15px";
  scrollBtn.style.fontSize = "20px";
  scrollBtn.style.border = "none";
  scrollBtn.style.borderRadius = "50%";
  scrollBtn.style.background = "#007bff";
  scrollBtn.style.color = "white";
  scrollBtn.style.cursor = "pointer";
  scrollBtn.style.display = "none";
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("active");
}
