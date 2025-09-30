// Animar títulos das seções e cards
const titles = document.querySelectorAll('section h2');
const cards = document.querySelectorAll('.projeto-card');

function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.9;

    titles.forEach(title => {
        const titleTop = title.getBoundingClientRect().top;
        if(titleTop < triggerBottom) title.style.opacity = '1', title.style.transform = 'translateX(0)';
    });

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom) card.style.opacity = '1', card.style.transform = 'translateY(0)';
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Formulário Formspree com feedback
const form = document.querySelector('.form-contato');
const status = document.querySelector('.form-status');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const data = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if(response.ok){
            status.style.display = 'block';
            form.reset();
        } else {
            alert('Ocorreu um erro, tente novamente.');
        }
    }).catch(error => alert('Erro no envio: ' + error));
});

// Alternar tema claro/escuro
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const icon = toggleBtn.querySelector('i');
    if(document.body.classList.contains('dark-theme')){
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});
