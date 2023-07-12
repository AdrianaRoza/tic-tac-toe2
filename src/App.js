
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

  const boards = (j) => {
    return(
      <div style={board}>
        <div style={boardLine}>
          <div style={house} data-pos='00' onClick={(e)=>play(e)}>{j[0][0]}</div>
          <div style={house} data-pos='01' onClick={(e)=>play(e)}>{j[0][1]}</div>
          <div style={house} data-pos='02' onClick={(e)=>play(e)}>{j[0][2]}</div>
        </div>
        <div style={boardLine}>
          <div style={house} data-pos='10' onClick={(e)=>play(e)}>{j[1][0]}</div>
          <div style={house} data-pos='11' onClick={(e)=>play(e)}>{j[1][1]}</div>
          <div style={house} data-pos='12' onClick={(e)=>play(e)}>{j[1][2]}</div>
        </div>
        <div style={boardLine}>
          <div style={house} data-pos='20' onClick={(e)=>play(e)}>{j[2][0]}</div>
          <div style={house} data-pos='21' onClick={(e)=>play(e)}>{j[2][1]}</div>
          <div style={house} data-pos='22' onClick={(e)=>play(e)}>{j[2][2]}</div>
        </div>
      </div>
    )
  }

  const replayButton = () => {
    if(!playing){
      return <button onClick={()=>restart()}>Jogar Novamente</button>
    }
  }

  const checkingWin = () => {
    //  VERIFICATIONS LINES
    let points= 0
    let victory= false
    for(let l=0; l<3; l++){
      points=0;
      for(let c=0; c<3; c++){
        if(game[l][c] == currentSymbol){
          points++
        }
      }
      if(points >= 3) {
        victory= true
        break
        
      }
    }

    // VERIFICATIONS COLUMN
    for(let c=0; c<3; c++){
      points=0;
      for(let l=0; l<3; l++){
        if(game[l][c] == currentSymbol){
          points++
        }
      }
      if(points >= 3) {
        victory= true
        break
      }
    }
    
    // VERIFICATIONS DIAGONS
    points=0
    for(let d=0; d<3; d++){
      if(game[d][d] == currentSymbol){
          points++
      }
    }  
    if(points >= 3){
      victory= true
    }

    points=0
    let l=0
    for(let c=2; c >= 0; c--){
      if(game[l][c] == currentSymbol){
        points++
      }
      l++
    }
    if(points >= 3){
      victory= true
    }
    return victory
  }

  const  playerSwitch = () => {
    currentSymbol == 'X' ? setCurrentSymbol('O'):setCurrentSymbol('X')
  }

  const returnPosition = (e) => {
    const p=e.target.getAttribute('data-pos')
    const pos = [parseInt(p.substring(0,1)),parseInt(p.substring(1,2))]
    return pos
  }

  const emptySpace = (e) => {
    if(game[returnPosition(e)[0]][returnPosition(e)[1]]==''){
      return true
    }else{
      return false
    }
  }

  const play = (e) => {
    if(playing){
      if(emptySpace(e)){
        game[returnPosition(e)[0]][returnPosition(e)[1]] = currentSymbol
        playerSwitch()
        if(checkingWin()){
          playerSwitch()
          alert('Jogador' +  currentSymbol  + 'venceu!')
          setPlaying(false)
        }
      }else{
        alert('Este espaço não está disponível, escolha outro')
      }
    }
  }

  const restart = () => {
    setPlaying(true)
    setGame(startingGame)
    setCurrentSymbol('X')
  }


  return(
    <>
    <div>
      <p>Quem joga: {currentSymbol}</p>
    </div>
    <div>
      {boards (game)}
    </div>
    <div>
      {replayButton()}
    </div>
  
    </>
  )
} 
