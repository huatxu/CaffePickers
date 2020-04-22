var principals = document.getElementsByClassName("principal");
var buttonUp = document.getElementsByClassName("button-go-up")[0];
var buttonMenu = document.getElementsByClassName("open-menu")[0];
var elementsMenu = document.getElementsByClassName("menu-item");
var shopItems = document.getElementsByClassName("product-data");
var titleLink = document.getElementsByClassName("title-container")[0].getElementsByTagName("h1")[0];
var exitProduct = document.createElement("div");
var slides = document.getElementsByClassName("slide");
exitProduct.classList.add("exit-product");
exitProduct.innerHTML = "<i class=\"fas fa-times button\"></i>";
principals[0].appendChild(exitProduct);
document.getElementById("year").innerHTML = new Date().getFullYear();
var firstChange = 650;
var n_slide = 0;

function checkSlides() {
    if (n_slide < 0) {
        n_slide = slides.length - 1;
    } else if (n_slide > slides.length - 1) {
        n_slide = 0;
    }
    for (var i = 0; i < slides.length; i++) {
        if (n_slide == i) {
            slides[i].classList.add("show");
        } else {
            slides[i].classList.remove("show");
        }
    }
}

window.onscroll = function() {
    if (window.innerWidth > firstChange) {
        if (principals[0].offsetTop - 60 < window.pageYOffset) {
            buttonUp.classList.add("show");
        } else {
            buttonUp.classList.remove("show");
        }
    }
};

function openMenu() {
    if (innerWidth < firstChange) {
        for (var i = 0; i < elementsMenu.length; i++) {
            if (!elementsMenu[i].classList.contains("show")) {
                elementsMenu[i].classList.add("show");
            } else {
                elementsMenu[i].classList.remove("show");
            }
            elementsMenu[i].onclick = openMenu;
        }
    }
}

function openItem() {
    if (window.innerWidth < firstChange) {
        window.scrollTo(0, principals[0].offsetTop - 60);
    } else {
        window.scrollTo(0, principals[0].offsetTop);
    }
    for (var i = 0; i < shopItems.length; i++) {
        shopItems[i].parentNode.classList.add("non-selected");
        shopItems[i].parentNode.classList.remove("selected");
    }
    exitProduct.style.display = "block";
    this.parentNode.classList.remove("non-selected");
    this.parentNode.classList.add("selected");
}

function goBackShop() {
    for (var i = 0; i < shopItems.length; i++) {
        shopItems[i].parentNode.classList.remove("non-selected");
        shopItems[i].parentNode.classList.remove("selected");
    }
    this.style.display = "none";
}

function goUpFallback() {
    $('html, body').animate({
        scrollTop: ($("html").offset().top)
    }, 900, function() {});
}

var num_slide = 0;

document.getElementsByClassName("slider")[0]

for (var i = 0; i < shopItems.length; i++) {
    shopItems[i].onclick = openItem;
}

$("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: ($(hash).offset().top - 60)
        }, 800, function() {});
    }
    ($(hash).offset().top - 60)
    window.scrollTo(($(hash).offset().top - 60));
});


document.getElementsByClassName("arrow-left")[0].onclick = function() {
    n_slide--;
    checkSlides();
}
document.getElementsByClassName("arrow-right")[0].onclick = function() {
    n_slide++;
    checkSlides();
}


buttonUp.onclick = goUpFallback,
exitProduct.onclick = goBackShop;
buttonMenu.onclick = openMenu;
titleLink.onclick = goUpFallback;
window.onresize = checkScreen;