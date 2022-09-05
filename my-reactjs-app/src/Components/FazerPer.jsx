import '../App.css';

// clicar em fazer pergunta
export function FazerPer({ fatorRandomico, respostas }) {

    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(fatorRandomico * totalRespostas)
    
    return (        
        <h3>{respostas[numeroAleatorio]}</h3>
    )
} 