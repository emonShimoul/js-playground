// created toogle navbar for mobile
const toggle = document.querySelector(".toggler-menu");
const menuOpen = document.querySelector(".menu-open");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menuOpen.classList.toggle("active");
});

// add active class in selected list item
let list = document.querySelectorAll(".list");
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "list";
    }
    list[i].className = "list active";
  };
}
console.log(list);
