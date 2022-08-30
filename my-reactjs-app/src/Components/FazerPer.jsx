import '../App.css';

// clicar em fazer pergunta
export function FazerPer({ respostas }) {
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  
    
    return (
        <h3>{respostas[numeroAleatorio]}</h3>
    )
}