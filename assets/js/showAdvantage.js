const advantageBtn = document.querySelector('.advantages__btn');
const advantagesList = document.querySelectorAll('.advantage-card');

advantageBtn.addEventListener("click", () => {
  advantagesList.forEach((el) => el.classList.add("show"));
  advantageBtn.classList.remove("show");
})
