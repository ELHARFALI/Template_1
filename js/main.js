const menu = document.querySelector('.icon');
const lists = document.querySelector('ul');


menu.addEventListener('click', function () {
    lists.classList.toggle('active')
})