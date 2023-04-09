function generateReviewCards() {
  const reviewContainer = document.getElementById("review-container");

  reviewData.forEach((reviewD) => {
    // Create the card element
    console.log(review);
    const card = document.createElement("div");
    card.classList.add("review-card");

    // Create and append the card content
    const name = document.createElement("h3");
    name.textContent = reviewD.name;
    card.appendChild(name);

    const text = document.createElement("p");
    text.classList.add("review-text");
    text.textContent = reviewD.text;
    card.appendChild(text);

    const date = document.createElement("p");
    date.classList.add("review-date");
    date.textContent = new Date(reviewD.date).toLocaleDateString();
    card.appendChild(date);

    const rating = document.createElement("p");
    rating.classList.add("review-rating");
    //   rating.textContent = "Rating: ";
    for (let i = 0; i < reviewD.rating; i++) {
      rating.innerHTML += "★ ";
    }
    for (let i = reviewD.rating; i < 5; i++) {
      rating.innerHTML += "☆ ";
    }
    card.appendChild(rating);

    // Append the card to the container
    reviewContainer.appendChild(card);
    //   form
  });
}
generateReviewCards();

//form validation
const form = document.getElementById("review-form");
const name = document.getElementById("name");
const text = document.getElementById("text");
const rating = document.getElementById("rating");
const date = document.getElementById("date");

function checkInputs() {
  // get the values from the inputs
  const nameValue = name.value.trim();
  const textValue = text.value.trim();
  const ratingValue = rating.value.trim();
  const dateValue = date.value.trim();

  if (nameValue === "") {
    // show error
    // add error class
    setErrorFor(name, "Name cannot be blank");
  } else {
    // add success class
    setSuccessFor(name);
  }

  if (textValue === "") {
    setErrorFor(text, "Text cannot be blank");
  } else {
    setSuccessFor(text);
  }

  if (ratingValue === "") {
    setErrorFor(rating, "Rating cannot be blank");
  } else {
    setSuccessFor(rating);
  }

  if (dateValue === "") {
    setErrorFor(date, "Date cannot be blank");
  } else {
    setSuccessFor(date);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  // add error message inside small
  small.innerText = message;
  // add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

const reviewForm = document.getElementById("review-form");
reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  const formData = new FormData(reviewForm);
  const review = {};
  for (let entry of formData.entries()) {
    review[entry[0]] = entry[1];
  }
  reviewData.push(review);
  generateReviewCards();
  reviewForm.reset();
});
