// navigation scroll active

const sections = document.querySelectorAll("section");
const navA = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (
      scrollY >= sectionTop - 100 &&
      scrollY < sectionTop + sectionHeight - 100
    ) {
      currentSectionId = section.getAttribute("id");
    }
  });
  navA.forEach((a) => {
    if (a.getAttribute("href") === `#${currentSectionId}`) {
      a.classList.add("active");
    } else {
      a.classList.remove("active");
    }
  });
});

// tab section changing
