// Formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = this;
    const formData = {
        nome: form.querySelector('input[type="text"]').value,
        email: form.querySelector('input[type="email"]').value,
        mensagem: form.querySelector('textarea').value
    };

    // Envia por email usando um serviço (FormSubmit é gratuito)
    const encodedEmail = 'reinaldomaracas@gmail.com';
    const subject = `Nova mensagem de ${formData.nome}`;
    const body = `Nome: ${formData.nome}%0AEmail: ${formData.email}%0A%0AMensagem:%0A${formData.mensagem}`;
    
    // Alternativa: abrir o email do navegador
    window.location.href = `mailto:${encodedEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Limpar formulário
    form.reset();
    alert('Mensagem enviada! Entraremos em contato em breve.');
});

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Função para ativar link ativo da navegação
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Animação de entrada dos elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .city, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});