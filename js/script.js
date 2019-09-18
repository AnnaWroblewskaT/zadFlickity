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

window.initMap = function () {


    // var uluru = {
    //     lat: -18.344,
    //     lng: 10.036
    // };

    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 4,
            center: slides[0].coords
        });

    var marker = [];

    for (let i = 0; i < slides.length; i++) {
        marker.push(new google.maps.Marker({
            position: slides[i].coords,
            map: map
        }))

        marker[i].addListener("click", function () {
            flkty.select(i);
        })
    }


}