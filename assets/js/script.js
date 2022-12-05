// DROPDOWN
const btn_dropdown = document.querySelector('.dropdown__btn');
const dropdown_content = document.querySelector('.dropdown__content');
const overlay = document.querySelector('.overlay');
const menu__item = document.querySelectorAll('.menu__item');
const search__input = document.querySelector('#search__input');
search__input.focus();


// MENU DEROULANT
menu__item.forEach(element => {

    element.addEventListener('click' , function() {
        menu__item.forEach(element2 => {
            if (element2.matches('.active')) {       
                element2.classList.remove('active');
            }            
        })
        element.classList.add('active');
    })
});


btn_dropdown.addEventListener('click', function () {
    dropdown_content.classList.toggle('active');
})


// MENU FIXED
const btn_menufixed = document.querySelector('.btn__menufixed');
const menu__fixed = document.querySelector('.menu__fixed');
const close__menufixed = document.querySelector('.close__menufixed');

btn_menufixed.addEventListener('click', function () {
    menu__fixed.classList.toggle('active');
    overlay.classList.add('active');
})

close__menufixed.addEventListener('click', function () {
    menu__fixed.classList.toggle('active');
    closeMenuFixed();
})

function closeMenuFixed() {
    menu__fixed.classList.remove('active');
    overlay.classList.remove('active');
}

// OVERLAY
// overlay.addEventListener('click', function () {
//     dropdown_content.classList.remove('active');
// })


// SEARCH OPEN
const btn_search = document.querySelector('.search__btn');
const search_content = document.querySelector('.search__content');
const close_search = document.querySelector('.search__content .close-btn');

btn_search.addEventListener('click', function () {
    search_content.classList.toggle('active');
})

close_search.addEventListener('click', function () {
    search_content.classList.toggle('active');
    search__input.focus();
})


document.addEventListener('click', function (event) {
    if (event.target.matches('.close__menufixed') || event.target.matches('.btn__menufixed')  ||  event.target.matches('.menu__fixed')) {
        console.log("zezsssssssss");
    }else{
        closeMenuFixed()
    }
    console.log(event.target.parentNode);
    
})