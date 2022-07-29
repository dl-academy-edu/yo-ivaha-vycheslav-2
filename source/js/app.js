window.addEventListener('DOMContentLoaded', function () {

});


var popup = document.querySelector('.popup');
var popupBtn = document.querySelector('.banner_js');
var popupClose = document.querySelector('.popup_close');
var inputName = popup.querySelector('input');


console.log(inputName);


popupBtn.addEventListener('click', function () {
    popup.classList.add('popup_open');
    inputName.focus();
})

popupClose.addEventListener('click', function () {
    popup.classList.remove('popup_open');
    popupBtn.focus();
})

window.addEventListener('keydown', function (event) {
    if (event.code === "Escape") {
        popup.classList.remove('popup_open');
        popupBtn.focus();
    }
})