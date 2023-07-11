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

  const tabuleiro = (j) => {
    return(
      <div style={board}>
        <div style={boardLine}>
          <div style={house} data-pos='00' onClick="">{j[0][0]}</div>
          <div style={house} data-pos='01' onClick="">{j[0][1]}</div>
          <div style={house} data-pos='02' onClick="">{j[0][2]}</div>
        </div>
        <div style={boardLine}>
          <div style={house} data-pos='10' onClick="">{j[1][0]}</div>
          <div style={house} data-pos='11' onClick="">{j[1][1]}</div>
          <div style={house} data-pos='12' onClick="">{j[1][2]}</div>
        </div>
        <div style={boardLine}>
          <div style={house} data-pos='20' onClick="">{j[2][0]}</div>
          <div style={house} data-pos='21' onClick="">{j[2][1]}</div>
          <div style={house} data-pos='22' onClick="">{j[2][2]}</div>
        </div>
      </div>
    )
  }

  return(
    <>
    
    </>
  )
}

