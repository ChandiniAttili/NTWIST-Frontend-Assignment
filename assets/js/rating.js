// Star Rating Widget
const stars = document.querySelectorAll('.star-rating .star');
const ratingValue = document.getElementById('rating-value');
let currentRating = 0;

stars.forEach((star, idx) => {
  star.addEventListener('mouseenter', () => {
    highlightStars(idx + 1);
  });
  star.addEventListener('mouseleave', () => {
    highlightStars(currentRating);
  });
  star.addEventListener('click', () => {
    currentRating = idx + 1;
    highlightStars(currentRating);
    if (ratingValue) ratingValue.textContent = `You rated: ${currentRating} star${currentRating > 1 ? 's' : ''}`;
  });
});

function highlightStars(rating) {
  stars.forEach((star, i) => {
    star.classList.toggle('active', i < rating);
  });
} 