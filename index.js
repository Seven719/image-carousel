const buttons = document.querySelectorAll("[data-carousel-button]");
const dotsContainer = document.querySelector("[data-dots]");
const slidesContainer = document.querySelector("[data-carousel]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;

    const activeSlide = slidesContainer.querySelector("[data-active]");
    const activeDot = dotsContainer.querySelector("[data-active]");

    let newIndex = [...slidesContainer.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slidesContainer.children.length - 1;
    if (newIndex >= slidesContainer.children.length) newIndex = 0;

    updateActiveDataset(activeSlide, activeDot, newIndex);
  });
});

dotsContainer.querySelectorAll(".dot").forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const activeSlide = slidesContainer.querySelector("[data-active]");
    const activeDot = dotsContainer.querySelector("[data-active]");

    updateActiveDataset(activeSlide, activeDot, index);
  });
});

const updateActiveDataset = (activeSlide, activeDot, index) => {
  slidesContainer.children[index].dataset.active = true;
  delete activeSlide.dataset.active;

  dotsContainer.children[index].dataset.active = true;
  delete activeDot.dataset.active;
};
