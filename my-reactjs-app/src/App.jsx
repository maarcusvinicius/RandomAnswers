import { fazerPergunta } from './Components/FazerPer';
import './App.css'

function App() {
  return (
    <div id="container">
      <img
        src="https://static.wixstatic.com/media/5fb0d1_159e06a06085497ab368ce408a7d9661~mv2.gif"
        alt="SpaceExploration"
      />
      <h1>Vou revelar seu destino!</h1>
      <p>Clique em fazer pergunta para que seu destino seja revelado.</p>
      <input id="inputPergunta" value="" type="text" placeholder="Digite sua pergunta" />
      <button id="buttonPerguntar" onClick={fazerPergunta()}>Fazer Pergunta</button>

      <h3 id="resposta"></h3>
    </div>
  )
}

export default App;
