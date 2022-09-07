import '../App.css';

export type PergunProps = {
    respostas: string[];
    fatorRandomico: number;
}

// clicar em fazer pergunta
export function FazerPer({ fatorRandomico, respostas }: PergunProps) {

    const totalRespostas = respostas.length;
    const numeroAleatorio = Math.floor(fatorRandomico * totalRespostas)
    
    return (        
        <h3>{respostas[numeroAleatorio]}</h3>
    )
}