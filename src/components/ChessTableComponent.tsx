import { IBoardContext, useBoard } from '../hooks/useBoard'
import BoardComponent from './BoardComponent'
import LostFiguresTableComponent from './LostFiguresTableComponent'
import PlayerColorComponent from './PlayerColorComponent'

const ChessTableComponent = () => {
  const { board, currentPlayer } = useBoard() as IBoardContext
  return (
    <div>
      <PlayerColorComponent currentPlayer={currentPlayer} />
      <BoardComponent board={board} />
      <LostFiguresTableComponent
        lostBlackFigures={board.lostBlackFigures}
        lostWhiteFigures={board.lostWhiteFigures}
      />
    </div>
  )
}

export default ChessTableComponent
