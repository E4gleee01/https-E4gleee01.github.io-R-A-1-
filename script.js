// Contador desde 01/01/2025
function atualizarContador() {
  const inicio = new Date("2025-01-01T00:00:00");
  const agora = new Date();
  const diff = agora - inicio;

  const meses = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
  const dias = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  const horas = agora.getHours();
  const minutos = agora.getMinutes();
  const segundos = agora.getSeconds();

  document.getElementById("meses").textContent = meses;
  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}
setInterval(atualizarContador, 1000);

// Abrir imagem em popup
function abrirImagem(img) {
  document.getElementById("imagem-ampliada").src = img.src;
  document.getElementById("popup").style.display = "flex";
}

// Fechar popup
function fecharImagem() {
  document.getElementById("popup").style.display = "none";
}

// Tocar ou parar a música
let tocando = false;
function tocarOuParar() {
  const musica = document.getElementById("musica");
  if (!tocando) {
    musica.play();
    tocando = true;
  } else {
    musica.pause();
    tocando = false;
  }
}

// Modal Aventurinha
const btnAbrir = document.getElementById("btnAbrirAventurinha");
const modal = document.getElementById("modalAventurinha");
const btnMostrar = document.getElementById("btnMostrarConteudo");
const conteudo = document.getElementById("conteudoAventurinha");
const btnFechar = document.getElementById("btnFecharModal");

btnAbrir.addEventListener("click", () => {
  modal.style.display = "flex";
  conteudo.style.display = "none"; // esconde conteúdo toda vez que abrir
});

btnMostrar.addEventListener("click", () => {
  conteudo.style.display = "block";
});

btnFechar.addEventListener("click", () => {
  modal.style.display = "none";
});

// Função para criar corações flutuantes
function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');
  coracao.style.left = Math.random() * 100 + 'vw';
  const size = 15 + Math.random() * 15;
  coracao.style.width = size + 'px';
  coracao.style.height = size + 'px';

  document.body.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 4000);
}
setInterval(criarCoracao, 600);
