
import '@webcomponents/webcomponentsjs';
import './code-base'; // other polyfill e.g. fetch

import Icon from './assets/face.ico';

const initApp = () => {
  import('./elements/lazy-image.js').then(_ =>{
    const lazyImage = document.createElement('lazy-image');
    lazyImage.setAttribute('src', Icon)
    document.body.appendChild(lazyImage);

    // Test Custom Event
    lazyImage.addEventListener('cat', data => {
      const idObj = Object.assign({}, data.detail); // Object asign! test me on IE :D
      console.log(idObj.id);
    });

  }) // dynamic imports are cool!!!


  // Test fetch 
  fetch('./').then(data =>{
    console.log('Sucess: test fetch');
  })
  .catch(err => {
    console.log('Error: test fetch');
  });
}

// Async await
function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

async function asyncFunction(params) {
  const aPromise = await doubleAfter2Seconds(10);
  console.log('resolved value: ', aPromise);
  console.log('async await for the win!!!');
}


asyncFunction();

initApp();


