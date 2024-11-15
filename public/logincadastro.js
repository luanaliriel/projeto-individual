const container = document.getElementById('container');
const botaoRegistrar = document.getElementById('registrar');
const botaoLogar = document.getElementById('login');

// Registrar - ativa o modo de cadastro
botaoRegistrar.addEventListener('click', () => {
    container.classList.add('active');
});

// Logar - ativa o modo de login
botaoLogar.addEventListener('click', () => {
    container.classList.remove('active');
});