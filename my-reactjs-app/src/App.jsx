import './App.css'

function App() {
  
  const elementoResposta = document.querySelector("#resposta")
  const inputPergunta = document.querySelector("#inputPergunta")
  const buttonPerguntar = document.querySelector('#buttonPerguntar')
  const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim!",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
  ]

  // clicar em fazer pergunta
  function fazerPergunta() {

    if(inputPergunta.value == "") {
      alert("Digite sua pergunta")
      return
    }

    buttonPerguntar.setAttribute("disabled", true)

    const pergunta = "<div>" + inputPergunta.value + "</div>"

    // gerar numero aletorio
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

    elementoResposta.style.opacity = 1;

    // sumir a resposta depois de 3 segundos
    setTimeout(function() {
      elementoResposta.style.opacity = 0;
      buttonPerguntar.removeAttribute("disabled")
    }, 3000)
  }


  return (
    <div id="container">
      <img
        src="https://static.wixstatic.com/media/5fb0d1_159e06a06085497ab368ce408a7d9661~mv2.gif"
        alt="SpaceExploration"
      />
      <h1>Vou revelar seu destino!</h1>
      <p>Clique em fazer pergunta para que seu destino seja revelado.</p>
      <input id="inputPergunta" value={""} type="text" placeholder="Digite sua pergunta" />
      <button id="buttonPerguntar" onClick={fazerPergunta()}>Fazer Pergunta</button>

      <h3 id="resposta"></h3>
    </div>
  )
}

export default App;
