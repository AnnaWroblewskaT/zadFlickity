var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {

    cellAlign: 'left',
    contain: true
});

var restart = document.querySelector('.restart');


restart.addEventListener("click", function (event) {

    flkty.selectCell(document.querySelector(".initial"));
});


var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});