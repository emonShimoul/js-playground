const toggle = document.querySelector(".toggler-menu");
const menuOpen = document.querySelector(".menu-open");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menuOpen.classList.toggle("active");
});
