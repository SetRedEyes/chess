import { useEffect, useRef, useState } from 'react'
import { Colors } from '../models/Colors'
import { Player } from '../models/Player'

interface TimerProps {
  currentPlayer: Player | null
  restart: () => void
}

const Timer = ({ currentPlayer, restart }: TimerProps) => {
  const [blackTime, setBlackTime] = useState(300)
  const [whiteTime, setWhiteTime] = useState(300)
  const timer = useRef<null | ReturnType<typeof setInterval>>(null)

  useEffect(() => {
    startTimer()
  }, [currentPlayer])

  const startTimer = () => {
    if (timer.current) {
      clearInterval(timer.current)
    }
    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer
    timer.current = setInterval(callback, 1000)
  }

  const decrementBlackTimer = () => {
    setBlackTime((prev) => prev - 1)
  }
  const decrementWhiteTimer = () => {
    setWhiteTime((prev) => prev - 1)
  }

  const handleRestart = () => {
    setWhiteTime(300)
    setWhiteTime(300)
    restart()
  }

  return (
    <div className='timer'>
      <h2 className='player-time'>Black - {blackTime}</h2>

      <button className='restart-btn' onClick={handleRestart}>Restart game</button>

      <h2 className='player-time'>White - {whiteTime} </h2>
    </div>
  )
}

export default Timer
