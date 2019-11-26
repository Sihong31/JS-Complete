const buttons = document.querySelectorAll('button');

const buttonClickHandler = event => {
  event.target.disabled = true;
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

buttons.forEach(btn => {
  btn.addEventListener('click', buttonClickHandler);
});