document.addEventListener('DOMContentLoaded', () => {
    const botonLogin = document.getElementById('botonLogin');
    const campoCorreo = document.getElementById('campoCorreo');

    botonLogin.addEventListener('click', () => {
        const correoValor = campoCorreo.value.trim();
        if (correoValor) {
            alert(`Bienvenido\n${correoValor}`);
        } else {
            alert("Por favor, ingresa tu correo electrónico.");
        }
    });

    const contadorCarrito = document.getElementById('contadorCarrito');
    const botonesAgregar = document.querySelectorAll('.boton-agregar');
    let contador = parseInt(contadorCarrito.textContent) || 0;

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', () => {
            contador++;
            contadorCarrito.textContent = contador;
        });
    });
});