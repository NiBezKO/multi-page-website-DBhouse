const header = document.querySelector ("header");

window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY 
    
    if(scrollPos > 400) {
        header.classList.add('eclipse');
    } else {
        header.classList.remove('eclipse');
    }
    console.log(scrollPos);
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
    let headerheight = document.querySelector (".header");
    
    //console.log(animBlock);
    if ( animBlock) {
        function animScroll () {
        let windowCenter = (window.innerHeight  + window.scrollY) - headerheight.offsetHeight;
        let siteHeight = window.outerHeight;

        for ( let i = 0; i < animBlock.length; i++ ) {
           let animItem = animBlock[i];
           //console.log(animBlock[i]);
           
           let scrollOffSet = animItem.offsetTop + (animItem.offsetHeight /2);
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
    




 
/* corousel */

/*const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  }); */



/*function corousel () {
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

corousel (); */




//let openButton = document.querySelector (".open__list")
//let careerShow = document.querySelector(".career")


/*let listInner = document.querySelectorAll(".list__inner");
let buttonShow = document.querySelector(".open__list");

for ( let i = 9 ; i < listInner.length; i++) {
listInner[i].style.display = "none";
}

    let countInner = 9;
    for ( buttonShow = 0; buttonShow > 0 ; buttonShow ++) {
        buttonShow.addEventListener("click", function () {
            let listInner = document.querySelectorAll('list__inner');
            countInner += 9;
            if ( countInner <= listInner.length) {
                for (let i = 0; i < countInner; i++) {
                    listInner[i].style.display = "block";
                }
            }
    })
    
};
/*

/*openButton.addEventListener("click", function() {
    openButton.classList.toggle ("_active");
    careerShow.classList.toggle("_active");
}); */

   
    
  

