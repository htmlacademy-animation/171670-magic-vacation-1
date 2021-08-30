const mainBlock = document.querySelector('body');
const mainMenu = document.querySelector('.page-header__nav');
const prizesLink = mainMenu.querySelector('a[data-href=prizes]');
const storyBlock = document.querySelector('#story');

window.addEventListener("load", () => {
  mainBlock.classList.add('active');
});

prizesLink.addEventListener("click", (e) => {
  e.preventDefault();
  storyBlock.classList.add('animate');
  setTimeout(() =>{
    window.location.replace(e.target.href);
    storyBlock.classList.remove('animate');
  }, 400);
});


