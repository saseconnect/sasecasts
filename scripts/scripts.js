// DOM Element Retrieval

const burger = document.querySelector('div.nav__burger');
const navList = document.querySelector('.nav__list');

// ideally not require the burger variable in the navCollapse function
  // implementing that probably requires a bit more scripting


// Functions

function navCollapse(e){
  if ((e.target.parentElement !== burger) && (e.target !== burger)) return;
  if (e.target===burger){
    let targetEle = document.querySelector(e.target.dataset.target);
    targetEle.classList.toggle('js-toggle');
  }
  else{
    let targetEle = document.querySelector(e.target.parentElement.dataset.target);
    targetEle.classList.toggle('js-toggle');
  }
}

// Event Listeners

burger.addEventListener('click',navCollapse);