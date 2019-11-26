const button = document.querySelector('button');

const buttonClickHandler = event => {
  // event.target.disabled = true;
  console.log(event);
}

const anotherButtonClickHandler = event => {
  console.log('This was clicked!');
}


// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);


const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', boundFn);

// setTimeout(() => {
//   button.removeEventListener('click', boundFn);
// }, 2000);

// buttons.forEach(btn => {
//   btn.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener('scroll', event => {
//   console.log(event);
// });

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector('div');

div.addEventListener('click', event => {
  console.log('CLICKED DIV', event);
});

button.addEventListener('click', function(event) {
  event.stopPropagation();
  console.log('CLICKED BUTTON', event);
  console.log(event);
  console.log(this);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(listItem => {
//   listItem.addEventListener('click', event => {
//     event.target.classList.toggle('highlight');
//   });
// })

list.addEventListener('click', function(event) {
  // console.log(event.currentTarget);  
  // event.target.classList.toggle('highlight');
  event.target.closest('li').classList.toggle('highlight');
  // form.submit();
  button.click();
  console.log(this);
});