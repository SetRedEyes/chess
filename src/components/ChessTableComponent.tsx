import { IBoardContext, useBoard } from '../hooks/useBoard'
import BoardComponent from './BoardComponent'
import LostFigures from './LostFigures'
import PlayerColorComponent from './PlayerColorComponent'
import Timer from './Timer'

const ChessTableComponent = () => {
  const { board, restart, currentPlayer } = useBoard() as IBoardContext
  return (
    <>
      <LostFigures title='Black figures' figures={board.lostBlackFigures} />
      <div className='player-board'>
        <PlayerColorComponent currentPlayer={currentPlayer} />
        <BoardComponent board={board} />
        <Timer currentPlayer={currentPlayer} restart={restart} />
      </div>

      <LostFigures title='White figures' figures={board.lostWhiteFigures} />
    </>
  )
}

export default ChessTableComponent
