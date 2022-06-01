import { Cell } from '../models/Cell'
interface CellProps {
  cell: Cell
  selected: boolean
  selectCellClick: (cell: Cell) => void
}

const CellComponent = ({ cell, selected, selectCellClick }: CellProps) => {
  return (
    <div
      className={[
        'cell',
        cell.color,
        selected ? 'selected' : '',
        cell.available && cell.figure ? 'available-attack' : ''
      ].join(' ')}
      onClick={() => selectCellClick(cell)}
    >
      {cell.available && !cell.figure && (
        <div className={'available-move'}></div>
      )}
      {cell.figure?.logo && (
        <img src={cell.figure.logo} alt={cell.figure.name} />
      )}
    </div>
  )
}

export default CellComponent
