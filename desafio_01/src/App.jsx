import { useState } from 'react'
import createFilter  from 'bad-words'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import palavroes from './palavroes'

function App() {
  const [text, setText] = useState('')
  const [show, setShow] = useState(false)
  const [frase, setFrase] = useState('')
  const [coments, setComents] = useState('')
    const handleChange = (e) => {
    const { value } = e.target;
    //console.log(value);
    setText(value);
  };
  const checarPalavroes = (frase) => {
    let palavras = frase.toLowerCase().split(/[ ,.;]+/);
    let temPalavraInadequada = false;
    for (let i = 0; i < palavras.length; i++) {
      if (palavroes.includes(palavras[i])) {
        temPalavraInadequada = true;
        break;
      }
    }
    if (temPalavraInadequada) {
      return 'Seu comentário possui uma ou mais palavras que podem ser consideradas como conteúdo ofensivo.';
    } else {
      return 'O comentário não possui palavras inapropriadas.';
    }
  };
  const handleClick = () => {
    const fraseFormatada = 
    checarPalavroes(text);
    setFrase(fraseFormatada);
    console.log(frase);
    setShow(true);
  };
  return (
    <div>
      <div className='titulo'>
      <h1>Comment Test</h1>
      </div>
    <input  value={text} onChange={handleChange} placeholder='Digite um comentário:' type="text"/>
    <button onClick={handleClick}>Salvar</button>
    <h2>{frase}</h2>
    </div>
  )
}

export default App
