const botoes = document.querySelectorAll(".botao");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
  };
}

botoes.forEach(botao => {
  botao.addEventListener('click', function() {
    // Remove classe 'ativo' de todos os botões
    botoes.forEach(b => b.classList.remove('ativo'));
    // Adiciona classe 'ativo' apenas ao botão clicado
    this.classList.add('ativo');
  });
});
