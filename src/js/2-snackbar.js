import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  
  const delay = Number(event.currentTarget.elements.delay.value);
  const state = event.currentTarget.elements.state.value;

  createPromise(delay, state)
    .then((delay) => {
      iziToast.success({
        title: 'OK',
        titleColor: '#fff',
        titleSize:'16',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        messageColor: '#fff',
        messageSize:'16',
        backgroundColor: '#59a10d',
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: 'Error',
        titleColor: '#fff',
        titleSize:'16',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        messageColor: '#fff',
        messageSize:'16',
        backgroundColor: '#ef4040',
      });
    });

   event.target.reset();
});


function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay); 
      } else {
        reject(delay);  
      }
    }, delay);
  });
}