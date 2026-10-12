document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const adviceForm = document.getElementById("adviceForm");
  const formStatus = document.getElementById("formStatus");

  if (adviceForm && formStatus) {
    adviceForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = adviceForm.elements.name.value.trim() || "friend";
      const supportType = adviceForm.elements.supportType.value;

      formStatus.textContent = `Thank you, ${name}. Your message has been safely noted and will be reviewed by a trusted ${supportType.toLowerCase()} support channel.`;
      adviceForm.reset();
    });
  }
});
