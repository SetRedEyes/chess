import { useBoard } from '../hooks/useBoard'

const PlayerColorComponent = () => {
  const { currentPlayer } = useBoard()

  return <h1 className='player'>Current player: {currentPlayer?.color}</h1>
}

export default PlayerColorComponent
