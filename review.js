



function generateReviewCards() {
    const reviewContainer = document.getElementById("review-container");
    
    reviewData.forEach((review) => {
      // Create the card element
      console.log(review);
      const card = document.createElement("div");
      card.classList.add("review-card");
  
      // Create and append the card content
      const name = document.createElement("h3");
      name.textContent = review.name;
      card.appendChild(name);
  
      const date = document.createElement("p");
      date.classList.add("review-date");
      date.textContent = new Date(review.date).toLocaleDateString();
      card.appendChild(date);
  
      const rating = document.createElement("p");
      rating.classList.add("review-rating");
    //   rating.textContent = "Rating: ";
      for (let i = 0; i < review.rating; i++) {
        rating.innerHTML += "★ ";
      }
      for (let i = review.rating; i < 5; i++) {
        rating.innerHTML += "☆ ";
      }
      card.appendChild(rating);
  
      const text = document.createElement("p");
      text.textContent = review.text;
      card.appendChild(text);
  
      // Append the card to the container
      reviewContainer.appendChild(card);
    //   form
    
    });
  }
generateReviewCards();
  