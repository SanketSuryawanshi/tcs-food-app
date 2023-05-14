AOS.init();

var overlay = document.querySelector('.loading-overlay');
var work_div = document.querySelector('.work_div');

function showLoading() {
	overlay.style.display = 'flex';
}

showLoading();

function hideLoading() {
    overlay.style.display = 'none';
    work_div.classList.toggle('hide');
}


setTimeout(() => {
    hideLoading();
}, 2000);