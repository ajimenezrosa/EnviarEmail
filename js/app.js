// El spinner lo tomamos de un sitio web llamado https://tobiasahlin.com/spinkit/


// Variables

const btnEnviar = document.querySelector('#enviar');
const btnReset  = document.querySelector('#resetBtn');

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

    // Resetear Formulario
    btnReset.addEventListener('click', resetearFormulario);

    //Enviar Email
    formulario.addEventListener('submit' , enviarEmail);

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


// envia el email
function enviarEmail(e) {
    e.preventDefault();

    // Mostrar el Spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    // Despues de tres segundos ocultar el spinner y mostrar el mensaje
    // Una forma es setTimeout
    // este se ejecutara tres segundos despues y terminara, 
    // ojo los 3 segundos es porque pusimos 3000 , cada mil es un segundo
    const parrafo = document.createElement('p');
    setTimeout( () => {
            spinner.style.display = 'none';
            // mensaje que dice que se envio correctamente
            parrafo.textContent = 'El mensaje se envio correctamente';
            parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500' , 'text-white', 'font-bold', 'uppercase')
            
            // inserta el parrafo antes del spinner
            formulario.insertBefore(parrafo , spinner);

    } ,3000);


    setTimeout( () => {
        parrafo.remove();
        resetearFormulario();
    },5000)
    
    
    // otra forma es setInterval 
    // esta se ejecutara cada 6 segundos
    // setInterval( () => {
    //     console.log('Esta funcion se ejecuta despues de 6 segundos.');

    // }, 6000)

}




// funcion que resetea el formulario

function resetearFormulario() {
    formulario.reset();
    iniciarApp();
}