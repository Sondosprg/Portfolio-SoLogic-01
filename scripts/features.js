
// dynamicBtn events
let dynamicBtn = document.querySelector('.up'); 
let position = 'up';

dynamicBtn.addEventListener('click',function(){

 if(scrollY > 500 && position == 'up'){
    scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    })
    position = 'down';
 }else{

    scrollTo({
        top: 5000,
        left:0,
        behavior:"smooth",
    })

     position = 'up';
 }

});




window.onscroll = function () {

    if (scrollY == 0) {
        bgColor ='transparent';
        toggleHeaderBg(bgColor);
        showText();
        dynamicBtn.style.display = "none";

    } else if(scrollY > 500){
   setBgHeader();
    dynamicBtn.style.display = "block";
    }else{
    setBgHeader();
    dynamicBtn.style.display = "none";
    };


};


