
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




// toggle of header bg
function toggleHeaderBg( bgColor){
document.getElementById('header').style.background =  bgColor;

};



// removeFadeInClass
function removeFadeInClass(){
      
         for (let i = 0; i < fadeIn.length; i++) {
                fadeIn[i].classList.remove('showText');
        }

};


