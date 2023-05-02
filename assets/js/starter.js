const data_btn = document.querySelectorAll('[data-training-btn]');

let param = window.location.href.split("?")[1].split("-kopa")[0];

if (param) localStorage.setItem('training_key', param)


