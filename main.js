const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

const datasObjetivos = [
  new Date("2026-10-05T00:00:00"),
  new Date("2026-12-15T00:00:00"),
  new Date("2027-02-01T00:00:00"),
  new Date("2027-04-10T00:00:00"),
];

function ativaAba(indice) {
  for (let j = 0; j < botoes.length; j++) {
    botoes[j].classList.remove("ativo");
    textos[j].classList.remove("ativo");
  }

  botoes[indice].classList.add("ativo");
  textos[indice].classList.add("ativo");
}

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    ativaAba(i);
  };
}

function calculaTempo(tempoObjetivo) {
  const tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;

  if (tempoFinal <= 0) {
    return "Objetivo concluído";
  }

  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  return (
    dias +
    " dias " +
    horas +
    " horas " +
    minutos +
    " minutos " +
    segundos +
    " segundos"
  );
}

function atualizaContadores() {
  contadores.forEach((contador, index) => {
    const tempoRestante = calculaTempo(datasObjetivos[index]);
    contador.textContent = tempoRestante;
  });
}

atualizaContadores();
setInterval(atualizaContadores, 1000);
