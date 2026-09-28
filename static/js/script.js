document.addEventListener('DOMContentLoaded', () => {
    // Incrementar libros al presionar '+'
    const contador = document.getElementById('contador');
    const botones = document.querySelectorAll('.btn-agregar');
    let total = 0;

    botones.forEach(btn => {
        btn.addEventListener('click', () => {
            total++;
            contador.textContent = total;
        });
    });

    // Acción de ingresar email
    const btnIngresar = document.getElementById('btnIngresar');
    const emailInput = document.getElementById('email');

    btnIngresar.addEventListener('click', () => {
        const email = emailInput.value.trim();
        if (email) {
            alert(`Bienvenido\n${email}`);
        } else {
            alert("Por favor, ingresa tu correo electrónico.");
        }
    });
});