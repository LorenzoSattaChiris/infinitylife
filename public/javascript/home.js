const start_button = document.getElementById('start');

start_button.addEventListener('click', () => {
    const page = 'start';
    window.location.href = `${window.location.origin}/${page}`;
});