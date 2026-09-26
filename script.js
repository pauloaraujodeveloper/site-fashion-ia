/* FASHION — interações (menu mobile + newsletter) */
(function () {
  'use strict';

  /* Menu mobile */
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');

  function closeMenu() {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Abrir menu');
  }

  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });

  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 900) closeMenu();
  });

  /* Newsletter */
  var form = document.getElementById('nlForm');
  var email = document.getElementById('nlEmail');
  var msg = document.getElementById('nlMsg');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var value = email.value.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      msg.textContent = 'Please enter a valid email address.';
      msg.classList.add('error');
      email.focus();
      return;
    }

    msg.textContent = 'Thanks! You joined the shopping community.';
    msg.classList.remove('error');
    form.reset();
  });
})();
