const navEL =document.querySelector('.navbar')
window .addEventListener('scroll' ,()=>{
    if(window.scrollY >=124){
          navEL.classList.replace('navbar-default','navbar-scroll');
    }

}); 