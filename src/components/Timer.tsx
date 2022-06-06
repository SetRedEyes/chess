import { useEffect, useRef, useState } from 'react'
import { useBoard } from '../hooks/useBoard'
import { Colors } from '../models/Colors'

const Timer = () => {
  const { swapPlayer, restart, currentPlayer } = useBoard()
  const [blackTime, setBlackTime] = useState<number | undefined>(300)
  const [whiteTime, setWhiteTime] = useState<number | undefined>(300)
  const timer = useRef<null | ReturnType<typeof setInterval>>(null)
  const {} = useBoard()

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
    setBlackTime((prev) => {
      if (prev && prev > 0) {
        setWhiteTime(300)
        return prev - 1
      } else {
        swapPlayer()
        setWhiteTime(300)
      }
    })
  }

  const decrementWhiteTimer = () => {
    setWhiteTime((prev) => {
      setBlackTime(300)
      if (prev && prev > 0) {
        return prev - 1
      } else {
        swapPlayer()
        setBlackTime(300)
      }
    })
  }

  const handleRestart = () => {
    setWhiteTime(300)
    setBlackTime(300)
    restart()
  }

  return (
    <div className='timer'>
      <h2 className='player-time'>Black - {blackTime ?? 0}</h2>
      <button className='restart-btn' onClick={handleRestart}>
        Restart game
      </button>
      <h2 className='player-time'>White - {whiteTime ?? 0} </h2>
    </div>
  )
}

export default Timer
