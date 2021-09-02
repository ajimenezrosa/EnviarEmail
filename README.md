
![](https://i.ytimg.com/vi/H6kVKoq3OOk/maxresdefault.jpg)
# Enviar Email.


~~~javascript
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
~~~

#### Como siempre declaramos los Listener y les asignamos las variables. para esto caso utilizaremos unos unas clases de ***javascritp*** llamadas ***css/tailwind.min.css***  los codigos de esta clase se veran de la siguiente forma.
~~~javascript
btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
~~~