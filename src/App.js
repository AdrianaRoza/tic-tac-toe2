import { useState } from "react";

export default function App() {

  // ESTILOS
  const board = {
    display:'flex',
    flexDirection:'column'
  }
  const boardLine = {
    display:'flex',
    flexDirection: 'row'
  }
  const house = {
    width: 100,
    height: 100,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection: 'row',
    cursor:'pointer',
    fontSize:'60',
    border:'1px solid #000'
  }

  const jogoInicial = [['','',''],['','',''],['','','']]
  const [jogo,setJogo] = useState([['','',''],['','',''],['','','']])
  const [simboloAtual,setSimboloAtual] = useState('X')
  const [jogando,setJogando] = useState(true)

  

  return(
    <>
    
    </>
  )
}

