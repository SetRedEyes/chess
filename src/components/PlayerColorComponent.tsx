import { Player } from '../models/Player'

interface PlayerColorProps {
  currentPlayer: Player | null
}

const PlayerColorComponent = ({ currentPlayer }: PlayerColorProps) => {
  return <h1 className='player'>Current player: {currentPlayer?.color}</h1>
}

export default PlayerColorComponent
