// DROPDOWN
const btn_dropdown = document.querySelector('.dropdown__btn');
const dropdown_content = document.querySelector('.dropdown__content');

btn_dropdown.addEventListener('click', function () {
    dropdown_content.classList.toggle('active');
})

// MENU FIXED
const btn_menufixed = document.querySelector('.btn__menufixed');
const menu__fixed = document.querySelector('.menu__fixed');
const close__menufixed = document.querySelector('.close__menufixed');

btn_menufixed.addEventListener('click', function () {
    menu__fixed.classList.toggle('active');
})

close__menufixed.addEventListener('click', function () {
    menu__fixed.classList.toggle('active');
})


// SEARCH OPEN
const btn_search = document.querySelector('.search__btn');
const search_content = document.querySelector('.search__content');
const close_search = document.querySelector('.search__content .close-btn');
const overlay = document.querySelector('.overlay');

btn_search.addEventListener('click', function () {
    search_content.classList.toggle('active');
})

close_search.addEventListener('click', function () {
    search_content.classList.toggle('active');
})

// ADD MORE INPUT
const add__more = document.querySelector('.add__more');
const tab_item_form = document.getElementsByClassName('input-group');

add__more.addEventListener('click', function () {
    tab_item_form.append('dzdzdz');
})

