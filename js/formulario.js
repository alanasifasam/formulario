(function () {
  'use strict';

  const txtTitulo = document.getElementById('txtTitulo');
  const btn = document.getElementById('btn');
  const formCadastro = document.querySelector('.formCadastro');

  /* btn.addEventListener('click', function (e) {
  });*/

  formCadastro.addEventListener('submit', function (e) {
    console.log(txtTitulo.value);
    if (!txtTitulo.value) {
      showErrorMessage('Preencha todos os campos', function () {
        txtTitulo.focus();
      });
      e.preventDefault();
      txtTitulo.focus();
    }
  });

  const feedbackMessage = document.getElementById('feedbackMessage');
  const feedbackMessageCloseBtn =
    feedbackMessage.getElementsByTagName('button')[0];

  function showErrorMessage(msg, cb) {
    //alert(msg);
    //feedbackMessage.setAttribute('class', 'show');
    feedbackMessage.classList.add('show');
    feedbackMessage.getElementsByTagName('p')[0].textContent = msg;

    feedbackMessageCloseBtn.focus();

    function hideErrorMessage() {
      console.log('clicando close');
      feedbackMessage.classList.remove('show');
      feedbackMessageCloseBtn.removeEventListener('click', hideErrorMessage);
      feedbackMessageCloseBtn.removeEventListener(
        'keyup',
        pressedkeyboardOnBtn,
      );
      if (typeof cb === 'function') {
        cb();
      }
    }

    function pressedkeyboardOnBtn(e) {
      console.log(e.keyCode);
      console.log(e.key);
      console.log(e);
      if (e.keyCode === 27) {
        hideErrorMessage();
      }
    }

    feedbackMessageCloseBtn.addEventListener('click', hideErrorMessage);

    feedbackMessageCloseBtn.addEventListener('keyup', pressedkeyboardOnBtn);
  }

  const txtDescricao = document.getElementById('txtDescricao');
  const contadorContainer = document.getElementById('contador');
  const resta = contadorContainer.getElementsByTagName('span')[0];
  const maxima = txtDescricao.maxLength;
  mostrarNumero(maxima);
  contadorContainer.removeAttribute('style');

  function checkLength() {
    let numeroLetrasDigitadas = this.value.length;
    let caractersRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas);
    mostrarNumero(caractersRestantes);
  }

  function mostrarNumero(n) {
    resta.textContent = n;
  }

  txtDescricao.addEventListener('input', checkLength);

  btn.disabled = true;
  const chkAceito = document.getElementById('chkAceito');
  chkAceito.addEventListener('change', function () {
    btn.disabled = !this.checked;
  });
})();
