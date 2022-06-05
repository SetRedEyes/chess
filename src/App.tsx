import './App.scss'
import ChessTableComponent from './components/ChessTableComponent'
import { BoardProvider } from './hooks/useBoard'

const App = () => {
  return (
    <BoardProvider>
      <div className='app'>
        <ChessTableComponent />
      </div>
    </BoardProvider>
  )
}

export default App
