const heading = document.querySelector(".hero__heading");
const title = document.querySelector(".hero__footing"); 
const mountain = document.querySelector(".hero__image"); 

function handleScroll() {
  if (window.innerWidth >= 700) {
    let scroll = window.scrollY;
    heading.style.transform = `translateY(${scroll * 1.4}px)`;
    title.style.transform = `translateY(${scroll * 1.6}px)`;
    mountain.style.transform = `translateY(${scroll * 0.2 - 20}px)`;
  } else {
    // Reset transformations when screen width is less than 700px
    heading.style.transform = 'translateY(0)';
    title.style.transform = 'translateY(0)';
    mountain.style.transform = 'translateY(0)';
  }
}

// Initial check
handleScroll();

// Check on scroll
window.addEventListener('scroll', handleScroll);

// Check on resize
window.addEventListener('resize', handleScroll);


// shooting stars

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function updateStarProperties(star){
  star.style.top = `${getRandomNumber(0, window.innerHeight * 0.5)}px`;
  star.style.left = `${getRandomNumber(0.2 * window.innerWidth, window.innerWidth)}px`;
  star.style.animationDuration =`${getRandomNumber(2, 6)}s`;
  star.style.animationDelay = `${getRandomNumber(0, 5)}s`;
}

const stars = document.querySelectorAll(".star");

stars.forEach(star => { 
  star.addEventListener('animationend', () => {
    setTimeout(() => {
      star.classList.remove('active');
    }, 10);
    
    setTimeout(() => {
      updateStarProperties(star);
    }, 20);
    
    setTimeout(() => {
      star.classList.add('active');
    }, 40);
  });
});


// Initial update of star properties
stars.forEach(star => {
  updateStarProperties(star);
  star.classList.add('active');
});