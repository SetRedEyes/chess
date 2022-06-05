import { Figure } from '../models/figures/Figure'
import LostFigures from './LostFigures'

interface LostFiguresTableProps {
  lostBlackFigures: Figure[]
  lostWhiteFigures: Figure[]
}

const LostFiguresTableComponent = ({
  lostBlackFigures,
  lostWhiteFigures
}: LostFiguresTableProps) => {
  return (
    <div className="lost-table">
      <LostFigures title='Black figures' figures={lostBlackFigures} />
      <LostFigures title='White figures' figures={lostWhiteFigures} />
    </div>
  )
}

export default LostFiguresTableComponent
