document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.sidenav');
  var instancessidenav = M.Sidenav.init(elems);
})

document.addEventListener('DOMContentLoaded', function () {
  let elemss = document.querySelectorAll('.dropdown-trigger');
  var instancesdrop1 = M.Dropdown.init(elemss, {
    alignment: 'right',
    belowOrigin: true,
  });
});


document.addEventListener('DOMContentLoaded', function () {
  var carousell = document.querySelector('.carousel.carousel-slider');
  var instancescaro = M.Carousel.init(carousell, {
    fullWidth: true
  });
});