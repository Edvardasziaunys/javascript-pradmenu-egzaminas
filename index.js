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

//  Review cards

function createReviewCard(comment, name, occupation, photoUrl) {
  const card = document.createElement("div");
  card.classList.add("review-card");

  const commentBubble = document.createElement("div");
  commentBubble.classList.add("comment-bubble");
  commentBubble.textContent = comment;

  const contentWrap = document.createElement("div");
  contentWrap.classList.add("content-wrap");

  const photo = document.createElement("img");
  photo.classList.add("photo");
  photo.src = photoUrl;

  const infoWrap = document.createElement("div");
  infoWrap.classList.add("info-wrap");

  const nameElement = document.createElement("div");
  nameElement.classList.add("name");
  nameElement.textContent = name;

  const occupationElement = document.createElement("div");
  occupationElement.classList.add("occupation");
  occupationElement.textContent = occupation;

  infoWrap.appendChild(nameElement);
  infoWrap.appendChild(occupationElement);

  contentWrap.appendChild(photo);
  contentWrap.appendChild(infoWrap);

  card.appendChild(commentBubble);
  card.appendChild(contentWrap);

  return card;
}

const reviewsData = [
  {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex.",
    name: "Jeremy H.",
    occupation: "Manager",
    photoUrl: "./avatar_2_u231.png",
  },
  {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita.",
    name: "John S.",
    occupation: "Freelance",
    photoUrl: "./avatar_2_u231.png",
  },
  {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex.",
    name: "Susan W.",
    occupation: "Photographer",
    photoUrl: "./avatar_2_u231.png",
  },
  {
    comment:
      "Lorem ipsum dolor sit amet. Doloribus accusamus expedita repellat similique odio aspernatur ex.",
    name: "JJ Olatunji",
    occupation: "Influencer",
    photoUrl: "./avatar_2_u231.png",
  },
  {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex.",
    name: "Ashley W.",
    occupation: "Stylist",
    photoUrl: "./avatar_2_u231.png",
  },
  {
    comment:
      "Lorem ipsum dolor sit amet, . Doloribus accusamus expedita repellat similique odio aspernatur ex.",
    name: "John W.",
    occupation: "Broker",
    photoUrl: "./avatar_2_u231.png",
  },
  {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex.",
    name: "Susan W.",
    occupation: "Customer Support",
    photoUrl: "./avatar_2_u231.png",
  },
  {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex.",
    name: "Andy P.",
    occupation: "Photographer",
    photoUrl: "./avatar_2_u231.png",
  },
  {
    comment:
      "Lorem ipsum, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex.",
    name: "Mark N.",
    occupation: "Freelance",
    photoUrl: "./avatar_2_u231.png",
  },
  {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex.",
    name: "Susan W.",
    occupation: "Photographer",
    photoUrl: "./avatar_2_u231.png",
  },
  {
    comment:
      "Lorem ipsum dolor sit amet, oribus accusamus expedita repellat similique odio aspernatur ex.",
    name: "Jil W.",
    occupation: "Customer Success",
    photoUrl: "./avatar_2_u231.png",
  },
];

// const reviewContainer = document.querySelector(".what-bottom");
// reviewsData.forEach((review) => {
//   const card = createReviewCard(
//     review.comment,
//     review.name,
//     review.occupation,
//     review.photoUrl
//   );
//   reviewContainer.appendChild(card);
// });

//---------pagination

const itemsPerPage = 3;
let currentPage = 1;

function displayReviews(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const reviewsOnPage = reviewsData.slice(startIndex, endIndex);

  const reviewContainer = document.querySelector(".what-bottom");
  reviewContainer.innerHTML = "";

  reviewsOnPage.forEach((review) => {
    const card = createReviewCard(
      review.comment,
      review.name,
      review.occupation,
      review.photoUrl
    );
    reviewContainer.appendChild(card);
  });
}

function updatePagination() {
  const totalItems = reviewsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginationContainer = document.querySelector(".pagination");
  paginationContainer.innerHTML = "";

  for (let p = 1; p <= totalPages; p++) {
    const pageLink = document.createElement("a");
    pageLink.href = "#";
    pageLink.textContent = p;
    pageLink.addEventListener("click", function (event) {
      event.preventDefault();
      currentPage = p;
      displayReviews(currentPage);
      updatePagination();
    });

    if (p === currentPage) {
      pageLink.classList.add("active");
    }
    paginationContainer.appendChild(pageLink);
  }
}

displayReviews(currentPage);
updatePagination();

//------------------------

// form validation

document.addEventListener("DOMContentLoaded", function () {
  const submitButtons = document.querySelectorAll("input[type='submit']");

  submitButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const form = button.closest("form");
      const inputs = form.querySelectorAll("input[required]");
      let isEmpty = false;

      inputs.forEach(function (input) {
        if (input.value.trim() === "") {
          isEmpty = true;
        }
      });

      if (isEmpty) {
        event.preventDefault();
        alert("Please fill in all the required fields");
        return false;
      }
    });
  });
});

// hamburger

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-item").forEach((nav) =>
  nav.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
