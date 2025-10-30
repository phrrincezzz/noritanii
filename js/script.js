document.addEventListener('DOMContentLoaded',()=> {
const navLinks = document.querySelectorAll ('nav a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener ('click', (e)=>{
        e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);

    if (target) {
    target.scrollIntoView ({behavior:'smooth', block:'start'});
    target.setAttribute('tabindex', '-1');
    target.focus({preventScroll: true});
    }
});
});
});

 const form = document.querySelector('form');
  if (form) {
    const msgWrap = document.createElement('div');
    msgWrap.id = 'form-message';
    msgWrap.style.marginTop = '12px';
    form.after(msgWrap);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');
      const errors = [];

      if (!name.value.trim()) errors.push('Please enter your name.');
      if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) errors.push('Please enter a valid email.');
      if (!message.value.trim()) errors.push('Message cannot be empty.');

      msgWrap.innerHTML = '';
      if (errors.length) {
        msgWrap.innerHTML = `<div class="error">${errors.join('<br>')}</div>`;
        msgWrap.querySelector('.error').style.color = '#8b0000';
      } else {
        msgWrap.innerHTML = `<div class="success">🌱 Thank you, ${escapeHtml(name.value)}! Your message has been received.</div>`;
        msgWrap.querySelector('.success').style.color = '#2c5f2d';
        form.reset();
      }
    });
  }