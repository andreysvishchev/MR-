const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {

  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');

});


const tabBtn = document.querySelectorAll('.menu__btn');
const tabContent = document.querySelectorAll('.menu__content');

tabBtn.forEach((item) =>
  item.addEventListener('click', function (e) {
    e.preventDefault();

    const id = e.target.getAttribute('href').replace('#', '')

    tabBtn.forEach((child) => child.classList.remove('active'))

    tabContent.forEach((child) => child.classList.remove('active'))

    item.classList.add('active')

    document.getElementById(id).classList.add('active')
  })
);
