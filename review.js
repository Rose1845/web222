



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
  