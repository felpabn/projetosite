const toggle = document.querySelector('.lines');
const hamburguer = document.querySelector('.hamburguer');

toggle.addEventListener('click', () => {
    hamburguer.classList.toggle('--active');
});
