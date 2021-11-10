const understoodBtn = document.querySelector(".close-modal");
const body = document.querySelector("body");
const modal = document.querySelector(".modal");

understoodBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
  body.classList.remove("modal-open");
});
