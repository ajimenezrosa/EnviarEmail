// Variables

const btnEnviar = document.querySelector('#enviar');

removeEventListener();
function removeEventListener() {
    document.addEventListener('DOMContentLoaded' , iniciarApp);
}



// Funciones

function iniciarApp() {
    console.log('Iniciando')
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');

}


