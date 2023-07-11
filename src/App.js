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

  const startingGame = [['','',''],['','',''],['','','']]
  const [game,setGame] = useState([['','',''],['','',''],['','','']])
  const [currentSymbol,setCurrentSymbol] = useState('X')
  const [playing,setPlaying] = useState(true)

  

  return(
    <>
    
    </>
  )
}

