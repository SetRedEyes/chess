import { IBoardContext, useBoard } from '../hooks/useBoard'
import BoardComponent from './BoardComponent'
import LostFigures from './LostFigures'
import PlayerColorComponent from './PlayerColorComponent'
import Timer from './Timer'

const ChessTableComponent = () => {
  const { board } = useBoard() as IBoardContext
  return (
    <>
      <LostFigures title='Black figures' figures={board.lostBlackFigures} />
      <div className='player-board'>
        <PlayerColorComponent />
        <BoardComponent board={board} />
        <Timer />
      </div>
      <LostFigures title='White figures' figures={board.lostWhiteFigures} />
    </>
  )
}

export default ChessTableComponent
