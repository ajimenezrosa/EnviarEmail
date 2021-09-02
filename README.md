
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

# Validar Campos


# validacion de email.
#### los email son validados utilizando expresiones regulares. esto hacer mucho mas facil y rapido la validacion de los email ademas es mas seguro, pues valida que contenga un @ y un dominio de email.

~~~javascript
 const er =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


        //Luego de estso lo validamos de la siguiente forma....
        //

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


 ~~~



