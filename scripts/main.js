
// global var
let bgColor = '#000';
let rotate = '180deg';
let scale = 'var(--scale)';


// style of header 
const fadeIn = document.getElementsByClassName('fadeIn');
function showText(){
    
    for (let i = 0; i < fadeIn.length; i++) {
        fadeIn[i].classList.add('showText');

    }
};

window.onload = function(){

showText();
window.scrollTo(0,0);

};


function setBgHeader(){
  bgColor = '#000';
     toggleHeaderBg(bgColor);
     removeFadeInClass();
};



const header  = document.getElementById('header');
// toggle of header bg
function toggleHeaderBg( bgColor){
    if (header){
        header.style.background =  bgColor;
    }else{
        console.log(`${header} is not existe ...`);
    }

};



// removeFadeInClass
function removeFadeInClass(){
      
         for (let i = 0; i < fadeIn.length; i++) {
                fadeIn[i].classList.remove('showText');
        }

};



// toggle menu
const menu = document.querySelector('#menu');
const MainLists = document.querySelector('.MainLists');

let menuVisible = false;
menu.addEventListener("click" , ()=>{
    if (menuVisible== false){
        MainLists.classList.add("menu");
         MainLists.style.display = "block";
         menuVisible = true;
    }else{
        MainLists.style.display = "none";
        menuVisible = false;
    }
});