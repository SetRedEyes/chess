import { useEffect, useState } from 'react'
import BoardComponent from './components/BoardComponent'
import { Board } from './models/Board'
import './App.scss'
import { Player } from './models/Player'
import { Colors } from './models/Colors'

const App = () => {
  const [board, setBoard] = useState(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player| null>(null)

  useEffect(() => {
    restart()
  }, [])

  const restart = () => {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  return (
    <div className='app'>
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  )
}

export default App
