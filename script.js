document.addEventListener("DOMContentLoaded", () => {
  const kitsContainer = document.querySelector(".kits");
  const arrowBtns = document.querySelectorAll(".arrow-btn");
  const featureTeamSection = document.querySelector(".feature-team");

  if (kitsContainer) {
    if (arrowBtns.length >= 2) {
      arrowBtns[0].addEventListener("click", () =>
        kitsContainer.scrollBy({ left: -220, behavior: "smooth" }),
      );
      arrowBtns[1].addEventListener("click", scrollRight);
    }

    function scrollRight() {
      if (
        kitsContainer.scrollLeft + kitsContainer.clientWidth >=
        kitsContainer.scrollWidth - 10
      ) {
        kitsContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        kitsContainer.scrollBy({ left: 210, behavior: "smooth" });
      }
    }

    let autoSlide = setInterval(scrollRight, 1500);
    kitsContainer.addEventListener("mouseenter", () =>
      clearInterval(autoSlide),
    );
    kitsContainer.addEventListener(
      "mouseleave",
      () => (autoSlide = setInterval(scrollRight, 1500)),
    );
  }

  [".kit-btn", ".collection"].forEach((selector) => {
    const btn = document.querySelector(selector);
    if (btn && featureTeamSection) {
      btn.addEventListener("click", () =>
        featureTeamSection.scrollIntoView({ behavior: "smooth" }),
      );
    }
  });

  document.querySelectorAll(".icon-btn").forEach((btn, index) => {
    const names = ["ძებნა", "პროფილი", "ფავორიტები"];
    btn.addEventListener("click", () =>
      console.log(`${names[index]} ღილაკი დაჭერილია`),
    );
  });
});
