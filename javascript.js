function toggleMenu() {
    const menu = document.querySelector('.tab-bar');
    const hamburger = document.querySelector('.hamburger');
    const icon = hamburger.querySelector('.icon');

    menu.classList.toggle('show');

    if (menu.classList.contains('show')) {
        icon.textContent = '×';
        icon.classList.add('close-icon');
    } else {
        icon.textContent = '☰';
        icon.classList.remove('close-icon');
    }
}

document.querySelectorAll('.tab-bar a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.tab-bar');
        const icon = document.querySelector('.hamburger .icon');

        menu.classList.remove('show');
        icon.textContent = '☰';
        icon.classList.remove('close-icon');
    });
});

function openPopup() {
    document.getElementById('emailPopup').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    document.getElementById('emailPopup').style.display = 'none';
    document.body.style.overflow = '';
}

window.addEventListener('click', (event) => {
    const popup = document.getElementById('emailPopup');

    if (event.target === popup) {
        closePopup();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closePopup();
    }
});
