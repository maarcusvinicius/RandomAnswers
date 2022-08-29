import { fazerPergunta } from '../src/Components/FazerPer';
import './App.css';

function App() {

  const elementoResposta = document.querySelector('#resposta')
  const inputPergunta = document.querySelector("#inputPergunta")
  const buttonPerguntar = document.querySelector('#buttonPerguntar')
  const respostas = [
    "PEgouuuuuuuuuu!"
  ]

  return (
    <div className="container">
      <img
        src="https://static.wixstatic.com/media/5fb0d1_159e06a06085497ab368ce408a7d9661~mv2.gif"
        alt="SpaceExploration"
      />
      <h1>Vou revelar seu destino!</h1>
      <p>Clique em fazer pergunta para que seu destino seja revelado.</p>
      <input className="inputPergunta" type="text" placeholder="Digite sua pergunta" />
      <button className="buttonPerguntar" type="button" onClick={fazerPergunta}>Fazer Pergunta</button>

      <h3 className="resposta"></h3>
    </div>
  )
}

export default App;
