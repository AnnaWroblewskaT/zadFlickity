var slidesTemp = document.getElementById('slide-template').innerHTML;

Mustache.parse(slidesTemp);

var slidesList = '';

for (var i = 0; i < slides.length; i++) {

    slidesList += Mustache.render(slidesTemp, slides[i]);
}



var container = document.getElementById('mainCarousel');

container.insertAdjacentHTML('beforeend', slidesList);

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {

    cellAlign: 'left',
    contain: true,
    hash: true
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