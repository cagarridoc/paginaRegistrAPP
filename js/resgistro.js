window.onload = function() {
    var boton = document.getElementById('guau');
    var imagen = document.getElementById('miau');
    if(navigator.userAgent == "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" || navigator.userAgent == "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 OPR/104.0.0.0" || navigator.userAgent == "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0")
    {imagen.style.display = 'block'}
    else{boton.style.display = 'block'}
  };
  
const crearcuenta = document.querySelector('#registro');
const correo = document.querySelector('#usuario');

const ate = document.querySelector('#atencion');

crearcuenta.addEventListener('submit', (evento) => {
    evento.preventDefault();
    swal({
        title: "Registro completado",
        text: `Revice su correo ${correo.value} para completar la verificación`,
        icon: "success",
        button: "Vale"
    });
})
