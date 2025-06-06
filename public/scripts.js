document.querySelector('.cta-button').addEventListener('click', function(event) {
  event.preventDefault();
  alert('Thank you for your message!');
});

const burgerMenu = document.querySelector('.burger-menu');
burgerMenu.addEventListener('click', function() {
  this.classList.toggle('active');
});
