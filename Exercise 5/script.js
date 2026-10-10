// FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
  const acc = document.querySelectorAll(".accordion");
  acc.forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
      const panel = button.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();
});
