const data_btn = document.querySelectorAll('[data-training-btn]');

let param = window.location.href.split("?")[1];

if (param) localStorage.setItem('training_key', param)

// for(let element of data_btn) {

//     element.addEventListener('click', () => {
//         localStorage.setItem('training_key', element.dataset.trainingBtn)
//     })
// }

