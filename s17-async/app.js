const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(success => {
        resolve(success);
      }, error => {
        reject(error);
      }, opts);
  });

  return promise;
}

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });

  return promise;
}

// function trackUserHandler() {
//   let positionData;

//   getPosition()
//     .then(posData => {
//       positionData = posData;
//       return setTimer(2000);
//     })
//     .catch(error => {
//       console.log(error);
//       console.log('we move on to then block...');
//     })
//     .then(data => {
//       console.log(data);
//       console.log(positionData);
//     })
//   // setTimer(1000).then(response => {
//   //   console.log(response, 'Timer Done!');
//   // });
//   // console.log('Getting position...');
// }

// async await syntax
async function trackUserHandler() {
  let posData;
  let timerData;

  try {
    posData = await getPosition();
    timerData = await setTimer(2000); 
  } catch (error) {
    console.log(error);
  }
  
  console.log(timerData, posData);

}


button.addEventListener('click', trackUserHandler);

Promise.race([getPosition(), setTimer(1000)]).then(data => {
  console.log(data);
});

// if one promise fails then only error shows
Promise.all([getPosition(), setTimer(1000)]).then(allPromiseData => {
  console.log(allPromiseData);
});

// if one promise fails you still get status of other promises
Promise.allSettled([getPosition(), setTimer(1000)]).then(allPromiseData => {
  console.log(allPromiseData);
});

// let result = 0;

// for (let i = 0; i <100000000; i++) {
//   result += i;
// }

// console.log(result);