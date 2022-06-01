import { Fragment, useEffect, useState } from 'react'
import { Board } from '../models/Board'
import { Cell } from '../models/Cell'
import CellComponent from './CellComponent'
interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
}

const BoardComponent = ({ board, setBoard }: BoardProps) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  const clickHandler = (cell: Cell) => {
    cell.figure && setSelectedCell(cell)
  }

  useEffect(() => {
    highlightCells()
  }, [selectedCell])

  const highlightCells = () => {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (
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
  )
}

export default BoardComponent
