import { useState } from 'react';
import './App.css';

import { FazerPer } from '../src/Components/FazerPer'; 

function App() {
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



  const [showElement, setShowElement] = useState(false)
  const showOrHide = () => setShowElement(true)
    setTimeout(function() {
      console.log("opacity");

      showOrHide.style.opacity = 0;
    }, 4000)

  const [qualPergun, setQualPergun] = useState("");
  const pergunta = qualPergun;
  
  return (
    <div className="container">
      <img
        src="https://static.wixstatic.com/media/5fb0d1_159e06a06085497ab368ce408a7d9661~mv2.gif"
        alt="SpaceExploration"
      />

      <h1>Vou revelar seu destino!</h1>
      <p>Clique em fazer pergunta para que seu <br /> destino seja revelado.</p>


      <input
        className="inputPergunta"
        type="text"
        placeholder="Digite sua pergunta"
        onChange={e => setQualPergun(e.target.value)}
      />

      <button
        className="buttonPerguntar"
        type="button"
        onClick={showOrHide}
        >
          Fazer Pergunta
      </button>

      {showElement ? <p className='Ip2'>{pergunta}</p> : null}
      {showElement ? <FazerPer respostas={respostas} /> : null}
      
    </div>
  )
}

export default App;
