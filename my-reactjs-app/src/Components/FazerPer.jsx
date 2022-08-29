import '../../src/App.css'
import { respostas } from '../App'

// clicar em fazer pergunta
export function fazerPergunta() {

    
    
    document.body.innerHTML = JSON.stringify(respostas)
}