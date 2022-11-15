const header = document.querySelector ("header");

window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY 
    
    if(scrollPos > 400) {
        header.classList.add('eclipse');
    } else {
        header.classList.remove('eclipse');
    }
    
});

/* burger menu */

function burger () {
    let burger = document.querySelector (".burger");
    let nav = document.querySelector(".nav");
    
    burger.addEventListener ('click', function () {
        burger.classList.toggle("_active");
        nav.classList.toggle("_active");
    })
    
}

burger();

/* changing intro img */
/*

poster.style.backgroundImage = 'url("img/introBG3.jpg")';*/

(function() {
    let poster = document.querySelector(".intro");
    let i = 0;
    let src = [
        'img/intro-img.jpg',
        'img/introBG2.jpg',
        'img/introBG3.jpg',
    ];
    let l = src.length;
    let t;
    
    for(i = 0; i < l; i++) {
        let img = new Image();
        img.src = src[i];
        img.onload = function() {
            delete this;
        }
    }
    
    i = 0;
    t = setInterval(function() {
        if(i === l){
            i = 0;
        }
        poster.style.background = 'url(' + src[i] + ') center  no-repeat';
        poster.style.backgroundSize = 'cover';
        i++;
    }, 3000);
})();

/* modal */

document.addEventListener ('DOMContentLoaded', function () { 
let modalWindow = document.querySelector ('.modal');
let btnOpenModal = document.querySelector ('.open__modal');
let closeModal = document.querySelector ('.modal__content_close'); 

if (modalWindow, btnOpenModal, closeModal ) {

    btnOpenModal.addEventListener('click', function() {
            modalWindow.style.visibility = 'visible';
            modalWindow.style.opacity= '1.0';
            document.body.style.overflow = 'hidden';
            
        })
        
        closeModal.addEventListener('click', function () {
            modalWindow.style.visibility = 'hidden';
            modalWindow.style.opacity= '0';
            document.body.style.overflow = '';
        })
}

})


/* show list career */

function showListProcess () {
    listInner = document.querySelectorAll(".list__inner");
    buttonShow = document.querySelector(".open__list");
    for (let i=9;  i<listInner.length; i++) {
        listInner[i].style.display = "none";
    }
    
    const openCareer = document.getElementById ("openbtn");
    if (openCareer) {
        let countD = 9;
        buttonShow.addEventListener("click", function() {
            let listInner = document.querySelectorAll(".list__inner");
            countD += 9;
            if (countD <= listInner.length){
                for(let i=0; i<countD ;i++){
                    listInner[i].style.display = "block";
                }
            }
    
        })
    }
}
    
showListProcess ();

/* show list gallery */

 function showGallery () {
    galleryList = document.querySelectorAll(".gallery__inner_item");
    buttonShow = document.querySelector(".open__list");
    for (let i=6;  i < galleryList.length; i++) {
        galleryList[i].style.display = "none";
    }
    
    const galleryInner = document.getElementById ("galleryInner");
    if (galleryInner) {
        let countD = 6;
        buttonShow.addEventListener("click", function() {
            let galleryList = document.querySelectorAll(".gallery__inner_item");
            countD += 6;
            if (countD <= galleryList.length){
                for(let i=0; i<countD ;i++){
                    galleryList[i].style.display = "block";
                }
            }
        console.log(buttonShow);
        })
    }  
}
    
showGallery ();


/* show list news */

function showNews () {
    galleryList = document.querySelectorAll(".gallery__inner_item");
    buttonShow = document.querySelector(".open__list");
    for (let i=6;  i < galleryList.length; i++) {
        galleryList[i].style.display = "none";
    }
    
    const openNews = document.getElementById ("openbtn");
    if (openNews) {
        let countD = 6;
        buttonShow.addEventListener("click", function() {
            let galleryList = document.querySelectorAll(".gallery__inner_item");
            countD += 6;
            if (countD <= galleryList.length){
                for(let i=0; i < countD ;i++){
                    galleryList[i].style.display = "block";
                }
            }
        
        })
    }  
}

showNews (); 


/* animated block */


document.addEventListener ('DOMContentLoaded', function () {
    let animBlock = document.querySelectorAll (".animated__block");
    let headerHeight = document.querySelector (".header");
    
    //console.log(animBlock);
    if ( animBlock) {
        function animScroll () {
        let windowCenter = (window.innerHeight  + window.scrollY) - headerHeight.offsetHeight;
        let siteHeight = window.outerHeight;

        for ( let i = 0; i < animBlock.length; i++ ) {
           let animItem = animBlock[i];
           //console.log(animBlock[i]);
           
           let scrollOffSet = animItem.offsetTop /*+ (animItem.offsetHeight / 2)*/;
           if (  windowCenter > scrollOffSet) {
            animItem.classList.add ("_active");
           } else {
            animItem.classList.remove ("_active");
           }
           
        };
        
    };
        
    window.addEventListener ("scroll" , function () {
        let srollTop = window.scrollY;
        animScroll ();    
    }) 
    
    };
});
    




function corousel () {
    const corousel = document.getElementById ("slider")
    if (!corousel) {
        document.addEventListener.remove
    } else {
        document.addEventListener('DOMContentLoaded', function() {
            let elms = document.querySelectorAll('.slider');
            for (let i = 0, len = elms.length; i < len; i++) {
              new ChiefSlider(elms[i]);
            }
          });
    }
    
}

corousel (); 

/* tabs  */

const tabsNavs   = document.querySelectorAll(".comments__item");
const tabsItems = document.querySelectorAll(".tab");
console.log(tabsItems)

tabsNavs.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if ( ! currentBtn.classList.contains("_active")) {
          
            tabsNavs.forEach(function (item) {
                item.classList.remove("_active");
            })
    
            tabsItems.forEach(function(item) {
                item.classList.remove("_active");
            })
            
            currentBtn.classList.add ("_active");
            currentTab.classList.add ("_active");
        }

        
    })
})







   
    
  

