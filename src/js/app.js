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
    //    Muestra Campos condicionales
    const metodoContacto=document.querySelectorAll('input[name="contacto[contacto]"]')

    metodoContacto.forEach(input=>input.addEventListener('click',mostrarMetodoContacto))
    

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

function mostrarMetodoContacto(e){
   const contactoDiv=document.querySelector('#contacto')
   if(e.target.value==='telefono'){
        contactoDiv.innerHTML=`
            <label for="telefono">Numero Teléfono</label>
            <input type="tel" placeholder="Tu Teléfono" id="telefono" name="contacto[telefono]">
             <p>Elija la fecha y la hora para la llamada</p>

            <label for="fecha">Fecha</label>
            <input type="date" id="fecha" name="contacto[fecha]">

            <label for="hora">Hora:</label>
            <input type="time" id="hora"  name="contacto[hora]">

        `
   }
   else{
         contactoDiv.innerHTML=`
            <label for="email">E-mail</label>
            <input type="email" placeholder="Tu Email" id="email" name="contacto[email]" >
         
         
         `
   }

}