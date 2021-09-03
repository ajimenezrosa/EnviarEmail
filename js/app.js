// Variables

const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');



// Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


removeEventListener();
function removeEventListener() {
    // Cuando la App Arranca
    document.addEventListener('DOMContentLoaded' , iniciarApp);

    // Campos del Formulario
    email.addEventListener('blur' , validarFormulario);
    asunto.addEventListener('blur' , validarFormulario);
    mensaje.addEventListener('blur' , validarFormulario);
}



// Funciones

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');

}


function validarFormulario(e) {
    // console.log(e.target.value);
    if(e.target.value.length > 0) {

        // Elimina los Errores.
        const  error = document.querySelector('p.error');
        if(error){
            error.remove();
        }
     
        e.target.classList.remove('border' , 'border-red-500');
        e.target.classList.add('border' , 'border-green-500');
    } else {
        // e.target.style.borderBottomColor = 'red';
        e.target.classList.add('border' , 'border-red-500');
        MostrarError("Todos los campos son Obligatorios");
        
    }
    
    if(e.target.type === 'email') {
        const er =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(er.test(e.target.value)) {
            console.log('este es un falso')
            e.target.classList.remove('border' , 'border-red-500');
            e.target.classList.add('border' , 'border-green-500');
            // MostrarError("Este no es un email Valido");
        } else {
            
            MostrarError("Email no Valido!!");
            e.target.classList.remove('border' , 'border-green-500');
            e.target.classList.add('border' , 'border-red-500');

        }

        

    }

    const er1 =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(er1.test(email.value) && asunto.value !== '' && mensaje.value !== ''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
        console.log('Pasaste la validacion');
    } else {
        btnEnviar.disabled = true;
        btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');

    }

}





function MostrarError(mensaje) {
    console.log('Mostrar Error.');
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border',  'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5' , 'text-center','error' );
 

    const errores = document.querySelectorAll('.error');
    // agregar el mensaje de error al formulario

    if(errores.length === 0) {
        formulario.appendChild(mensajeError);
    }
        

}