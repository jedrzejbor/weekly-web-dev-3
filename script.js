let nav = document.querySelector(".bar");

nav.addEventListener("click", function () {
  document.querySelector(".nav-vertical").classList.toggle("nav-vertical--active");
})


// var swiper = new Swiper('.swiper-container', {
//   effect: 'cube',
//   grabCursor: true,
//   cubeEffect: {
//     shadow: true,
//     slideShadows: true,
//     shadowOffset: 20,
//     shadowScale: 0.94,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//   },
// });
// var swiper = new Swiper('.swiper-container', {
//   effect: 'cube',
//   grabCursor: true,
//   cubeEffect: {
//     shadow: true,
//     slideShadows: true,
//     shadowOffset: 20,
//     shadowScale: 0.94,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//   },
// });




const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14];


const even = number.filter(value => value % 2 === 0);

console.log(even);