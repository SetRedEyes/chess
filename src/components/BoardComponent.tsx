import { Fragment, useEffect, useState } from 'react'
import { Board } from '../models/Board'
import { Cell } from '../models/Cell'
import { Player } from '../models/Player'
import CellComponent from './CellComponent'
interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
  currentPlayer: Player | null
  swapPlayer: () => void
}

const BoardComponent = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayer
}: BoardProps) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  const clickHandler = (cell: Cell) => {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell)
      swapPlayer()
      setSelectedCell(null)
    } else if (cell.figure?.color === currentPlayer?.color) {
      setSelectedCell(cell)
    }
  }

  useEffect(() => {
    highlightCells()
  }, [selectedCell])

  const highlightCells = () => {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  const updateBoard = () => {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (
    <>
    <h3>Current player {currentPlayer?.color}</h3>
      <div className='board'>
        {board.cells.map((row, index) => (
          <Fragment key={index}>
            {row.map((cell) => (
              <CellComponent
                selectCellClick={clickHandler}
                cell={cell}
                key={cell.id}
                selected={
                  cell.x === selectedCell?.x && cell.y === selectedCell?.y
                }
              />
            ))}
          </Fragment>
        ))}
      </div>
    </>
  )
}

export default BoardComponent
