document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('container-n');

    document.querySelectorAll('.open-auth').forEach(btn =>
        btn.addEventListener('click', () => overlay.style.display = 'flex')
    );

    overlay.querySelector('.auth-close').onclick = () => {
        overlay.style.display = 'none';
    };
});

