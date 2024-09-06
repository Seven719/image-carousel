const buttons = document.querySelectorAll("[data-carousel-button]");
const dotsContainer = document.querySelector("[data-dots]");
const slidesContainer = document.querySelector("[data-carousel]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;

    const activeSlide = slidesContainer.querySelector("[data-active]");
    const activeDot = dotsContainer.querySelector("[data-active]");

    let index = newIndex(activeSlide, offset);

    updateActiveDataset(activeSlide, activeDot, index);
    resetAutoSlide();
  });
});

dotsContainer.querySelectorAll(".dot").forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const activeSlide = slidesContainer.querySelector("[data-active]");
    const activeDot = dotsContainer.querySelector("[data-active]");

    updateActiveDataset(activeSlide, activeDot, index);
    resetAutoSlide();
  });
});

const updateActiveDataset = (activeSlide, activeDot, index) => {
  slidesContainer.children[index].dataset.active = true;
  delete activeSlide.dataset.active;

  dotsContainer.children[index].dataset.active = true;
  delete activeDot.dataset.active;
};

const newIndex = (activeSlide, offset) => {
  let newIndex = [...slidesContainer.children].indexOf(activeSlide) + offset;
  if (newIndex < 0) newIndex = slidesContainer.children.length - 1;
  if (newIndex >= slidesContainer.children.length) newIndex = 0;

  return newIndex;
};

const autoSlide = () => {
  const activeSlide = slidesContainer.querySelector("[data-active]");
  const activeDot = dotsContainer.querySelector("[data-active]");

  const index = newIndex(activeSlide, 1);

  updateActiveDataset(activeSlide, activeDot, index);
};

let autoSlideInterval = setInterval(autoSlide, 5000);

const resetAutoSlide = () => {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 5000);
};
