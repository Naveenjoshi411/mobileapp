"use strict";
window.addEventListener("DOMContentLoaded",
    function(){

    $("header").textillate({
        loop: false, 
        minDisplayTime: 2000, 
        initialDelay: 2000, 
        autoStart: true, 
        in: { 
           effect: "fadeInLeftBig",
           delayScale: 1.5, 
           delay: 50, 
            sync: false,
            shuffle: true 
        }
        });
   
    $(function(){
    ScrollReveal().reveal("#btn1", { duration: 9000 });
    });
    let popmsg = "YOUR WELCOME !"
    window.alert(popmsg);

    },false
);

const btn1 = document.getElementById("btn1");        
btn1.addEventListener("click",
    function(){
        // n = Math.floor(Math.random()*3);
        
        // switch (n){
        //     case 0:
        //         btn1.textContent   ="Very Happy !!";
        //         btn1.style.color  ="#FF0000";
        //         break;
        //      case 1:
        //          btn1.textContent   = "Happy !!";
        //          btn1.style.color   = "#fff001";
        //      case 2:
        //          btn1.textContent   ="Unhappy!";
        //          btn1.style.color   ="#261e1c";    
        //          break;   
        // }

        let resultText = ["Very Old","old","used","little bit used","!!!"];
        let resultColor = ["#ff0000","#c71585","#ff1493","#ff69b4","#ff8c00","#1e90ff"];
        let resultFontSize = 55;
        let n = Math.floor(Math.random()*resultText.length);
        btn1.textContent = resultText[n];
        btn1.style.color = resultColor;
        btn1.style.fontSize = resultFontSize;

        // snowfall stop
$(document).snowfall("clear");
// jQueryのsnowfall
$(document).ready(function(){
$(document).snowfall({
maxSpeed : 5, // 最大速度
minSpeed : 1, // 最小速度
maxSize : 20, // 最大サイズ
minSize : 1, // 最小サイズ
image : 'img/sakura_hanabira.png'
});
});
   
    },false
); 

setTimeout(
    function(){
        let popmsg = " YOUR WELCOME !";
        window.alert(popmsg);
    },"5000"
);
