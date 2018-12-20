// TODO: Add animations in for buttons
// TODO: Determine way to implement collapse without declaring global variables and document.querySelector

// DOM Element Retrieval

const burger = document.querySelector('div.nav__burger');
const collapseRow = document.querySelector('.filter-coll');
const duration = document.getElementById('duration');
// Functions

function navCollapse(e) {
  if ((e.target.parentElement !== burger) && (e.target !== burger)) return;
  if (e.target === burger) {
    let targetEle = document.querySelector(e.target.dataset.target);
    targetEle.classList.toggle('js-toggle');
  }
  else {
    let targetEle = document.querySelector(e.target.parentElement.dataset.target);
    targetEle.classList.toggle('js-toggle');
  }
}

function filterCollapse(e) {
  if ((e.target.parentElement !== collapseRow) && (e.target !== collapseRow)) return;
  if (e.target === collapseRow) {
    let targetEle = document.querySelector(e.target.dataset.target);
    targetEle.classList.toggle('js-toggle');
  }
  else {
    let targetEle = document.querySelector(e.target.parentElement.dataset.target);
    targetEle.classList.toggle('js-toggle');
  }
}

function readSelect(e) {
  if (e.target.value === '') return;
}

// Event Listeners

burger.addEventListener('click',navCollapse);
collapseRow.addEventListener('click', filterCollapse);
duration.addEventListener('change', readSelect);