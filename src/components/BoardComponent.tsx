import { Fragment, useEffect, useState } from 'react'
import { IBoardContext, useBoard } from '../hooks/useBoard'
import { Board } from '../models/Board'
import { Cell } from '../models/Cell'
import CellComponent from './CellComponent'

interface BoardProps {
  board: Board
}

const BoardComponent = ({ board }: BoardProps) => {
  const { setBoard, currentPlayer, swapPlayer } = useBoard()

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
