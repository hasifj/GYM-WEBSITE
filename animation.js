const animatedText = document.getElementById('animatedText');

// Add the animation on page load
setTimeout(() => {
  animatedText.classList.add('appear');
}, 100);

// When the animation completes, add the link
animatedText.addEventListener('animationend', () => {
  const link = document.createElement('a');
  link.href = "/demo.html";
  link.textContent = "Welcome to our Website";
  animatedText.innerHTML = '';
  animatedText.appendChild(link);
});