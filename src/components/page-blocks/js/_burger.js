const mediaQuery = window.matchMedia('(max-width: 991px)');
const mediaQuery2 = window.matchMedia('(min-width: 991px)');

const hiddenMenu = document.querySelector(".header__menu");
const navMenu = document.querySelector(".main-menu");

const cloneMenu = document.querySelector(".main-menu").cloneNode(true);
let btn = document.querySelector(".header__menu-item--services");
let menu = 0;
let mediaMode = 0;

const burger = document.querySelector(".burger-menu");
if (burger) {
    const e = document.querySelector(".header");
    burger.addEventListener("click", (function(r) {
        if (menu == 0) {
            document.body.classList.toggle("lock"),
                //burger.classList.toggle("open"),
                burger.classList.toggle("burger-menu--open"),
                e.classList.toggle("open");
        } else {
            cloneMenu.classList.toggle("open");
            burger.classList.toggle("burger-menu--open2");
            burger.classList.toggle("burger-menu--open");
            menu = 0;
        }
    }))
}

btn.addEventListener("click", (function(r) {
    if (menu == 0) {
        document.querySelector("body").append(cloneMenu);
        setTimeout(function() {
            cloneMenu.classList.toggle("open");
        }, 0);

        burger.classList.toggle("burger-menu--open");
        burger.classList.toggle("burger-menu--open2");
        menu = 1;
    }
}));

function handleTabletChange(e) {
    if (e.matches) {
        document.querySelector(".main-menu").replaceWith(hiddenMenu);
        hiddenMenu.style.display = "";
        mediaMode = 1;
    }
}

function handleTabletChange2(e) {
    if (e.matches) {
        if (mediaMode == 1) {
            console.log(navMenu);
            document.querySelector(".header__menu").replaceWith(navMenu);
            mediaMode = 0;
        }
    }
}

mediaQuery2.addListener(handleTabletChange2);
handleTabletChange2(mediaQuery2);

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

// #
// sourceMappingURL = .. / sourcemaps / main.min.js.map