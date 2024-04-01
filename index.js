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

function toggleTab(tabNumber) {
  document.querySelectorAll(".changing-tab").forEach((tab) => {
    tab.style.display = "none";
  });
  let selectedTab = document.getElementById(`changing-tabs-${tabNumber}`);
  if (selectedTab) {
    selectedTab.style.display = "flex";
  }
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.remove("active");
  });

  let clickedButton = document.getElementById(`tabButton${tabNumber}`);
  if (clickedButton) {
    clickedButton.classList.add("active");
  }
}
