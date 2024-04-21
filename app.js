const menuBtn = document.querySelector(".menu-btn");
let isOpen = false;

menuBtn.addEventListener("click", function () {
  if (!isOpen) {
    menuBtn.classList.add("open");
    isOpen = true;
  } else {
    menuBtn.classList.remove("open");
    isOpen = false;
  }
});
