import { Fragment, useEffect, useState } from 'react'
import { IBoardContext, useBoard } from '../hooks/useBoard'
import { Cell } from '../models/Cell'
import CellComponent from './CellComponent'
import LostFigures from './LostFigures'


const BoardComponent = () =>

  {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)
    const { board, setBoard, currentPlayer, swapPlayer } =
      useBoard() as IBoardContext
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
      <div>
        <h1 className='player'>Current player: {currentPlayer?.color}</h1>
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
           <LostFigures title='Black figures'
         figures={board.lostBlackFigures}
         />
        <LostFigures title='White figures' 
        figures={board.lostWhiteFigures}
        />
        </div>
      </div>
    )
  }

export default BoardComponent
