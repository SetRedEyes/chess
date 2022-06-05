import { IBoardContext, useBoard } from '../hooks/useBoard'
import BoardComponent from './BoardComponent'
import LostFigures from './LostFigures'
import PlayerColorComponent from './PlayerColorComponent'

const ChessTableComponent = () => {
  const { board, currentPlayer } = useBoard() as IBoardContext
  return (
    <>
      <LostFigures title='Black figures' figures={board.lostBlackFigures} />
      <div className='player-board'>
        <PlayerColorComponent currentPlayer={currentPlayer} />
        <BoardComponent board={board} />
      </div>
      <LostFigures title='White figures' figures={board.lostWhiteFigures} />
    </>
  )
}

export default ChessTableComponent
