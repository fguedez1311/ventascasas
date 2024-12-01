document.addEventListener('DOMContentLoaded',function(){
    eventListeners();
    darkMode();
})


function darkMode(){
    const botonDarMode=document.querySelector('.dark-mode-boton')
    botonDarMode.addEventListener('click',function(){
        document.body.classList.toggle('dark-mode')
    })
}
function eventListeners(){

   const mobileMenu=document.querySelector('.mobile-menu')

   mobileMenu.addEventListener('click',navegacionResponsive)
}

function navegacionResponsive(){
    const navegacion=document.querySelector('.navegacion')

    if(navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar')
    }
    else{
        navegacion.classList.add('mostrar')
    }
}